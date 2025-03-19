var reg1 = document.getElementById('reg1');

reg1.addEventListener('mousemove',function(t){
    reg1.innerHTML = 'screenX/ScreenY:' + t.screenX + '/'
    + t.screenY + '<br>' + 'pageX/pageY:' + t.pageX + '/'
    + t.pageY + '<br>' + 'clientX/clientY:' + t.clientX +
    '/' + t.clientY + '<br>' + 'offsetX/offsetY:' + t.offsetX
    + '/' + t.offsetY;
},false);
