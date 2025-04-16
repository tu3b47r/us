function addListItem(listId){
    let newIt = prompt('輸入新增項目文字');
    const l1 = document.getElementById(listId);
    /*這是用JavaScript寫一個尋找指定的東西，然後存
    入新增的變數中之程式語法*/

    const newl1 = document.createElement('li');
    /*這是用JavaScript寫一個創建li標籤存入新增的變
    數中之程式語法*/

    newl1.textContent = newIt;
    /*這是用JavaScript寫一個將輸入的項目加到上面的變
    數裡之程式語法*/

    l1.appendChild(newl1);
    /*這是用JavaScript寫一個將上面新增的標籤顯示於網
    頁中之程式語法*/
}
