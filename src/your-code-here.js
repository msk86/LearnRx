/*
 Exercise 10: Implement concatAll
    contactAll function iterates over each sub-array in the array,
    and collect the results in a new, flat array.

    Example: [[1,2], [3,4], [5,6]].concatAll() is [1,2,3,4,5,6]
    * This function is also known as flatten or flattenDeep in other libs.
 */
function exercise () {
    Array.prototype.concatAll = function() {
        let sourceArray = this,
            results = [];

        /*
         Add your code here, and add all the items in each subArray to the results array.
         */

        return results;
    }
}

export default exercise;
