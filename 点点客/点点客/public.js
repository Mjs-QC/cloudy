//解决方案--鼠标滑动事件（通过改变css样式中display的值）
var tpro=document.getElementById("t-pro");
var prohover=document.getElementById("pro-hover");
tpro.onmouseover=function(){
    prohover.style.display="block";
}
tpro.onmouseout=function(){
    prohover.style.display="none";
}

//代理合作--鼠标滑动事件
var servi=document.getElementById("servi");
var serhover=document.getElementById("ser-hover");
servi.onmouseover=function(){
    serhover.style.display="block";
}
servi.onmouseout=function(){
    serhover.style.display="none";
}


//案例--鼠标滑动事件
var tcase=document.getElementById("t-case");
var casehover=document.getElementById("t-hover");
tcase.onmouseover=function(){
    casehover.style.display="block";
}
tcase.onmouseout=function(){
    casehover.style.display="none";
}
//我们--鼠标滑动事件
var tus=document.getElementById("t-wm");
var nus=document.getElementById("us");
tus.onmouseover=function(){
    nus.style.display="block";
}
tus.onmouseout=function(){
    nus.style.display="none";
}