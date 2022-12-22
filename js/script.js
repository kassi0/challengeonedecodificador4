const regras = /^[a-z\s]+$/  // Verificador das Regras de Letras Minusculas, sem acento e sem caracteres especiais

var input = document.getElementById('digite-texto')
let btnCriptografa = document.querySelector('.criptografar');
let btnDescriptografa = document.querySelector('.descriptografar');
let btnCopia = document.querySelector('.copiar');
let output = document.querySelector('output-text');
let decryptField = document.getElementById('saida-nao-visivel')
let noMessageCard = document.getElementById('saida-sem-valor')

function alerta() {
    alert('Formato da Mensagem Incorreta, Por Favor, Respeite as regras!')
}

function alertaCopia() {
    document.getElementById('alrt').innerHTML='<b>Cópia efetuada!</b>'; 
    setTimeout(function() {document.getElementById('alrt').innerHTML='';},3000);
}

function criptografa() {
    let mensagemRegras = input.value
    if (regras.test(mensagemRegras) == true) {
        let mensagemCriptografada = mensagemRegras
            .replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('a', 'ai')
            .replaceAll('u', 'ufat')
            .replaceAll('o', 'ober')
        
        console.log(mensagemCriptografada)
        output = mensagemCriptografada
        document.getElementById('output-text').innerHTML = output
    } else {
        alerta(); 
    }  
}

function descriptografa() {
    let mensagemRegras = input.value
    if (regras.test(mensagemRegras) == true) {
        let mensagemDescriptografada = mensagemRegras
            .replaceAll('enter', 'e')
            .replaceAll('imes', 'i')
            .replaceAll('ai', 'a')
            .replaceAll('ufat', 'u')
            .replaceAll('ober', 'o')
        
        console.log(mensagemDescriptografada)
        output = mensagemDescriptografada
        document.getElementById('output-text').innerHTML = output
    } else {
        alerta();
    }  
}

function copiaMensgem() {
    let mensagemCopiada = output
    console.log(mensagemCopiada)
    navigator.clipboard.writeText(mensagemCopiada)
    alertaCopia()
}

function clearInputEncrypt() {
    noMessageCard.classList.add('display-option')
    decryptField.classList.remove('display-option')
    criptografa()
    input.value = ' ';
}
  
function clearInputDecrypt() {
    noMessageCard.classList.add('display-option')
    decryptField.classList.remove('display-option')
    descriptografa()
    input.value = ' ';
}


btnCriptografa.addEventListener('click', clearInputEncrypt)

btnDescriptografa.addEventListener('click', clearInputDecrypt)

btnCopia.addEventListener('click', copiaMensgem)