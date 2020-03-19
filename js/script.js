document.querySelector('.genGender').addEventListener('click', gentext);

function gentext() {
    var word=['FEMALE','MALE'];
    var para=document.querySelector('p');
    para.innerHTML=word[Math.floor(Math.random()*word.length)];
}

document.querySelector('.randomHeight').addEventListener('click', Height);

function Height() {
    var word=['FEMALE','MALE'];
    var para=document.querySelector('p');
    para.innerHTML=word[Math.floor(Math.random()*word.length)];
}
