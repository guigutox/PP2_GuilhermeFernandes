
const btnEditar = document.getElementById("btn-editar");
btnEditar.disabled = true;
//Declarando botão de edição e tornando ele desabilitado
const btnSubmeter = document.getElementById("submeter");
btnSubmeter.disabled = true;
//Declarando botão de submissao e tornando ele desabilitado



function validarForm(){

 
    var formValido = false;
    event.preventDefault();
    //Impede que a pagina de reload

    let form = event.target;
    
    
    btnSubmeter.disabled = true;
    btnEditar.disabled = true;
    const spanNome = document.getElementById("spanNome");
    const spanSobrenome = document.getElementById("spanSobre");
    const spanEmail = document.getElementById("spanEmail");
    const spanDoacao = document.getElementById("spanDoacao");
    //Declarando campos de span

    spanNome.textContent = "";
    spanSobrenome.textContent = "";
    spanEmail.textContent = "";
    spanDoacao.textContent = "";
    //Setando como vazio os campos 

    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const email = document.getElementById("email");
    //Pegando os campos do formulario


    if(nome.value === ""){
        spanNome.textContent = "ERRO DIGITE O NOME DA FORMA CERTA";
        formValido = false;
        //Verifica se o campo nome esta vazio, se estiver errado exibe mensagem de erro
    }else{
        formValido = true;
    }
    if(sobrenome.value === ""){
        spanSobrenome.textContent = "ERRO DIGITE O SOBRENOME DA FORMA CERTA";
        formValido = false;
        //Verifica se o campo de sobrenome esta vazio, se estiver errado exibe mensagem de erro
    }else{
        formValido = true;
    }
    if(email.value === ""){
        spanEmail.textContent = "ERRO AO VALIDAR EMAIL";
        formValido = false;
        //Verifica se o campo de email esta vazio, se estiver errado exibe mensagem de erro
    }else{
        formValido = true;
    }
    
    const inputSelecionado = document.querySelector("input[name = 'doacao']:checked");
    //Recebe a partir do querySelector o imput de doacao que foi checkado
    const radioInputs = document.querySelectorAll("input[name = 'doacao']");
    //Recebe todos os inputs como o name doacao

    if(inputSelecionado === null){
        spanDoacao.textContent = "Nenhuma opção de doacao marcada";
        formValido = false;
        //verifica se um campo foi marcado, se nao estiver exibe mensagem de erro

    }else{
        formValido = true;
    }

    const resultado = document.getElementById("spanResultado");


    if(formValido){
        nome.disabled = formValido;
        sobrenome.disabled = formValido;
        email.disabled = formValido;
        radioInputs.forEach((input)=>{
            alternaBtn(input, true);
        })
        btnEditar.disabled = false;
        btnSubmeter.disabled = false;


        resultado.innerHTML = `
        <table id="tabela"  border = 1>
            <thead>
                <th> NOME </th>
                <th> SOBRENOME </th>
                <th> EMAIL </th>
                <th> Valor Doação<th>
            </thead>
            <tbody>
                <tr>
                    <td>${nome.value}</td>
                    <td>${sobrenome.value}</td>
                    <td>${email.value}</td>
                    <td>R$${inputSelecionado.value}.00</td>
                </tr>
            </tbody>
        </table>
    `


    }

 
}

function religar(){

    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const email = document.getElementById("email");
    const radioInputs = document.querySelectorAll("input[name = 'doacao']");
    //Selecionando campos


    nome.disabled = false;
    sobrenome.disabled = false;
    email.disabled = false;
    radioInputs.forEach((input)=>{
        input.disabled = false;
        //Habilita todos os campos
    })
    btnEditar.disabled = true;
    btnSubmeter.disabled = true;
    //Desabilita os botoes

}

function alternaBtn(btn, estado){
        btn.disabled = estado;
}