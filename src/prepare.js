import _ from 'lodash'

Array.prototype.concatAll = function() {
    return _.flatten(this);
};

Array.prototype.concatMap = function(projectionFunctionReturnsArray) {
    return _.flatMap(this, projectionFunctionReturnsArray);
};

Array.prototype.reduce = function(...args) {
    return [_.reduce(this, ...args)];
};

Array.zip = function(leftArray, rightArray, combiner) {
    var length = Math.min(leftArray.length, rightArray.length);
    return _.zipWith(_.slice(leftArray, 0, length), _.slice(rightArray, 0, length), combiner);
};
