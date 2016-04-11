import _ from 'lodash'

function postCheck() {
    let afterConcatMap = [1, 2].concatMap(x => [x, x]);
    return `[1,2].concatMap(x => [x, x]) is [${afterConcatMap}]`;
}

export default postCheck;
