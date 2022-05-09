/*
    ==== Typescript code ====
*/

let nombre: string = 'Fco' // si no se especifica, ts infiere el tipo (el compilador determina el tipo de la variable)

let hp: number | string = 123 // con el operador '|' (OR) indico que la variable acepta valores de 2 tipos

hp = 'FULL' // continuando con la aclaración anterior, puede ser que necesite almacenar ahora una cadena

console.log(nombre, hp)