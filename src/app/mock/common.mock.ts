import { registerMock } from '../core/http-mock';
import { DropDownOption } from '../service';
import { GET_GAME_CLASSISFIES, GET_GAME_PROCESS_STATUS } from '../service/common.service';

export const GameClassifies = [
  {
    key: 1,
    value: '消除类'
  },
  {
    key: 2,
    value: '跑酷类'
  },
  {
    key: 3,
    value: '飞行类'
  },
  {
    key: 4,
    value: '棋牌类'
  },
  {
    key: 5,
    value: '解谜类'
  },
  {
    key: 6,
    value: '体育类'
  },
  {
    key: 7,
    value: '音乐舞蹈类'
  },
  {
    key: 0,
    value: '其他'
  }
];

const gameAllStatus = [
  {
    pkey: 1,
    pvalue: '信息完善',
    status: [
      {
        key: 1,
        value: '信息完善'
      }
    ]
  },
  {
    pkey: 2,
    pvalue: '游戏审核',
    status: [
      {
        key: 1,
        value: '自动化审核中'
      },
      {
        key: 2,
        value: '人工审核中'
      },
      {
        key: 3,
        value: '审核未通过'
      },
      {
        key: 4,
        value: '审核通过'
      }
    ]
  },
  {
    pkey: 3,
    pvalue: '版号分配',
    status: [
      {
        key: 1,
        value: '待申请'
      },
      {
        key: 2,
        value: '待分配'
      },
      {
        key: 3,
        value: '已分配'
      },
      {
        key: 4,
        value: '已生效'
      },
      {
        key: 5,
        value: '未生效'
      }
    ]
  },
  {
    pkey: 4,
    pvalue: '版号审批',
    status: [
      {
        key: 1,
        value: '待报备'
      },
      {
        key: 2,
        value: '待批准'
      },
      {
        key: 3,
        value: '已批准'
      },
      {
        key: 4,
        value: '已拒绝'
      }
    ]
  },
  {
    pkey: 5,
    pvalue: '游戏发布',
    status: [
      {
        key: 1,
        value: '待发布'
      },
      {
        key: 2,
        value: '已发布'
      },
      {
        key: 3,
        value: '已下架'
      }
    ]
  }
];
registerMock('get', GET_GAME_CLASSISFIES, GameClassifies);
registerMock('get', GET_GAME_PROCESS_STATUS, gameAllStatus);
