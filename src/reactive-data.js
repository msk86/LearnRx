import _ from 'lodash'
import Rx from 'rx'
import data from './data'

const dueTime = parseInt(Math.random() * 1000);
const interval = parseInt(Math.random() * 500);
const reactiveData = data.map(d => {
    const timer = Rx.Observable.timer(dueTime, interval);
    let rData = timer.map(t => d[t]).filter(rd => rd);
    if(typeof _.last(d) !== 'undefined') {
        var valueCount = d.filter(v => v).length;
        rData = rData.take(valueCount);
    }

    return rData;
});

export default reactiveData;
