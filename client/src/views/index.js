function rand(upper, lower) {
    var range = (upper > lower) ? upper - lower : lower - upper;
    var most = (upper > lower) ? upper : lower;
    var number = most - (Math.round(Math.random() * range));
    return number;
} // end rand

function setAttrs(element, attrs) {
    for (var attr in attrs) {
        element.setAttribute(attr, attrs[attr]);
    }
} 