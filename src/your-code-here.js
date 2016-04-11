/*
 Implement reduce function.
     This reduce is different from the reduce in *ES5*, it returns an ARRAY.
     This is because some chaining requirement in the future.

     Example1: [1,2,3,4].reduce((total, current) => {return total + current;}) is [10]
     Example2: [1,2,3,4].reduce((total, current) => {return total + current;}, 5) is [15]
 */
function exercise () {
    Array.prototype.reduce = function(combinator, initValue) {
        let sourceArray = this,
            result;

        /*
         Add your code here
         */

        return [result];
    }
}

export default exercise;
