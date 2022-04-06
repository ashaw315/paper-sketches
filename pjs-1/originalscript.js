//point 
//line
//shape



let TRIANGLE_BOUNDS = 100
let POINT_NUMBER = 4

function triangle() {

    var myPath = new Path();
    // myPath.strokeColor = color();
    // myPath.strokeWidth = ran(5) + 1
    myPath.fillColor = color();
    
    

    for (var i = 0; i < POINT_NUMBER; i++) {
        var newPoint = (new Point(ran(TRIANGLE_BOUNDS), ran(TRIANGLE_BOUNDS)))
        myPath.add(newPoint)
    }

    
    myPath.closed = true;
    myPath.position = [ ran(window.innerWidth), ran(window.innerHeight)]
    myPath.scale(Math.random() + .5)
    myPath.rotate(ran(360))
    myPath.smooth()
}

function ran (max){
    return Math.floor(Math.random() * max)
}

triangle();

for (var i = 0; i < 200; i++) {
    triangle()
}

function color() {
    return "rgb(" + ran(256) + "," + ran(256) + "," + ran(256) + ")"
    // return "rgb(100, 20, 40)"
}

function onMouseDown() {
    triangle();
}