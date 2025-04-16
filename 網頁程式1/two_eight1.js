var e1 = document.createElement('li');
/*這是用JavaScript寫一個將此標籤存入所設定變數
之程式語法*/

var t1 = document.createTextNode('書籍封面');
/*這是用JavaScript寫一個在li標籤中新增一個，然後
存入所指定變數之程式語法*/

e1.appendChild(t1);
/*這是用JavaScript寫一個將新增的東西存入此標籤裡面
之程式語法*/

var p1 = document.getElementsByTagName('ul')[0];
/*這是用JavaScript寫一個將新增的東西放入此標籤之程
式語法*/

p1.appendChild(e1);
/*這是用JavaScript寫一個將一個新增的東西存入此ul
標籤的最後一個位置之程式語法*/