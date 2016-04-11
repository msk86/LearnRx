/*
 Exercise 13: Implement concatMap
    map and concatAll are very commonly chained together.
    [1,2].concatMap(x => [x, x]]) is [1,1,2,2]


    This concatMap function is also known as flatMap
 */
function exercise () {
    Array.prototype.concatMap = function(projectionFunctionReturnArray) {
        let sourceArray = this,
            result = [];

        /*
         Add your code here
         */

        return result;
    }
}

export default exercise;
