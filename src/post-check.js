import _ from 'lodash'

function postCheck() {
    var afterConcatAll = [[1,2], [3,4], [5,6]].concatAll();
    return `[[1,2],[3,4],[5,6]].concatAll() is [${afterConcatAll}]`;
}

export default postCheck;
