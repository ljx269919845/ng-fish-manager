import { Component, OnInit, Input, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ImageUploadData, HttpImageUpload, ImageVaildOptions } from 'src/app/core';

const FILEUPLOAD_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FileUploadComponent),
  multi: true
};

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: [ './file-upload.component.scss' ],
  providers: [ FILEUPLOAD_VALUE_ACCESSOR ]
})
export class FileUploadComponent implements OnInit, ControlValueAccessor {
  @Input() uploadTxt = '上传';
  @Input() accept = 'image/jpeg,image/png,image/bmp';
  @Input() url = '';
  @Input() alias = 'file';
  @Input() formData = {};
  @ViewChild('file', { static: false })
  fileInput: ElementRef;
  public imgUrl: string;
  public stepValue = 0;
  private imageUpload: ImageUploadData;
  private valueChange = (v: string) => {};
  private touchChange = (v: string) => {};

  constructor(private imageUploader: HttpImageUpload) {
    this.imageUpload = new ImageUploadData(imageUploader, this.url, this.alias);
    this.imageUpload.setImageValidOptions(new ImageVaildOptions(this.validFunc.bind(this)));
  }

  ngOnInit() {}

  registerOnChange(func: (_: any) => void) {
    this.valueChange = func;
  }

  registerOnTouched(func: (_: any) => void) {
    this.touchChange = func;
  }

  writeValue(imgUrl: string) {
    this.imgUrl = imgUrl;
  }

  handleFileClick() {
    this.fileInput.nativeElement.click();
  }

  validFunc() {}

  handleFileChange(event: UIEvent) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (!target.files || !target.files[0]) {
      return;
    }
    this.imageUpload
      .setImageFile(target.files[0])
      .post({}, this.formData)
      .before(() => {
        this.stepValue = 0;
      })
      .success((res) => {
        this.url = res.data;
        this.valueChange(res.data);
      })
      .process((current: number, total: number) => {
        this.stepValue = current / total;
      })
      .after(() => {
        target.value = null;
        this.stepValue = 0;
      });
  }
}
