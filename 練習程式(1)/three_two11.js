var num1 = document.getElementById('num1');
num1.addEventListener('blur',checnm,false);

function checnm(){
    var ms4 = document.getElementById('ms4');
    if(this.value.lenght != 4)
        ms4.textContent = '注意!編號必須是4個字元';
    else
        ms4.textContent = '';
}