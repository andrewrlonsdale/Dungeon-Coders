var TreeHandler = function(){}

TreeHandler.prototype = {

    rand: function (upper, lower) {
    var range = (upper > lower) ? upper - lower : lower - upper;
    var most = (upper > lower) ? upper : lower;
    var number = most - (Math.round(Math.random() * range));
    return number;
    },

    setAttrs: function (element, attrs) {
        for (var attr in attrs) {
         element.setAttribute(attr, attrs[attr]);
        }
    },

    makeWaves: function (parent, number, heightFactor, id) {
     for (i = 0; i < (number + 1); i++) {
        var waveType = new Array('wave-one', 'wave-two');
        var target = document.getElementById(parent);
        var wave = document.createElement('div');
        var size = (target.offsetWidth / number);
        console.log(target);
     }
    },

    cloudTrees: function (type, parent, number, zMin, zMax) {
    var thingType = {
        tree: ['tree-one',
            'tree-two',
            'stone-one',
            'stone-two'
           ],
        cloud: ['cloud-one',
              'cloud-two',
              'cloud-three',
              'cloud-four',
              'cloud-five']
    };
    for (i = 0; i < (number); i++) {
        var thisThing = thingType[type];
        var target = document.getElementById(parent);
        var tree = document.createElement('div');
        var targetWidth = target.offsetWidth;
        var scaler = (type == 'tree') ? 1 + this.rand(-5, 5) / 10 : 1 + this.rand(-5, 5);
        var zPos = this.rand(zMin, zMax);
        this.setAttrs(tree, {
            'class': type + ' ' + thisThing[this.rand(0, 6)],
            'style': 'left:' + (this.rand(150 * zPos, targetWidth)) + 'px;-transform:translateZ(' + zPos + 'px)scale(' + scaler + ');transform:translateZ(' + zPos + 'px) scale(' + scaler + ');'
        });
        target.appendChild(tree);
    }
}

}


function cloudTrees(type, parent, number, zMin, zMax) {
    var thingType = {
        tree: ['tree-one',
            'tree-two',
            'stone-one',
            'stone-two'
           ],
        cloud: ['cloud-one',
              'cloud-two',
              'cloud-three',
              'cloud-four',
              'cloud-five']
    };
    for (i = 0; i < (number); i++) {
        var thisThing = thingType[type];
        var target = document.getElementById(parent);
        var tree = document.createElement('div');
        var targetWidth = target.offsetWidth;
        var scaler = (type == 'tree') ? 1 + rand(-5, 5) / 10 : 1 + rand(-5, 5);
        var zPos = rand(zMin, zMax);
        setAttrs(tree, {
            'class': type + ' ' + thisThing[rand(0, 6)],
            'style': 'left:' + (rand(150 * zPos, targetWidth)) + 'px;-transform:translateZ(' + zPos + 'px)scale(' + scaler + ');transform:translateZ(' + zPos + 'px) scale(' + scaler + ');'
        });
        target.appendChild(tree);
    }
} // end cloudTrees

module.exports = TreeHandler;
