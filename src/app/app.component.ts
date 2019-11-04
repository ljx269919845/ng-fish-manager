import { SessionInvalid } from './core/session_invalid.service';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UeditorUploadService } from './service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  providers: [ MessageService, SessionInvalid ]
})
export class AppComponent {
  title = 'fish-manager';

  constructor(private editorUploadServ: UeditorUploadService, private sessionInvaildServ: SessionInvalid) {}
}
