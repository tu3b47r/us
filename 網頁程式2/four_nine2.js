$('input').on('click',function(i){
    $(this).after('<p>目標:' + i.target + '<p>')
    /*這是用jQuery設定在輸入框後面加上<p>內容*/
     
           .after('<p>事件:' + i.target + '<p>');
});