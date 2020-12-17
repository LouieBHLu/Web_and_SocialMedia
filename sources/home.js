function Coords(event){
    xzb=event.clientX
    yzb=event.clientY
    alert("X 坐标: " + xzb + ", Y 坐标: " + yzb)
}

function hero(){
    var herowidth = 400;
    var heroheight = 300;
    window.resizeTo(herowidth,heroheight);
}
