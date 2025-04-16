var URL = document.getElementById('URL');

URL.addEventListener('change',function(){
    neW1 = open();
    neW1.location.href = URL.value;
    
},false);