var a7 = document.getElementById('a7');
var item7 = document.getElementById('item7');
var fod1 = document.getElementById('fod');

a7.addEventListener('click',function(){
    window.alert('<a> 元素的事件監聽程式1');
},false);

a7.addEventListener('click', function(){
    window.alert('<a> 元素的事件監聽程式2');
},false);

item7.addEventListener('click',function(){
    window.alert('<li> 元素的事件監聽程式');
},false);

fod1.addEventListener('click',function(){
    window.alert('<ul> 元素的事件監聽程式');
},false);