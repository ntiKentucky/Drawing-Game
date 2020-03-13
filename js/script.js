var myArray = ['Male', 'Female'];

document.getElementById("genderbox").addEventListener("click", displaydate);

const randomElement = myArray[Math.floor(Math.random())]

// var NumberOfWords = 2;

var words = new BuildArray(NumberOfWords)

words[1] = "Female"
words[2] = "Male"


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord() {
var rnd = Math.ceil(Math.random() * NumberOfWords)

genderbox.value = words[rnd];
}
PickRandomWord();