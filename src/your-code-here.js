/*
 Exercise 31: Functional on Observable instance (stream)
  Free one, just want to explain how functional programming works with stream
 */
function exercise (console) {
    // map()
    // [1,2,3].map(x => x + 1)                   === [2,3,4]
    // stream[1,,,2,,,3].map(x => x + 1)         === stream([2,,,3,,,4])
    // stream([1,,,2,,,3,,,]).map(x => x + 1)    === stream([2,,,3,,,4,,,])

    // filter()
    // [1,2,3].filter(x => x > 1)                === [2,3]
    // stream[1,,,2,,,3].map(x => x > 1)         === stream([2,,,3])
    // stream([1,,,2,,,3,,,]).map(x => x > 1)    === stream([2,,,3,,,])

    // concatAll()
    // [[1,2], [3,4]].concatAll()                === [1,2,3,4]
    // stream([
    //   stream([1,,,2]),,,
    //   stream([3,,,4])
    // ]).concatAll()                            === stream([1,,,2,,,3,,,4])
    // stream([
    //   stream([1, ,,, ,2]),,,
    //   stream([,,3,,,4,,,])
    // ]).concatAll()                            === stream([1,,,,,2,,3,,,4,,,])
    //   stream.contactAll: No attempt to 2nd stream's elements is made until the 1st stream has completed.

    // reduce()
    // [1,2,3].reduce(sum)                       === [6]
    // stream([1,,,2,,,3]).reduce(sum)           === stream([,,,,,,6])
    // stream([1,,,2,,,3,,,]).reduce(sum)        === stream([,,,,,,])
    //   stream.reduce: reduced stream do not complete until the source streams does.

    // scan()
    // stream([1,,,2,,,3]).scan(sum)             === stream([1,,,3,,,6])
    // stream([1,,,2,,,3,,,]).scan(sum)             === stream([1,,,3,,,6,,,])

    // zip()
    // Array.zip([1,2], [3,4,5], sum)                               === [4,6]
    // Observable.zip(stream([1,,,2,,,]), stream([3,,,4,,,5]), sum) === stream([4,,,6])
    //   zip: zipped stream completes as soon as the left or right side stream completes.

    // take()
    // [1,2,3].take(2)                           === [1,2]
    // stream([1,,,2,,,3]).take(2)               === stream([1,,,2])
    // stream([1,,,2,,,3,,,]).take(2)            === stream([1,,,2])

    // takeUntil()
    // [1,2,3].takeUntil([4])                    === []
    // stream([1,,,2,,,3,,,]).takeUntil(
    // stream([ ,,, ,,4 ,])
    // )                                         === stream([1,,,2])
    //   array.takeUntil: always return [], not useful, have a look at array.takeWhile
}

export default exercise;
