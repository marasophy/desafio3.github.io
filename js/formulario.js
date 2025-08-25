const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");
const inputMensagem = document.getElementById("mensagem");
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let ehValido = true; 

    const campos = [inputNome, inputEmail, inputTelefone, inputMensagem];

    campos.forEach(campo => {
       
        let mensagem = campo.nextElementSibling;
        if (mensagem && mensagem.tagName === "SPAN") {
            mensagem.remove();
        }

       
        if (campo.value.trim() === "") {
            campo.style.borderColor = "#f52e2e"; 
            ehValido = false;

            const span = document.createElement("span");
            span.innerText = "Campo obrigatório";
            campo.parentNode.insertBefore(span, campo.nextSibling);

        } 
      
        else if (campo.id === "email" && !/\S+@\S+\.\S+/.test(campo.value)) {
            campo.style.borderColor = "#f52e2e"; 
            ehValido = false;

            const span = document.createElement("span");
            span.innerText = "Email inválido";
            campo.parentNode.insertBefore(span, campo.nextSibling);

        } 
       
        else {
            campo.style.borderColor = "#00c22b"; 
           
        
    });
    if(ehValido) {
        console.log("Formulário válido, enviar!");
   
    }
});