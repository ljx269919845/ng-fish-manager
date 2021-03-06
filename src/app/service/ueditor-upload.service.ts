import { Injectable } from '@angular/core';
import { IMAGE_ERROE, HttpImageUpload, ImageUploadData, ImageVaildOptions } from 'src/app/core/image';
// import { GAME_FILE_TYPE } from '../content/game-create-update/game-create-update.model';

export const UEDITOR_IAMGE_UPLOAD_PATH = '/game-management/file-upload/{flag}';

@Injectable()
export class UeditorUploadService {
  private showErrorMsg;
  private success;
  private loadingFunc;
  private failedFunc;
  private imageUpload: ImageUploadData;

  constructor(private imageUploader: HttpImageUpload) {
    const imgSize = 2 * 1024 * 1024;
    this.imageUpload = new ImageUploadData(this.imageUploader, UEDITOR_IAMGE_UPLOAD_PATH, 'file');
    this.imageUpload.setImageValidOptions(new ImageVaildOptions(this.validImage.bind(this), imgSize, []));
    window['ueditorImageUpload'] = {
      registerShowErrorMsgCall: this.registerShowErrorMsgCall.bind(this),
      registerSuccess: this.registerSuccess.bind(this),
      selectPic: this.addFile.bind(this),
      registerloading: this.registerloading.bind(this),
      registerFailed: this.registerFailed.bind(this)
    };
  }

  registerShowErrorMsgCall(func) {
    this.showErrorMsg = func;
  }

  registerSuccess(func) {
    this.success = func;
  }

  registerFailed(func) {
    this.failedFunc = func;
  }

  registerloading(func) {
    this.loadingFunc = func;
  }

  validImage(errType: IMAGE_ERROE) {
    let errorMsg;
    if (errType == IMAGE_ERROE.NO_ERRROR) {
    } else if (errType == IMAGE_ERROE.FIEL_TYPE_ERROR) {
      errorMsg = '图片格式不支持';
    } else if (errType == IMAGE_ERROE.SIZE_ERROR) {
      errorMsg = '图片不能超过2M';
    } else if (errType == IMAGE_ERROE.CONTENT_ERROR) {
      errorMsg = '不能识别的图片';
    } else {
      errorMsg = '图片分辨率不支持';
    }
    if (errorMsg) {
      this.showErrorMsg && this.showErrorMsg(errorMsg);
    }
  }

  addFile(event: UIEvent) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    this.imageUpload
      .setImageFile(target.files[0])
      .post({}, { flag: 'editor' })
      .before(() => {
        this.loadingFunc && this.loadingFunc();
      })
      .success((res) => {
        this.success && this.success(res.data);
      })
      .error(() => {
        target.value = null;
      });
  }
}
