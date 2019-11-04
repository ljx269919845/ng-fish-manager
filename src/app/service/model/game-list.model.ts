export class GameListQueryParamsObj {
    constructor(
        public name?: string,        // 游戏名称
        public process?: string,     // 进程状态（进程类型-进程状态）
        public processArray?: string // 进程状态（进程类型-进程状态）(多状态)
    ) { }
}
export class ProcessArrayObj {
    constructor(
        public ctime?: string,
        public gid?: string,
        public version?: string,
        public process?: string
    ) { }
}

export class GameListListDataObj {
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
        public linkcode?: string,      // ISLI编码
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
        public utime?: string,
        public processList?: Array<ProcessArrayObj>
    ) { }
}

export enum GAME_TYPE_ENUM {
    // （1 消除类，2 跑酷类，3 飞行类，4 棋牌类，5 解谜类，6 体育类，7 音乐舞蹈类，0 其他）
    ELIMINATION_CLASS = 1, PARKOUR_CLASS = 2, FLIGHT_CLASS = 3,
    CHESS_BOARD = 4, PUZZLE = 5, SPORTS = 6, MUSIC_AND_DANCE = 7,
    OTHER = 0
}
