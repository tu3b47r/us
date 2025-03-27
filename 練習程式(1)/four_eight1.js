var su1 = 0;
var ar = [3,5,7,9,11];
$.each(ar,function(index,value){
/*這是用jQuery設定回調函示與陣列變數之程式語法
$.each() 這是用jQuery設定回調函式之程式語法*/

    su1 += value;
});

window.alert(su1);