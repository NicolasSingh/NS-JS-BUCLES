const paisesLatam = [ "Argentina", "Bolivia","Brasil","Chile","Colombia","Ecuador","Guyana","Guyana Francesa","Paraguay","Perú","Suriname","Uruguay","Venezuela","Guyana","Guyana Francesa","Paraguay","Perú","Suriname","Uruguay","Venezuela", 
];

for(let pais of paisesLatam){
    console.log(pais)
}

// console.log(paisesLatam[0])
// console.log(paisesLatam[1])
// console.log(paisesLatam[2])
// console.log(paisesLatam[3])
// console.log(paisesLatam[4])
// console.log(paisesLatam[5])
// console.log(paisesLatam[6])
// console.log(paisesLatam[7])
// console.log(paisesLatam[8])
// console.log(paisesLatam[9])
// console.log(paisesLatam[10])
// console.log(paisesLatam[11])
// console.log(paisesLatam[12])
// console.log(paisesLatam[13])
// console.log(paisesLatam[14])
// console.log(paisesLatam[15])
// console.log(paisesLatam[16])
// console.log(paisesLatam[17])
// console.log(paisesLatam[18])
// console.log(paisesLatam[19])

const listaHTML = document.getElementById("listaPaises")


console.log(paisesLatam.length)

for(varInit = 0; varInit < paisesLatam.length; varInit++){

    const orden = (varInit + 1). toString() .padStart(2, '0')
    const pais = paisesLatam [varInit]
    const liAgregar = `<li>${orden} - ${pais}</li>`

    listaHTML.innerHTML += liAgregar;

}
