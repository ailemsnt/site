function validarEmail(email) {    
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    let   emailValido = false;

    if(regexEmail.test(email)){  
        emailValido = true; 
    } else {
        alert("E-mail inválido.");
    }
    return emailValido;
}

function validarNome(nome) {
    const regexNome = /^[A-Za-zÀ-ÿ]{2,}(?:\s+[A-Za-zÀ-ÿ]{2,})+$/;
    let nomeValido = false;

    if(regexNome.test(nome)){
        nomeValido = true;
    } else {
        alert("Informe o nome completo.");
    }
    return nomeValido;
}

function validarMensagem(mensagem){
    const regexMensagem = /^[A-Za-zÀ-ÿ0-9\s.,!?-]{10,}$/;
    let msgValida = false;

    if(regexMensagem.test(mensagem)){
        msgValida = true;
    } else {    
        alert("Mensagem informada com conteúdo inválido.");
    }

    return msgValida;
}

function validarTermos(termos){
    if (!termos.checked) {
        alert("Você deve aceitar os termos.");
        return false;
    } else {
        return true;
    }
}

function enviarEmail(event){
    event.preventDefault();
    const nome   = document.getElementById("nome").value;
    const email  = document.getElementById("email").value;  
    const mensagem = document.getElementById("mensagem").value;
    const termos   = document.getElementById("chkTermos").value;   

    if ((validarNome(nome)) && (validarEmail(email)) && (validarMensagem(mensagem)) && (validarTermos(termos))){
        console.log("Dados válidos. Preparar envio de e-mail"); 
        alert("E-mail enviado. Aguarde meu retorno em breve!");
    } else {
        console.log("Dados inválidos. Não enviar e-mail"); 
    }    
}

document.addEventListener("DOMContentLoaded",function(){
    function contarDiasNovoAno(){
        const hoje = new Date();
        const ultimoDia = new Date(hoje.getFullYear(),11,31);
        const dias = ultimoDia - hoje;
        
        return Math.ceil(dias / (1000 * 60 * 60 * 24));
        
    }

    document.getElementById("contadorNovoAno").innerHTML = "<h4>&#128467; Faltam " + contarDiasNovoAno() + " dias para o novo ano! A cada dia, uma nova oportunidade para atingir seu  &#9745;objetivo!</h4>";
});

document.addEventListener("DOMContentLoaded",function(){
    const btnMenu     = document.getElementById("btnMenu");
    const menu        = document.getElementById("menu");
    btnMenu.addEventListener("click", function(){
        menu.classList.toggle("ativo");
    });

});


