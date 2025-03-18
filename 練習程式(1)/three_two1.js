var myW = null;

function openneW(){
    myW = window.open('練習31.html','myW','height=300 , weight=100');
    /*這是用JavaScript寫一個開啟視窗為指定網頁、它的名稱與介面長寬*/
}

function closeneW(){
    if(myW)
        myW.close()
}