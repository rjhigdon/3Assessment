let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

function colorAlert(event, colorAl){
    alert('My favorite color is Black!!')
}


let colorAl = colorBtn.addEventListener("click", colorAlert)

function placeAlert(event, placeAl){
    alert("My favorite place is Couer d'Alene!!")
}


let placeAl = placeBtn.addEventListener("click", placeAlert)

function ritualAlert(event, ritualAl){
    alert('My favorite ritual is drinking coffee!!')
}


let ritualAl = ritualBtn.addEventListener("click", ritualAlert)