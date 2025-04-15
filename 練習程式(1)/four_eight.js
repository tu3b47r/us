$('h1').on('mouseover',function(){
/*這是用jQuery針對此標籤設定當滑鼠停留在文字時，
就會觸發函式*/

    $(this).css({'color' : 'blue','text-shadow' : 'gray 5px 5px'});
    /*這是用jQuery針對此觸發來設定文字的樣式*/

});

$('h1').on('mouseout',function(){
/*這是用jQuery針對此標籤設定當滑鼠移開文字時，
就會觸發此函示*/
 
    $(this).css({
        'color' : 'coffee color',
        'text-shadow' : 'none'
    });
});