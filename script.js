const textArea = document.querySelector(".text-area");
const textEncriptado = document.querySelector(".text-encriptado");

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    textEncriptado.value = textoEncriptado
    textArea.value = "";
    textEncriptado.style.backgroundImage = "none"
}

function encriptar (stringEncriptada){
    let misCodigos = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < misCodigos.length; i++){
        if(stringEncriptada.includes(misCodigos[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(misCodigos[i][0], misCodigos[i][1]) 

        }

    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    textEncriptado.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar (stringDesencriptada){
    let misCodigos = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < misCodigos.length; i++){
        if(stringDesencriptada.includes(misCodigos[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(misCodigos[i][1], misCodigos[i][0]) 

        }

    }
    return stringDesencriptada
}