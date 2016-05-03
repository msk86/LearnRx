/*
 Exercise 25: Completed Stream
  An Observable sequence can be considered as a stream.

  Consider the data in the stream like an Array:
   stream([1,,,3,,,5,,,7,,,9]);

   the CPU process will keep alive to consume data from the stream,
   once no more data will come from the stream (After 9), a "Completed" event will be fired.
   So that the stream will be closed and also trigger a onCompleted callback.

  Observable.prototype.forEach can have 3 callback functions:
  * 1st: onNext callback, it will be triggered when a new value comes;
  * 2nd: onError callback, it will be triggered when a error occurs;
  * 3rd: onCompleted callback, it will be triggered when the stream completed;

  Print all hero's name, and print a "Here we go" when all first-generation Avengers are printed.
 */
function exercise (AvengersFirstGeneration, console) {

}

export default exercise;
