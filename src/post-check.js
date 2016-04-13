import _ from 'lodash'

function postCheck() {
    const afterZip = Array.zip([1,2], [3,4], (l, r) => {return l + r;});
    return `Array.zip([1,2], [3,4], (l, r) => {return l + r;}) is [${afterZip}]`;
}

export default postCheck;
