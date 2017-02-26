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

function cloudTrees(type, parent, number, zMin, zMax) {
    var thingType = {
        tree: ['tree-one',
            'tree-two',
            'tree-three',
            'tree-four',
            'tree-pine',
            'stone-one',
            'stone-two',
            'stone-one',
            'stone-two'],
        cloud: ['cloud-one',
              'cloud-two',
              'cloud-three',
              'cloud-four',
              'cloud-five'],
        // char:  ['char-one',
        //     'char-two',
        //     'char-three',
        //     'char-four']
    };
    for (i = 0; i < (number); i++) {
        var thisThing = thingType[type];
        var target = document.getElementById(parent);
        var tree = document.createElement('div');
        var targetWidth = target.offsetWidth;
        var scaler = (type == 'tree') ? 1 + rand(-5, 5) / 10 : 1 + rand(-5, 5);
        var zPos = rand(zMin, zMax);
        setAttrs(tree, {
            'id': type + '-' + i,
            'class': type + ' ' + thisThing[rand(0, 6)],
            'style': 'left:' + (rand(50 * zPos, targetWidth)) + 'px;-webkit-transform:translateZ(' + zPos + 'px)scale(' + scaler + ');transform:translateZ(' + zPos + 'px) scale(' + scaler + ');'
        });
        target.appendChild(tree);
    }
} // end cloudTrees

            cloudTrees('tree', 'forest', 400, 0, -450);
            cloudTrees('cloud', 'forest', 50, -500, -1000);
            cloudTrees('char', 'forest', 50, -600, -1100);