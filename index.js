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

console.log(contenedor)



//6

function crearCard(objeto){
        return `<article class="flex flex-col items-center w-64 h-78 border-2">
                    <h3>${objeto.nombre}</h3>
                    <img class="w-40 object-contain h-40 " src="${objeto.foto}">
                     <p class="text-center">${objeto.descripcion}</p>
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

h2.classList.add("font-bold" , "text-4xl")

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
    list.classList.add("list-disc" , "items-center" )
    return list
}

//ejercicio 11

lista.appendChild(listaFrutas(frutas))


