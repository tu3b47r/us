$('#enlar').on('click',function(){
/*這是用jQuery針對指定id設定當按下時，就會
觸發click事件的處理器來執行之程式語法
$('#enlar') 這是用jQuery設定指定某id之程式
語法*/ 

    $('img').animate({
    /*這是用jQuery針對指定的標籤設定動畫函示之
    程式語法*/

        width:'250px',
        opacity: 0.6,
        borderWidth:'15px' 
        /*這是用jQuery設定圖片的邊框寬度為15px*/
          
    },1500);
});