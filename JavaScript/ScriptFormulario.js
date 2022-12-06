
var btnEditar = document.getElementById("btn-editar");
btnEditar.disabled = true;
var btnSubmeter = document.getElementById("submeter");
btnSubmeter.disabled = true;
btnEditar.style.cursor= "default";
btnSubmeter.style.cursor= "default";

function validarForm(){

    var formValido = true;
    event.preventDefault();
    let form = event.target;
    
    

    const spanNome = document.getElementById("spanNome");
    const spanSobrenome = document.getElementById("spanSobre");
    const spanEmail = document.getElementById("spanEmail");
    const spanDoacao = document.getElementById("spanDoacao");

    spanNome.textContent = "";
    spanSobrenome.textContent = "";
    spanEmail.textContent = "";
    spanDoacao.textContent = "";

    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const email = document.getElementById("email");

    if(nome.value === ""){
        spanNome.textContent = "ERRO DIGITE O NOME DA FORMA CERTA";
        formValido = false;
    }else{
        formValido = true;
    }
    if(sobrenome.value === ""){
        spanSobrenome.textContent = "ERRO DIGITE O SOBRENOME DA FORMA CERTA";
        formValido = false;
    }else{
        formValido = true;
    }
    if(email.value === ""){
        spanEmail.textContent = "Erro ao validar email";
        formValido = false;
    }else{
        formValido = true;
    }

    const doacaoUm = document.getElementById("um");
    const doacaoCinco = document.getElementById("cinco");
    const doacaoDez = document.getElementById("dez");
    const doacaoVinte = document.getElementById("vinte");
    
    if(!doacaoUm.checked && !doacaoCinco.checked && !doacaoDez.checked && !doacaoVinte.checked){
        spanDoacao.textContent = "Nenhuma opção de doacao marcada";
        formValido = false;
    }else{
        formValido = true;
    }

    

    if(formValido){
        nome.disabled = formValido;
        sobrenome.disabled = formValido;
        email.disabled = formValido;
        doacaoUm.disabled = formValido;
        doacaoCinco.disabled = formValido;
        doacaoDez.disabled = formValido;
        doacaoVinte.disabled = formValido;
        btnEditar.disabled = false;
        btnEditar.style.cursor= "pointer";
    }
     btnSubmeter.disabled = !formValido;
     btnSubmeter.style.cursor = "pointer";
    





    const resultado = document.getElementById("spanResultado");

    if(formValido){
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
                <td>${doacaoUm.checked ? 'R$ 1.00' : doacaoCinco.checked ? 'R$ 5.00' : doacaoDez.checked ? 'R$10.00' : doacaoVinte.checked ? 'R$20.00' : 'undefined'}
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
    const doacaoUm = document.getElementById("um");
    const doacaoCinco = document.getElementById("cinco");
    const doacaoDez = document.getElementById("dez");
    const doacaoVinte = document.getElementById("vinte");

    nome.disabled = false;
    sobrenome.disabled = false;
    email.disabled = false;
    doacaoUm.disabled = false;
    doacaoCinco.disabled = false;
    doacaoDez.disabled = false;
    doacaoVinte.disabled = false;
    btnEditar.disabled = true;
    btnSubmeter.disabled = true;

    btnEditar.style.cursor= "default";
    btnSubmeter.style.cursor= "default";
}