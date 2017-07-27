
function Tab(id) {
    this.doc = document;
    this.tab = this.doc.getElementById(id);
    this.aBtn = this.tab.getElementsByTagName('input');
    this.aDiv = this.tab.getElementsByTagName('div');
    this.iNow = 0;
}

Tab.prototype.init = function() {
    var This  = this;
    for(var i=0,len=this.aBtn.length; i<len; i++) {
        this.aBtn[i].index = i;
        this.aBtn[i].onclick = function() {
            This.change(this);
        }
    }
}

Tab.prototype.change = function(obj) {
    for(var j=0,len=this.aBtn.length; j<len; j++) {
            this.aBtn[j].className = '';
            this.aDiv[j].style.display = 'none';
    }

    this.aBtn[obj.index].className = 'active';
    this.aDiv[obj.index].style.display = 'block';
}

Tab.prototype.autoplay = function() {
    var This = this;
    setInterval(function(){

        for(var i=0,len=This.aBtn.length; i<len; i++) {
            This.aBtn[i].className = '';
            This.aDiv[i].style.display = 'none';
        }

        This.aBtn[This.iNow].className = 'active';
        This.aDiv[This.iNow].style.display = 'block';
        This.iNow++;

        This.iNow > 2 ? This.iNow = This.iNow % This.aBtn.length : This.iNow;

    },500)
}

var tab1 = new Tab('tab1');
tab1.init();

var tab2 = new Tab('tab2');
// 复用原来的组件
tab2.init();
// 在原来的组件基础上，增加自动播放功能
tab2.autoplay();