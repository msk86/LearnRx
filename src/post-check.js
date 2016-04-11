import _ from 'lodash'

function postCheck() {
    let result1 = [1,2,3,4].reduce((total, current) => {return total + current;});
    let result2 = [1,2,3,4].reduce((total, current) => {return total + current;}, 5);

    return `[1,2,3,4].reduce((total, current) => {return total + current;}) is [${result1}]\n[1,2,3,4].reduce((total, current) => {return total + current;}, 5) is [${result2}]`;
}

export default postCheck;
