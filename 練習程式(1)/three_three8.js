window.addEventListener('load', shoExtim, false);

function shoExtim(){
   var onlitime = document.getElementById('onlitime');
   onlitime.textContent = (new Date()).toLocaleString();
};
