import { registerMock } from '../core/http-mock';

import { GameVersionDataObj } from '../service/model/game-version.model';

const GET_GAME_VERSION_URL = 'GET_GAME_VERSION_URL';

function getGameVersionData() {
    const obj = [
        new GameVersionDataObj(
            '1', 'V2.0.0', '1、助攻SR收录和技能升级，新型召唤活动即将开启。', '2019 - 09 - 02  09: 34: 8'),
        new GameVersionDataObj(
            '2', 'V1.1.0', '1、助攻SR收录和技能升级，新型召唤活动即将开启。', '2019 - 09 - 01  09: 34: 8')
    ];
    return {
        resultCode: '00000000',
        resultMsg: 'ok',
        data: obj
    };
}
registerMock('get', GET_GAME_VERSION_URL, getGameVersionData);
