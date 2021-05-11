//1

let H1sec = document.getElementsByTagName('h1')[1];

console.log(H1sec.firstChild);

//2

let li = document.getElementsByTagName('li')[3];

console.log(li.lastChild);
//3
let p = document.getElementsByTagName('p')[0].innerText.toUpperCase();
console.log(p);

//4

let eachI = Array.from(document.getElementsByTagName("li"));


eachI.forEach(element => {
    console.log(element.innerText.toUpperCase());
});

console.log(eachI);