/*
 Exercise 30: Unsubscribe when another event fires.
  Batman is fighting with his enemies from all super villains.
  Of course, this time Batman has to fix his BatSuit. But when it need to be fixed, is an event.

  For reference:
   stream1 = stream([Villain,,,,,,Villain,,,,Villain,,,,,,,,.Villain,,,,])
   stream2 = stream([,,,,,,,,,Smile,,,,,,,,Fix,,,,])
    -> stream1.takeUntil(stream2) ->
   result  = stream([Villain,,,,,,Villain])
 */
function exercise (superVillains, batSuitMaintaining, console) {
    /*
     Add your code here.
     Try to use '.takeUntil(otherStream)'.
     takeUntil function completes a stream when other event in otherStream occurs.
     */
}

export default exercise;
