import _ from 'lodash'

function postCheck() {
    var afterFilter = [-1,0,1].filter(x => x >= 0);
    return `[-1,0,1].filter(x => x >= 0) is [${afterFilter}]`;
}

export default postCheck;
