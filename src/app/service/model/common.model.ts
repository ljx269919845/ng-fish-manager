export class DropDownObj {
  constructor(public label?: string, public value?: string) { }
}

export class PageParams {
  constructor(
    public pageIndex: number = 1,
    public pageRows: number = 10
  ) { }
}

export class GameCountObj {
  constructor(
    public apply?: number,       // 版号申请中
    public approved?: number,    // 版号已通过
    public release?: number,     // 已发布
    public total?: number,       // 总数量
    public mainverCount?: number // 游戏数量
  ) { }
}

export enum GAME_STATUS {
  INIT = 0, // ��ʼ����
  AUTO_CHECKING, // �Զ����
  MANUAL_CHECKING, // �˹����
  FAILED_CHECKED, // ���ʧ��
  SUCCESS_CHECKED, // ��˳ɹ�
  WAIT_FOR_APPLY_CODE, // �ȴ������־��
  WAIT_ASSIGN_CODE, // �ȴ������־��
  ASSIGNED_CODE, // Ԥ�����־��
  WAIT_FOR_REPORTTING, // �ȴ�����
  WAIT_FOR_AGREE, // �ȴ���׼
  SUCCESS_AGREE, // �Ѿ���׼
  FAILED_AGREE, // �ܾ���׼
  WAIT_FOR_SEND_CLOUD, // �ȴ�������������
  SENDED_CLOUD // ������������
}

/**
 * 游戏创建步骤
 */
export enum GAME_PROCESS_STATUS {
  BASIC_INFO = 1, // 完善信息
  AUTO_CHECK, // 游戏自动审核
  APPLY_ISLI_CODE, // 申请游戏版本号
  CHECK_REDAY, // 报备出版审批
  PUBLISH_CLOUD // 发布到云中枢
}

export interface CommonType {
  key: number;
  value: string;
}

export class DropDownOption {
  constructor(public label: string, public value: any, public data?: any) { }
}

export interface GameStatus {
  [key: number]: Array<DropDownOption>;
}
