import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { UeditorUploadService } from './ueditor-upload.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  providers: [ LoginService, UeditorUploadService ]
})
export class ServiceModule {}
