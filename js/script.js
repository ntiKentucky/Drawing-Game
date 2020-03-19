document.querySelector('.genGender').addEventListener('click', gentext);

function gentext() {
    var word=['Female','Male'];
    var para=document.querySelector('p');
    para.innerHTML=word[Math.floor(Math.random()*word.length)];
}
