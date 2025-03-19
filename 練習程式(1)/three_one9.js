var book2s = document.getElementById('book2s');
var book2 = book2s.childNodes;
/*這是用JavaScript寫一個尋找book2s裡的項目存入
新增的變數之程式語法*/

for(var h = 0;h < book.length;h++)
  if(book2.item(h).nodeType === 2)
  /*這是用JavaScript寫一個當此id=book2項目的class
  之程式語法*/
    
    console.log(book2.item(h).textContent);
