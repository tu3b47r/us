window.addEventListener('load',function(){
    var ti1 = window.setInterval(function(){
        var clo = document.getElementById('clo');
        clo.textContent = (new Date()).toLocaleString();
        /*這是用JavaScript寫一個將時間數字轉換成
        當地的語言顯示之程式語法*/

    },1000);

    var btn = document.getElementById('btn');
    btn.addEventListener('click',function() {
        window.clearInterval(ti1);
        /*這是用JavaScript寫一個設定定時器之程式語法*/

    },false);
},false);