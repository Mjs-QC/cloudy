var lis=document.getElementById("ull").children;
for(var i=0;i<lis.length;i++){
    lis[i].onmousedown=function(){
       this.lastChild.setAttribute("class","show");
    }
    lis[i].onmouseup=function(){
        this.lastChild.removeAttribute("class");
    }
}
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function(){
       this.lastChild.setAttribute("class","ccc");
    }
    lis[i].onmouseout=function(){
        this.lastChild.removeAttribute("class");
    }
}
var liss=document.getElementById("menu").children;
for(var i=0;i<lis.length;i++){
    liss[i].onmouseover=function(){
        this.lastChild.setAttribute("class","sss");
    }
    liss[i].onmouseout=function(){
        this.lastChild.removeAttribute("class");
    }
}
