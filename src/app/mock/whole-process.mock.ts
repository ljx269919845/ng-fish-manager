// import { registerMock } from '../core/http-mock';
// import { WholeProcessGameListObj, GameOverviewDataObj, GameWholeProcessDataCollectionObj } from '../service/model';

// const GET_GAME_LIST_URL = 'GET_GAME_LIST_URL';
// const GET_GAME_LIST_TOTAL_URL = 'GET_GAME_LIST_TOTAL_URL';  // 全流程跟踪管控-数量
// const GET_GAME_OVERVIEW_URL = 'GET_GAME_OVERVIEW_URL'; // 全流程跟踪管控-游戏详情
// const GET_GAME_DATA_COLLECT_URL = 'GET_GAME_DATA_COLLECT_URL'; // 游戏全流程数据采集
// const GET_GAME_DATA_APPROVAL_URL = 'GET_GAME_DATA_APPROVAL_URL'; // 游戏审批全流程
// const GET_GAME_DATA_COLLECT_VERSION_URL = 'GET_GAME_DATA_COLLECT_VERSION_URL'; // 游戏全流程数据采集-版本

// function getGameListData() {
//     const obj = [
//         new WholeProcessGameListObj(
//             '火烈鸟传说', '/assets/images/mock/p1.png', '1', '1'),
//         new WholeProcessGameListObj(
//             '灌篮高手', '/assets/images/mock/p2.png', '1', '1'),
//         new WholeProcessGameListObj(
//             '跳跳鸡', '/assets/images/mock/p3.png', '1', '1'),
//         new WholeProcessGameListObj(
//             '灌篮高手', '/assets/images/mock/p4.png', '1', '1'),
//         new WholeProcessGameListObj(
//             '跳跳鸡', '/assets/images/mock/p1.png', '3', '1'),
//         new WholeProcessGameListObj(
//             '灌篮高手', '/assets/images/mock/p3.png', '2', '1'),
//         new WholeProcessGameListObj(
//             '跳跳鸡', '/assets/images/mock/p2.png', '1', '1'),
//         new WholeProcessGameListObj(
//             '火烈鸟传说', '/assets/images/mock/p3.png', '1', '1'),
//         new WholeProcessGameListObj(
//             '灌篮高手', '/assets/images/mock/p4.png', '1', '1'),
//         new WholeProcessGameListObj(
//             '跳跳鸡', '/assets/images/mock/p1.png', '3', '1'),
//         new WholeProcessGameListObj(
//             '灌篮高手', '/assets/images/mock/p3.png', '1', '1'),
//         new WholeProcessGameListObj(
//             '跳跳鸡', '/assets/images/mock/p2.png', '1', '1'),
//         new WholeProcessGameListObj(
//             '跳跳鸡', '/assets/images/mock/p4.png', '1', '1'),
//         new WholeProcessGameListObj(
//             '火烈鸟传说', '/assets/images/mock/p1.png', '1', '1'),
//         new WholeProcessGameListObj(
//             '灌篮高手', '/assets/images/mock/p3.png', '2', '1')];
//     return {
//         resultCode: '00000000',
//         resultMsg: 'ok',
//         data: {
//             pageDataList: obj,
//             pageDataSize: 28
//         }
//     };
// }
// function getGameOverviewData() {
//     const obj =
//         new GameOverviewDataObj(
//             1, '/assets/images/mock/p1.png', 3, '测试', '0', 'false', '2019-10-23 10:34:44', '/assets/images/mock/p1.png', '1233',
//             'test eeeee', 'tset测试可好看金龙卡金龙卡将龙井路口金龙卡化橘红i欧珀ipipoeIPOip', '201980-3332349204859-3',
//             '201980-3332349204859-3', '13', '34', '测试游戏名称', 'dssfsdcsdsdf', '2019-10-30 12:34:22', 0, '2-2', '2019-10-23 23:28:34',
//             '', '', '15.0.2', '2019-10-29 13:23:32');
//     return {
//         resultCode: '00000000',
//         resultMsg: 'ok',
//         data: obj
//     };
// }
// function getGameDataCollection() {
//     const obj = [
//         new GameWholeProcessDataCollectionObj('2019-10-23 10:23:32', 'User456dfad32', '更新游戏', 'OPPO A83',
//             'Android', 'V5.0.0', '0', ''),
//         new GameWholeProcessDataCollectionObj('2019-10-23 10:23:32', 'User456dfad32', '启动游戏', '小米 MIX 2',
//             'Android', 'V1.6.0', '0', ''),
//         new GameWholeProcessDataCollectionObj('2019-10-23 10:23:32', 'User456dfad32', '结束游戏', '荣耀 10青春版',
//             'Android', 'V1.2.6', '1', '1小时1分钟'),
//         new GameWholeProcessDataCollectionObj('2019-10-23 10:23:32', 'User456dfad32', '结束游戏', 'iPhone X',
//             'iOS', 'V5.0.0', '0', '2小时56分钟'),
//         new GameWholeProcessDataCollectionObj('2019-10-23 10:23:32', 'User456dfad32', '更新游戏', 'iPhone X',
//             'iOS', 'V1.2.6', '0', ''),
//         new GameWholeProcessDataCollectionObj('2019-10-23 10:23:32', 'User456dfad32', '下载游戏', '荣耀 10青春版',
//             'Android', 'V5.0.0', '0', ''),
//         new GameWholeProcessDataCollectionObj('2019-10-23 10:23:32', 'User456dfad32', '启动游戏', '华为 P20',
//             'Android', 'V1.2.6', '0', ''),
//         new GameWholeProcessDataCollectionObj('2019-10-23 10:23:32', 'User456dfad32', '启动游戏', 'OPPO A83',
//             'Android', 'V5.0.0', '1', ''),
//         new GameWholeProcessDataCollectionObj('2019-10-23 10:23:32', 'User456dfad32', '结束游戏', 'iPhone X',
//             'iOS', 'V1.2.6', '0', '5小时12分钟'),
//         new GameWholeProcessDataCollectionObj('2019-10-23 10:23:32', 'User456dfad32', '更新游戏', '华为 P20',
//             'Android', 'V5.0.0', '0', ''),
//     ];
//     return {
//         resultCode: '00000000',
//         resultMsg: 'ok',
//         data: {
//             pageDataList: obj,
//             pageDataSize: 12
//         }
//     };
// }
// function getGameDataCollectionVersion() {
//     const obj = [
//         { id: 1, name: 'v1.6.0' },
//         { id: 2, name: 'v1.5.0' },
//         { id: 3, name: 'v1.0.0' },
//     ];
//     return {
//         resultCode: '00000000',
//         resultMsg: 'ok',
//         data: obj
//     };
// }
// function getGameListTotalData() {
//     const obj = { total: 28, abnormal: 2 };
//     return {
//         resultCode: '00000000',
//         resultMsg: 'ok',
//         data: obj
//     };
// }
// registerMock('get', GET_GAME_LIST_URL, getGameListData);
// registerMock('get', GET_GAME_LIST_TOTAL_URL, getGameListTotalData);
// registerMock('get', GET_GAME_OVERVIEW_URL, getGameOverviewData);
// registerMock('get', GET_GAME_DATA_COLLECT_URL, getGameDataCollection);
// registerMock('get', GET_GAME_DATA_COLLECT_URL, getGameDataCollection);
// registerMock('get', GET_GAME_DATA_COLLECT_VERSION_URL, getGameDataCollectionVersion);
