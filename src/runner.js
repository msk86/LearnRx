import _ from 'lodash'
import 'babel-polyfill'
import Rx from 'rx'
import trackableConsole from './trackable-console'
import exercise from './your-code-here'
import postCheck from './post-check'
import './prepare'
import expectation from './expectation'
import reactiveData from './reactive-data'
import rxWrapper from './rx-wrapper'

try {
    let args = _.concat(rxWrapper(reactiveData), trackableConsole);

    let actual = exercise(...args);
    Rx.Observable.merge(...reactiveData).subscribeOnCompleted(() => {
        actual = actual
            || trackableConsole.records
            || postCheck()
            || null;

        if(_.isEqual(actual, expectation)) {
            console.log('Great! You have beaten this exercise!');
        } else {
            console.log('Expected:');
            console.log('\t', JSON.stringify(expectation));
            console.log('Actual:');
            console.log('\t', JSON.stringify(actual));
        }
    });
} catch(e) {
    console.log('ERROR: ', e.message);
}


