/*
 Exercise 7: Implement filter
    To make filtering easier, add a filter function.
    The filter function accept a predicate, which is a function that accepts an item,
     and says if the item should be included in the new array.

    Example: [-1,0,1].filter(x => x >= 0) to be [0, 1]
 */
function exercise () {
    Array.prototype.filter = function(predicate) {
        let sourceArray = this,
            results = [];

        /*
         Add your code here
         */
        return results;
    }
}

export default exercise;
