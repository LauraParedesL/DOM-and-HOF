//1
const titulo= document.getElementById("titulo")

//2
let tituloPrincipal= "Frutas"

titulo.textContent= tituloPrincipal
//3 darle bc al header y al footer
let backgroundColor= document.querySelectorAll(`.background-color`)

for (const iterator of backgroundColor) {
        iterator.classList = "bg-orange-500"
}
//4
const pFooter= document.querySelector(`.text-footer`)

let textFooter= "Laura Paredes, Cohort52"

pFooter.textContent= textFooter

//5 creando un div

let contenedor= document.getElementById("contenedor")

//6

function crearCard(objeto){
        return `<article>
                    <h3>${objeto.nombre}<h/3>
                    <img src="${objeto.foto}">
                     <p>${objeto.descripcion}</p>
                 </article>
                        `
}
console.log(crearCard(frutas[0]))

//7

let main=document.querySelector("main")

function introducirCard(array){

    for (const objetos of array) {
        contenedor.innerHTML += crearCard(objetos)
    }
}
introducirCard(frutas)

//ejercicio

let lista= document.getElementById("lista")

let h2= document.createElement("h2")

h2.innerHTML=("Frutas Dulces")

lista.appendChild(h2)

//ejercico 10

function listaFrutas(array){
    let list= document.createElement("ul")
    
    for (const elementos of array) {
       if(elementos.esDulce){
        let sublist= document.createElement("li")
        sublist.innerHTML += elementos.nombre
        list.appendChild(sublist)
       }
    }
    return list
}

//ejercicio 11

lista.appendChild(listaFrutas(frutas))

