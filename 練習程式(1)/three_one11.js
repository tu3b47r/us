var mobi_dev = navigator.userAgent.match(/iPad/iPhone/redmi/htc/smallmi/i);
/*這是用JavaScript寫一個檢查不同的裝置，然後根據
不同裝置顯示網頁頁面之程式語法*/

if(mobi_dev === null)
  document.location.replace(pc.html);
  /*這是用JavaScript寫一個更改pc頁面，然
  後換新的頁面之程式語法*/
  
else
  document.location.replace('mobi.html');
