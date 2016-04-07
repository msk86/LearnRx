import _ from 'lodash'

Array.prototype.concatAll = function() {
    return _.flatten(this);
};
