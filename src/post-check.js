import _ from 'lodash'

function postCheck() {
    var source = [1,2,3];
    var afterMap = [1,2,3].map(x => x + 1);
    return `[${source}].map(x => x + 1) is [${afterMap}]`;
}

export default postCheck;
