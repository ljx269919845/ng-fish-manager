import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { HomeService } from './home.service';
import { GameListService } from './game-list.service';
import { GameDetailsService } from './game-details.service';
import { GameVersionService } from './game-version.service';
import { UeditorUploadService } from './ueditor-upload.service';
import { WholeProcessService } from './whole-process.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    LoginService,
    HomeService,
    GameListService,
    GameVersionService,
    GameDetailsService,
    UeditorUploadService,
    WholeProcessService
  ]
})
export class ServiceModule { }
