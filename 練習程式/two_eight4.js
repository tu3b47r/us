function changecolor(){
    var tle1 = document.getElementById('tle1');
    /*這是用JavaScript寫一個尋找到指定id，然後存入
    新增的變數裡之程式語法*/

    var ra1 = document.getElementsByName('color');
    /*這是用JavaScript寫一個將所有為coloc都存入新增的變數
    之程式語法*/

    var sent1;
    for(var u = 0;u < ra1.length;u++){
        if(ra1[u].checked){ 
        /*這是用JavaScript寫一個如果選中此選項後，才執行
        下一行的條件之程式語法*/

            sent1 = ra1[u].value;
            break;
        }
    }
    tle1.style.color = sent1;
    /*這是用JavaScript寫一個將此文字的樣式轉換成所選的樣
    式之程式語法*/

}
