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

//container-2 images
let image = document.getElementById('image');
let images = ["image1.jpg",'image2.jpg','image3.jpg','image4.jpeg'];

setInterval(() => {
    let random =   Math.floor(Math.random() * 4) ;
    // image.src = images[random];
    image.src = `images/${images[random]}`;
    console.log(random);
}, 1000);

//section-2

let image_2 = document.getElementById('image-2');
let images_2 = ["img1.jpeg","img2.jpeg","img3.jpeg"];

setInterval(() => {
    let random =   Math.floor(Math.random() * 3) ;
    // image.src = images[random];
    image_2.src = `images/${images_2[random]}`;
    console.log(random);
}, 7000);

//container 7 

document.getElementById("ques1").addEventListener('click',first_ques);
document.getElementById("ques2").addEventListener('click',second_ques);
document.getElementById("ques3").addEventListener('click',third_question);

function first_ques() {
    document.getElementById("ans1").classList.remove('hidden')
    document.getElementById("ans2").classList.add('hidden')
    document.getElementById("ans3").classList.add('hidden')
}
function second_ques() {
    document.getElementById("ans1").classList.add('hidden')
    document.getElementById("ans2").classList.remove('hidden')
    document.getElementById("ans3").classList.add('hidden')
}
function third_question() {
    document.getElementById("ans1").classList.add('hidden')
    document.getElementById("ans2").classList.add('hidden')
    document.getElementById("ans3").classList.remove('hidden')
}