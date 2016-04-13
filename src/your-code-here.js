/*
 Exercise 20: Implement zip
    Let's add a static zip function to Array, it accept 2 arrays and a combiner.
    It traverses each array at same time, and call combiner on both left-side-item and right-side-item,
    because it require 2 items from left and right, so the array returned by zip will only be as large as the smallest array.

    Example: Array.zip([1,2], [3,4], (l,r) => { return l + r;}) is [4,6]
 */
function exercise () {
    Array.zip = function(leftArray, rightArray, combiner) {
        let results = [];

        /*
         Add your code here
         */

        return results;
    }
}

export default exercise;
