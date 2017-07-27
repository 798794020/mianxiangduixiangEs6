class Pen {
    constructor() {
        document.onmousedown = this.down.bind(this);
    }
    down() {
        document.onmousemove = this.move.bind(this);
        document.onmouseup = this.up.bind(this);
    }
    move(e) {
    	var div = document.getElementById("box");
    	var disx=e.clientX-div.offsetWidth;
        var disy=e.clientY-div.offsetHeight;
        div.style.cssText = "left:" +disx+ "px; top:" + disy+ "px;";
        div.style.background = "blue";
    }
    up() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
new Pen();