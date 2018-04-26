(function(psdw){
  window.onload = window.onresize = function() {
    var html = document.documentElement;
    var owidth = document.body.clientWidth || document.documentElement.clientWidth;
    var size = owidth / 375 * 100;
    size = size > 200 ? 200 : size;
    html.style.fontSize = size + "px";
    window.SET_REM = size
  }
})()