var mise = 0, se = 0;
var sta1 = document.getElementById('sta1');
sta1.value = '0';

window.addEventListener('load',shoestati , false);

function shoestati(){
    if(mise >= 9 ){
        mise = 0;
        se += 1;
    }
    else
        mise += 1;
        sta1.value = se + '.' + mise;
        setTimeout('shoestati()',100);

}