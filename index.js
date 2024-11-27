// Seleciona todos os elementos do formulário que possuem a classe "form-input" e os armazena em uma NodeList.
const inputs = document.querySelectorAll(".form-input");

// Seleciona o botão de envio do formulário pelo seu ID "submit-form-button".
const submitButton = document.getElementById("submit-form-button");

// Adiciona um ouvinte de evento "click" ao botão de envio.
submitButton.addEventListener("click", function (event) {
    // Evita o comportamento padrão do botão, que seria enviar o formulário e recarregar a página.
    event.preventDefault();

    // Inicializa uma variável para acompanhar se o formulário está válido. Começa como true.
    let isValidForm = true;

    // Itera por todos os inputs selecionados anteriormente.
    inputs.forEach(input => {
        // Verifica se o valor do campo está vazio ou contém apenas espaços em branco.
        if (!input.value.trim()) {
            // Se estiver vazio, marca o formulário como inválido.
            isValidForm = false;
            // Adiciona a classe "error" ao campo para aplicar estilos visuais de erro.
            input.classList.add("error");
        } else {
            // Se o campo estiver preenchido, remove a classe "error" para garantir que não há marcação de erro.
            input.classList.remove("error");
        }
    });

    // Após verificar todos os campos, se todos estiverem válidos...
    if (isValidForm) {
        // Exibe uma mensagem de sucesso para o usuário.
        alert("Formulário enviado com sucesso!");
    }
});
