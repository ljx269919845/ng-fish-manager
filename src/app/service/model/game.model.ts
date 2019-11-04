import { GAME_PROCESS_STATUS } from './common.model';
/**
 * 游戏基本信息
 */
export class GameBasic {
  constructor(
    public id?: string, // 游戏ID
    public name?: string, // 游戏名称
    public version?: string, // 游戏版本
    public classification?: number, // 游戏类别
    public introduce?: string, // 游戏介绍
    public copyright?: string, // 游戏著作权
    public organization?: string, // 游戏运营机构
    public icon?: string, // 游戏图标
    public screenshot?: string, // 游戏截图
    public bin?: string, // 安装包
    public datagram?: string, // 游戏资料包
    public ctime?: string, // 创建时间
    public utime?: string, // 更新时间
    public process?: GAME_PROCESS_STATUS, // 进程状态（进程类型-进程状态）
    public pstime?: string, // 进程时间
    public platform?: any,
    public imprint?: string, // 版本说明
    public publisher?: string, // 出版者id
    public publisherName?: string, // 出版者名称
    public mid?: string, // 主版本号ID
    public mainver?: string, // 主版本号
    public otime?: string, // 预定出版运营时间
    public audittype?: number, // 游戏申请审批类别
    public linkcode?: string, // 关联编码
    public isliflag?: string // 标志码管理
  ) {}
}

/** 游戏审核信息 */
export class GameAudit {
  constructor(
    public id?: string,
    public gid?: string,
    public ctime?: string, // 提审时间
    public status?: number, // 审核状态 （1 自动化审核中，2 人工审核中，3 审核未通过，4 审核通过）
    public aatime?: string, // 自动化审核时间
    public aareply?: string, // 自动化审核结果
    public matime?: string, // 人工审核时间
    public mareply?: string // 人工审核结果
  ) {}
}

/** 游戏申请流程信息 */
export class GameApply {
  constructor(
    public id?: string,
    public gid?: string,
    public status?: number, // ISLI申请状态  （1 待申请，2 待分配，3 已分配，4 已生效，5 未生效）
    public ctime?: string, // ISLI申请时间
    public dtime?: string, // ISLI分配时间
    public etime?: string, // ISLI生效时间
    public islicode?: string,
    public linkcode?: string
  ) {}
}

/** 游戏报备信息 */
export class GameReport {
  constructor(
    public id?: string,
    public acontent?: string,
    public gid?: string,
    public status?: number, // 报备审批状态（1 待报备，2 待批准，3 已批准，4 已拒绝）
    public ctime?: string, // 报备申请时间
    public cfile?: string, // 报备批复时间
    public rtime?: string, // 报备批复时间
    public rfile?: string, // 报备批复文件
    public rreply?: string // 报备拒绝原因
  ) {}
}

export class GameRelease {
  constructor(
    public id?: string,
    public gid?: string,
    public status?: number, // 发布状态（1 待发布，2 已发布，3 已下架）
    public ctime?: string, // 发布时间
    public rtime?: string // 下架时间
  ) {}
}

export class SimpleGameVersion {
  constructor(public gid?: string, public mainver?: string, public name?: string, public version?: string) {}
}
