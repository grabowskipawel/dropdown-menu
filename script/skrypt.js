window.onload = function () {
    
    
    
   var clickAble = document.getElementById("head");

    clickAble.onclick = function(){
        
       var elm = document.getElementById("openDropDown");
        
        var head = document.getElementById("head");
        
        var arrow = document.getElementById("arrow");
        
        if(elm.className === "show" && head.className === "bgcolorclick" && arrow.className === ""){
            
            elm.className =  "hide";
            
            head.className = "bgcolor";
            
            arrow.className = "rotateDown";
        } else {
            
            elm.className =  "show";
            head.className = "bgcolorclick";
            arrow.className = "";
}
        
    };
       
  
};