import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameTypeTransPipe } from './game-type-trans.pipe';
import { GameStatusTransPipe } from './game-status-trans.pipe';
import { GameProcessDetailsTransPipe } from './game-process-details-trans.pipe';
import { PlatformTransPipe } from './platform-trans.pipe';
import { AuditTypeTransPipe } from './audit-type-trans.pipe';

@NgModule({
  declarations: [
    GameTypeTransPipe,
    GameStatusTransPipe,
    GameProcessDetailsTransPipe,
    PlatformTransPipe,
    AuditTypeTransPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameTypeTransPipe,
    GameStatusTransPipe,
    GameProcessDetailsTransPipe,
    PlatformTransPipe,
    AuditTypeTransPipe
  ]
})
export class PipeModule { }
