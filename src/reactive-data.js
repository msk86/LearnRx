import Rx from 'rx'
import data from './data'

const reactiveData = data.map(d => {
    const dueTime = parseInt(Math.random() * 1000);
    const interval = parseInt(Math.random() * 500);
    const timer = Rx.Observable.timer(dueTime, interval).take(d.length);
    const rData = Rx.Observable.from(d);
    return Rx.Observable.zip(timer, rData, (t, rd) => rd);
});

export default reactiveData;
