window.onload = function (){
    
    
    
   var clickAble = document.getElementById("head");

    clickAble.onclick = function(){
       var elm = document.getElementById("openDropDown");
        var head = document.getElementById("head");
        if(elm.className === 'show' && head.className === "bgcolorclick"){
    elm.className =  'hide';
            head.className = "bgcolor";
        } else {
    elm.className =  'show';
             head.className = "bgcolorclick"
}
        
    }
       
  
};