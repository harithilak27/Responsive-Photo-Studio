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

document.getElementById('submit').addEventListener('click', f1);

function f1()
{
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let phno=document.getElementById("ph1").value;

    let check=name.match(/[A-Za-z]/g);
    let echeck=mail.match(/[A-Za-z0-9]+@/g);
    let phcheck=phno.match(/[0-9]{10}/g);

    if(name.match(/[A-Za-z]/g) == null)
    {
        document.getElementById("nm").style.display="block";
        document.getElementById("nm").innerHTML='Please Fill it';
        // name.getElementByName('name')[0].placeholder='please fill it'
    }

    if(mail.match(/[A-Za-z0-9]+@/g)==null)
    {
        document.getElementById("eml").style.display="block";
        document.getElementById("eml").innerHTML='Please Fill it';
    }

    if(phno.match(/[0-9]{10}/g)==null)
    {
        document.getElementById("num").style.display="block";
        document.getElementById("num").innerHTML='Please Fill it';
    }

    if(name.match(/[A-Za-z]/g)!= null && mail.match(/[A-Za-z0-9]+@/g)!=null && phno.match(/[0-9]{10}/g)!=null )
    {
        document.getElementById("nm").style.display="none";
        document.getElementById("eml").style.display="none";
        document.getElementById("num").style.display="none";
        document.getElementById("h3").style.display="block";
        document.getElementById("h3").innerHTML=`Thanks for your message ${name} we will get back to you...`; 
        
        // location.reload()
    }
    
}