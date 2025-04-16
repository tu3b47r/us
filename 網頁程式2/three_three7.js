var ach = document.getElementById('ach');

ach.addEventListener('keydown',function(b){
    var mg6 = document.getElementById('mg6');
    mg6.textContent = '按鍵：' + b.key;
},false);
