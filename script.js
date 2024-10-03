
const ejeY = document.getElementById("x")
const ejex = document.getElementById("y")
const contraseñaInput = document.getElementById("keyPass")
const keyDown = document.getElementById("key")
const keyClean = document.getElementById("keyClean")


const totalPasword = document.getElementById("contraClean")
const email = document.getElementById("email")

const arrayInput = [contraseñaInput,email]

let passwordVariable = ""
let emailVariable = ""



function sacarDatos(){
    //Contraseña
    if(arrayInput[0].id == "keyPass"){
        arrayInput[0].addEventListener("keydown",e =>{
            if (e.key.length === 1){
                passwordVariable = passwordVariable + e.key
            }else if(e.key === "Backspace"){
                passwordVariable = passwordVariable.slice(0,-1)
            }
        })
    }; 
    if (arrayInput[1].id == "email"){
        arrayInput[1].addEventListener("keydown",e =>{
            if(e.key.length == 1){
                emailVariable = emailVariable + e.key
            }else if (e.key === "Backspace"){
                emailVariable = emailVariable.slice(0,-1)
            }
        })
    }
}



sacarDatos()
























email.placeholder = "Correo Electronico"
contraseñaInput.placeholder = "Contraseña"

document.addEventListener("mousemove",function(e){
    ejeY.textContent = e.clientY
    ejex.textContent = e.clientX
})





