$('#wh22').on('mousedown',function(j){
/*這是用jQuery寫法針對此id設定當按下滑鼠時，就執行
此函式之程式語法*/

    $('#lg').text(j.type + ':' + j.which);
});