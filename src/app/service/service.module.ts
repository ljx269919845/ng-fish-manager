import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { UeditorUploadService } from './ueditor-upload.service';
import { FishClassifyService } from './fish-classify.service';
import { FishPlaceService } from './fish-place.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  providers: [ LoginService, UeditorUploadService, FishClassifyService, FishPlaceService ]
})
export class ServiceModule {}
