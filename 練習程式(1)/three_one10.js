var myf1 = document.getElementById('myf1');

myf1.addEventListener('submit',function(e) {
/*這是用JavaScript寫一個檢查這個按鈕觸發時，
就代表function(e)所指定事件發生之程式語法*/

  if(!window.confirm('確定要交表單嗎？'))
    e.preventDefault();
},false);
