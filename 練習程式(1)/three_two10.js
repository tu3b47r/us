var bt2 = document.getElementById('bt2');
bt2.addEventListener('click',shog,false);

function shog(e){
    window.alert(e.target.nodeName);
    window.alert(e.type);
}