function togg(a,buttonId){
    const b = document.getElementById(a);
    const button = document.getElementById(buttonId);

    if(b.style.display === 'none'){
        b.style.display = 'block';
        button.textContent = '隱藏元素';
    }else{
        b.style.display = 'none';
        button.textContent = '顯示元素';
    }
}