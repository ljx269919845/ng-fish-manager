import { GAME_TYPE_ENUM } from './game-list.model';

export class WholeProcessSearchObj {
    constructor(
        public gameName?: string,
        public gameStatus?: string,
        public abnormal?: string
    ) { }
}

export class WholeProcessGameListObj {
    constructor(
        public gameName?: string,
        public url?: string,
        public status?: string,
        public id?: string
    ) { }
}
export class WholeProcessGameListTotalObj {
    constructor(
        public total?: string,
        public abnormal?: string
    ) { }
}
export class GameOverviewDataObj {
    constructor(
        public audittype?: number,     // 游戏审批类别（1 属于《...》第三条范围，2 属于《...》第四条范围
        public bin?: string,           // 安装包
        public classification?: GAME_TYPE_ENUM, // 游戏类别
        public copyright?: string,     // 游戏著作权
        public count?: string,         // 子版本数量
        public ctime?: string,
        public datagram?: string,      // 游戏资料包
        public icon?: string,          // 游戏图标
        public id?: string,            // 游戏ID
        public imprint?: string,       // 版本说明
        public introduce?: string,     // 游戏介绍
        public islicode?: string,      // ISLI编码
        public isliflag?: string,      // ISLI标志码
        public mainver?: string,       // 游戏大版本
        public mid?: string,           // 父版本数据ID
        public name?: string,          // 游戏名称
        public organization?: string,  // 游戏运营机构
        public otime?: string,         // 预定出版运营时间
        public platform?: number,      // 游戏平台：0 安卓, 1 苹果
        public process?: string,       // 进程状态（进程类型-进程状态）
        public pstime?: string,
        public rfile?: string,
        public screenshot?: string,    // 游戏截图
        public version?: string,       // 游戏版本
        public utime?: string
    ) { }
}


export class GameWholeProcessDataCollectionObj {
    constructor(
        public otime?: string,         // 操作时间
        public oprator?: string,       // 操作者
        public operationItem?: string, // 操作项
        public device?: string,        // 设备
        public system?: string,        // 系统
        public version?: string,       // 游戏版本
        public check?: string,         // 版本校验
        public operatingTime?: string, // 操作时长
    ) { }
}
