function shRe2(){
    var r2 = [];
    var d2 = document.getElementsByName('d2');

    for(var x = 0;x < d2.length;x++){
        if(d2[x].checked){
            r2.push(d2[x].value);
            /*這是用JavaScript寫一個將所選取的東西都存入r2陣列
            中之程式語法*/

        }
    } 
    window.alert(r2);
}