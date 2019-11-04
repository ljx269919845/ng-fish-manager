import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../service/home.service';
import { GameCountObj } from '../../../service/model';
import { Router } from '@angular/router';
import { CommonService } from '../../../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public gameOverviewData: GameCountObj;

  constructor(
    private router: Router,
    private commonSercice: CommonService,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getGameOverviewData();
  }

  /**
   * 获取游戏版号申请概况数据
   */
  getGameOverviewData() {
    this.commonSercice.getGameCount().success((res) => {
      this.gameOverviewData = res.data;
    });
  }

  /**
   * 创建游戏
   */
  handleCreateClick() {
    this.router.navigate(['/content/game']);
  }

  /**
   * 查看列表
   */
  handleViewClick() {
    this.router.navigate(['/content/game-list']);
  }

  /**
   * 全流程跟踪
   */
  handleTrackClick() {
    this.router.navigate(['/content/whole-process']);
  }

  handlesIsliDataClick() {

  }

  handleOpenPlatformClick() {

  }

  handleSystemManagementClick() {

  }
}
