let myObject = {
    nom: 'nicolas',
    age: 18,
}

//Ex1 
let myElements = Array.from( document.querySelector('div').children)
console.log(myElements);

//Ex2 //Object.keys (NomDeL'objet) renvoie un tableau contenant le nom des propriétés de mon objet

let ex2 = Object.keys(myObject)
console.log(ex2);

//Ex3 
ex2.forEach(element => {
    console.log(element);
    
});

//Ex4 //Object.values (NomDeL'objet) permet de récuperer la valeur de la propriété
//ou ds le foreach logger ex2[element] pour voir les valeurs

//Ex4
let ex4= Object.values(myObject);
ex4.forEach((element,i) => {
    console.log(element);
    //Ex5
    myElements[i].innerText = element
});
    
//Le but était de mettre dans le h1 et h2 respectivement, les valeurs de ex4 (nicolas et 18) 
//Dans h1 on met nicolas et dans h2 on met 18 

