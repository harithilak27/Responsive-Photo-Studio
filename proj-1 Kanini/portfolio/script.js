//navbar
document.getElementById('close').addEventListener('click', close);
document.getElementById('open').addEventListener('click', open);
var x = window.matchMedia("(max-width: 1200px)")

function open() {
    document.getElementById('close').classList.remove('hidden');
    document.getElementById('open').classList.add('hidden');
    if(x.matches)
    {
    document.getElementById('nav-links').classList.remove('hidden-2')
    }
}
function close(){
    document.getElementById('close').classList.add('hidden');
    document.getElementById('open').classList.remove('hidden');
    if(x.matches)
    {
    document.getElementById('nav-links').classList.add('hidden-2');
    }
}



document.getElementById("myModal").addEventListener('click', block)
document.getElementById("myModal-1").addEventListener('click', block)
document.getElementById("myModal-2").addEventListener('click', block)
// document.getElementById("myBtn").addEventListener('click', abc)

function abc(){
  document.getElementById("myModal").classList.remove('hidden');
  console.log("ok");
}

function block (){ 
  window.onclick = function (){
    document.getElementById("myModal").classList.add('hidden');
    location.reload()
  }
}

function img2(){
  document.getElementById("myModal-1").classList.remove('hidden');
}

function img3(){
  document.getElementById("myModal-2").classList.remove('hidden');
}

