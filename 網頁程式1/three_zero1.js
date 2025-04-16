function shRe1(){
    var r1 = '';
    var d1 = document.getElementsByName('d1');

    for(var y = 0;y < d1.length;y++){
        if(d1[y].checked){
            r1 = d1[y].value;
            break
        }
    }
    window.alert(r1);
}