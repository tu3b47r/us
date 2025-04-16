var nwE = document.createElement('li');
/*這是用JavaScript寫一個設定項目存入此新增的變數
之程式語法*/

var nwT = document.createTextNode('個人卡片');
/*這是用JavaScript寫一個文字此新增的變數之程式
語法*/

nwE.appendChild(nwT);
/*這是用JavaScript寫一個將新增變數的文字放入
新增變數的項目裡之程式語法*/

var repE = document.getElementsByTagName('li')[2];
/*這是用JavaScript寫一個將新項目取代第三個項目放入新增
的變數之程式語法*/

var parE = repE.parentNode;

parE.replaceChild(nwE,repE);
/*這是用JavaScript寫一個讓新節點取代舊節點
之程式語法*/