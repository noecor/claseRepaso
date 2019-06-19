/*
TEORIA
cómo leer esta linea:

sarasa[5].pepa({uno: 'lel'})

para acceder a un OBJETO hacemos objeto. propiedad/funcion
para acceder a un elemento de un ARRAY hacemos array. metodoDeArrays/funcion


si tengo sarasa.pepa estoy accediendo a una propiedad de sarasa
el [5] es una posicion de sarasa
sarasa[5] es un array
al hacer sarasa[5].pepa hago una funcion o accedo a LA POSICION, no a la lista
al pepa tener parentesis, indica que ES una funcion
que recibe como parametro un objeto {cuya propiedad es una propiedad}
las funciones son un tipo de datos tambien

otra linea:

pupite.kcyo[0][5].find(e =>  e == 1)

un objeto con una propiedad.
pupite punto alguna cosa es un array porque tiene un [0]
kcyo es tambien un array
tiene una funcion que debe encontrar un elemento que sea exactamente igual a uno (1)

const pupite = {
    kcyo [
        [] , [] , [], [], [], []
    ]
}


ejemplo mio - array dentro de array

holi = [
    [null],
    [holi = [ 3] ]

]

console.log(holi)

en consola imprime:

(2) [Array(1), Array(1)]
0: [null]
1: [Array(1)]
length: 2
__proto__: Array(0)


MODAL
toco un boton y aparece una cajita en frente
tipo en twitter cuando seleccionas el boton (twittear) y te salta la cajita para escribir el tweet
con position absolute se pone encima de otro elemento
para que aparezca y desaparezca el div utilizo display none/block
(todo esto con html y sass)
display none para que por defecto no se vea, y cuando le agrego la 2da clase aparezca
javascript:
- toggle para cambiar las clases
- identificar el modal en el dom (getElementBy)
- hacer que una clase aparezca o desaparezca (con el toggle)
- con el evento onclick, ponerle una funcion para que aparezca en la pantalla
*/


/* KE KEREMO HACER

Abm - sistema de alta y baja modificacion

cargar datos, modificarlos y eliminarlos si quiero
- cargar alumnas
- asignarlas a una generacion
- asignarlas a distintos grupos de trabajo
- ponerles notas
*/
//PRIMERO

//modelar nuestro objeto: crear alumna con propiedaes iniciales
// la mejor forma de modelar objetos del mundo real es creando objetos

/*const student = {
    firstName: '',
    lastName: '',
    birthdate: '',
}

// este array tiene a las alumnas agrupadas dentro de un array

const registeredStudents = [
    {},
    {}

]


// cuando quiera sumar una nueva alumna, me baso en el modelo inicial y sumo alumnas con el push
// para encontrar a cada alumna, con un dato (propiedad inequivoca - DNI) utilizamos el metodo find

/* como planteamos una funcion?

- el objetivo final de la funcion
en este caso, cuando la persona haga click, queremos que CREE a una persona - alta / captura informacion que
escribio la persona y guardarla en un lugar
para capturar esta informacion los campos tienen que estar llenos
O SEA buscar cosas en el DOM y luego guardarlas

*/

let allStudents = []

const createStudent = ()  => {
    let firstNameField = document.getElementById('firstName')
    let lastNameField = document.getElementById('lastName')
    let birthdateField = document.getElementById('birthdate')
    let student = {
        firstName: firstNameField.value,
        lastName: lastNameField.value,
        birthdate: birthdateField.value
    }
    allStudents.push(student)
}



/* ahora la informacion esta en el DOM. (cuando la funcion esta vacia)
los input tienen una propiedad .VALUE (el que ingresa el usuario)

*/

/* crear un objeto con las propiedades que definimos antes
asignarle los valores
- como guardo la estudiante dentro de la lista de estudiantes?
como es un array, puedo utilizar el metodo push

*/
