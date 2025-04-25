var nm4 = document.getElementById('nm4');
var mg5 = document.getElementById('mg5');
mg5.style.color = '';

nm4.addEventListener('focus',function(){
    mg5.textContent = '手機號碼是10個位元';
},false);

nm4.addEventListener('blur',function(){
    if(this.ariaValueMax.length === 10)
        mg5.textContent = '';
    else
        mg5.textContent = '注意! 手機號碼必須是10分愛你';
},false);