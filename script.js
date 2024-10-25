// Script for navigation bar
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close= document.getElementById('close');

if(bar){
    bar.addEventListener('click', () =>{
        navbar.classList.add('shownav');
    })
}

if(close){
    close.addEventListener('click' , () =>{
        navbar.classList.remove('shownav');
    })
}

// -----------------------------------------------------------

// start js with sproduct

// start Script js with sproduct
//import clases
var MinImag= document.getElementById("MainImag"); 
var smallimg= document.getElementsByClassName("samll-img"); 
//هنا في الكود ده بكون عايز اغير مسار الصوره بقولوا في اول واحده 
//ان في حاله ان الصوره الصغيره اول واحده الي هيا صفر دوست عليها بالماوس 
//حققلي ال فنكشن الي هيا ببدل فيه المسار بتاع الصوره الكبيره بمسار الصوره الصغيره 
smallimg[0].onclick = function(){
    MinImag.src =  smallimg[0].src;
}


smallimg[1].onclick = function(){
    MinImag.src =  smallimg[1].src;
}

smallimg[2].onclick = function(){
    MinImag.src =  smallimg[2].src;
}

smallimg[3].onclick = function(){
    MinImag.src =  smallimg[3].src;
}


// /////////////////////////////////////////////////



let buttonrow = document.getElementsByClassName('arrow');

// window.addEventListener('scroll' , () =>{
//     if(window.screenY < 13930){
//         buttonrow.style.display = 'block';
//     }else{
//         buttonrow.style.display = 'none';
//     }
// });


buttonrow.addEventListener('click' , () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



