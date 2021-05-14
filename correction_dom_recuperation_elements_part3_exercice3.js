let myObject = {
    nom: 'nicolas',
    age: 18,
}



let myElements = document.querySelector("div#object").children;
console.log(myElements);


Object.keys(myObject).forEach((e, i) => {
    myElements[i].innerText = myObject[e];
});