let image = document.querySelector("#caDuck")

function caDuck(event){
	alert('thanks for petting the caDuck')
}

image.addEventListener('mouseover', caDuck)


let form = document.querySelector('#contact')
let submitBtn = document.querySelector('#submit')
let name = document.querySelector("#name")
let msg = document.querySelector("#message")

function handleSubmit(evt) {
	evt.preventDefault();
	
	message.value = ""
	name.value = ""
	
	alert('form submitted');
}

form.addEventListener('submit', handleSubmit);