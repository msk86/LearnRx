import _ from 'lodash'

Array.prototype.concatAll = function() {
    return _.flatten(this);
};

Array.prototype.concatMap = function(projectionFunctionReturnsArray) {
    return _.flatMap(this, projectionFunctionReturnsArray);
};
