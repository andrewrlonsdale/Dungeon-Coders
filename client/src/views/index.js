function rand(upper, lower) {
    var range = (upper > lower) ? upper - lower : lower - upper;
    var most = (upper > lower) ? upper : lower;
    var number = most - (Math.round(Math.random() * range));
    return number;
} 

function setAttrs(element, attrs) {
    for (var attr in attrs) {
        element.setAttribute(attr, attrs[attr]);
    }
} 


function makeWaves(parent, number, heightFactor, id) {
    for (i = 0; i < (number + 1); i++) {
        var waveType = new Array('wave-one', 'wave-two');
        var target = document.getElementById(parent);
        var wave = document.createElement('div');
        var size = (target.offsetWidth / number);
        console.log(target);
        setAttrs(wave, {
            'id': 'wave-' + i + id,
            'class': 'wave ' + waveType[rand(0, 1)],
            'style': 'width:' + (size * 3) + 'px;height:' + (size * 3) + 'px;left:' + ((-size) + (size * i)) + 'px;margin-bottom:-' + size * heightFactor + 'px;-webkit-animation-delay:' + ((i / size) * 10) + 's;'
        });
        target.appendChild(wave);
    }
} 