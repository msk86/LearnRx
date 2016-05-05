import _ from 'lodash'
import Rx from 'rx'
import data from './data'

const dueTime = 100;
const interval = 500;
const reactiveData = data.map((d, i) => {
    let timer = Rx.Observable.timer(dueTime * i, interval);
    if(typeof _.last(d) === 'undefined') {
        timer = timer.take(d.length + 6);
    } else {
        timer = timer.take(d.length);
    }
    return timer.map(t => {
        const value = d[t];
        if (value instanceof Error) {
            throw(value.message);
        }
        return value;
    }).filter(rd => rd);
});

export default reactiveData;
