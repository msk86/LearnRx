/*
 Exercise 29: Take 1
 Batman have to upgrade the BatPlane this time, no matter how many villains appear, he can only fight with one.
 Print his name.
 */
function exercise (Observable, batmanVillains, console) {
    /*
     'Observable.fromEvent(domElement, eventName)' can parse the future dom events to a observable stream,
     which will contain all the events and never complete.
     We can use all functional programming methods on the stream,
     once there is a new event fired, the event will go through all the functional pipeline and give us a result.

     Take follow graph as example, :
     stream([,,,,1,,,,,,2,,3,,,,4,,5,,])
       -> .map(x => x + 1) ->
     stream([,,,,2,,,,,,3,,4,,,,5,,6,,])
       -> .filter(x => x % 2) ->
     stream([,,,,,,,,,,,3,,,,,,,5,,,,,])
     */
    const villainsAppearStream = Observable.fromEvent(batmanVillains, 'appear');
    /*
     Add your code here.
      Array.prototype.take(n) can select the first n items as a new array,
      Observable.prototype.take(n) can select the first n events as a new stream and complete it.

      So try to use 'villainsAppear.take(1)' to listen for only 1 villain appear from the stream.
     */
}

export default exercise;
