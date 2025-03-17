function chang(){  //滑鼠過去時，會切換顏色的函式
    var m1=document.getElementById('m1');

    m1.style.color ='blue';
    //把文字變成藍色

    m1.style.backgroundColor='green';
    //將文字框背景顏色設定綠色
}

function res(){   //滑鼠離開時，會還原原本顏色的函式
    var m1=document.getElementById('m1');

    m1.style.color='';


    m1.style.backgroundColor='orange';
}