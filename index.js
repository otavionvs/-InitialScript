let ListClassMates = [
    { name: 'Bruno Henrique Verbinnen de Carvalho', userName: 'brunohvc' },
    { name: 'Bruna Alves Mafra', userName: 'BMafra' },
    { name: 'Camilly de Souza Pessotti', userName: 'camillyPessotti' },
    { name: 'Camilly Vitoria da Rocha Goltz', userName: 'VitoriaCamilly' },
    { name: 'Diego Planinscheck', userName: 'frst157' },
    { name: 'Eduarda Bolgenhagen De Campos', userName: 'eduardabolgenhagen' },
    { name: 'Ester Girelli', userName: 'Esterzinha12' },
    { name: 'Felipe Mielke Vieira', userName: 'FelipeMielkeVieira' },
    { name: 'Gustavo Rebelatto Zapella', userName: 'rebelattogustavo' },
    { name: 'Henrique Cole Fernandes', userName: 'HenriqueCole' },
    { name: 'João Henrique Meirles da Silva', userName: 'nihilth' },
    { name: 'Kenzo Hideaky Ferreira Sato', userName: 'Kenzohfs' },
    { name: 'Leonardo Heitor Poglia', userName: 'leopoglia' },
    { name: 'Leonardo Giuseppe de Souza Rafaelli', userName: 'LeonardoRafaelli' },
    { name: 'Matheus Franzener Hohmann', userName: 'MatheusFranzener' },
    { name: 'Otavio Matheus Neves', userName: 'otavionvs' },
    { name: 'Otavio Augusto dos Santos', userName: 'SantOtavio' },
    { name: 'Thiago Marins Braga', userName: 'ThiagoBrag' },
    { name: 'Vinícius Bonatti Benner', userName: 'viniciusz1' },
    { name: 'Vytor Augusto Rosa', userName: 'K43RU' },

];
let divbotoes = document.createElement('div');
document.body.appendChild(divbotoes);
divbotoes.className = "divbotoes";

let ProcurarNomes = document.createElement('input');
divbotoes.appendChild(ProcurarNomes);
let botaoProcurarNomes = document.createElement('button');
divbotoes.appendChild(botaoProcurarNomes);
// botaoProcurarNomes.onclick = clickButtonFindPerson;
botaoProcurarNomes.innerText = "Procurar Pessoa";

let botaoCadastro = document.createElement('button');
divbotoes.appendChild(botaoCadastro);
botaoCadastro.onclick = clickButtonRegisteryPerson;
botaoCadastro.innerText = "Cadastrar Pessoa";

function CreateTable() {
    const Tablebody = document.querySelector('table');
    if (Tablebody) {
        Tablebody.remove();
    }

    const divtable = document.createElement('div');
    const table = document.createElement('table');
    const row = document.createElement('tr');
    const columnName = document.createElement('td');
    const columnuserName = document.createElement('td');

    divtable.className = "divtable";

    columnName.innerText = 'Nomes';
    columnuserName.innerText = 'UserNames';


    row.appendChild(columnName);
    row.appendChild(columnuserName);
    table.appendChild(row);

    ListClassMates.forEach(function(element) {
        console.log('element:', element);
        const rowTable = ClassMatesTable(
            element.name,
            element.userName,

        );

        table.appendChild(rowTable);
    })

    document.body.appendChild(divtable);
    divtable.appendChild(table);
}

function ClassMatesTable(name, userName) {
    const row = document.createElement('tr');
    const columnName = document.createElement('td');
    const columnuserName = document.createElement('td');
    const columnTdBotao = document.createElement('td');
    let Botao = document.createElement('button');

    Botao.innerText = "GitHub";


    function irGit() {
        location.href = './userPage/index.html?' + userName;
    }

    Botao.onclick = irGit;

    columnName.innerText = name;
    columnuserName.innerText = userName;
    columnTdBotao.createElement = 'button';

    columnTdBotao.appendChild(Botao);
    row.appendChild(columnName);
    row.appendChild(columnuserName);
    row.appendChild(columnTdBotao);
    return row;
}


CreateTable();

console.log(ListClassMates);




function clickButtonRegisteryPerson() {
    const modal = createModal();
    const content = getContentRegesteryPersonModal(modal.removeModal);

    modal.insertHeader(content.header);
    modal.insertMain(content.main);
    modal.insertFooter(content.footer);
}

function createModal() {
    let background = document.createElement('div');
    background.id = "background-modal";
    let modal = document.createElement('div');
    modal.id = "modal";
    background.appendChild(modal);
    document.body.appendChild(background);

    let header = document.createElement('div');
    let main = document.createElement('div');
    let footer = document.createElement('div');

    header.id = 'modal-header';
    main.id = 'modal-main';
    footer.id = 'modal-footer';

    modal.appendChild(header);
    modal.appendChild(main);
    modal.appendChild(footer);

    function removeModal() {
        background.remove();
    }

    function insertHeader(html) {
        header.appendChild(html);
    }

    function insertMain(html) {
        main.appendChild(html);
    }

    function insertFooter(html) {
        footer.appendChild(html);
    }

    let retorno = {
        background: background,
        modal: modal,
        removeModal: removeModal,
        insertHeader: insertHeader,
        insertMain: insertMain,
        insertFooter: insertFooter,
    }

    return retorno;
}

function getContentRegesteryPersonModal(removeModal) {
    const header = document.createElement('div');
    header.id = 'person-header';
    const title = document.createElement('h1');
    title.innerText = 'Cadastro GitHub';
    header.appendChild(title);

    const main = document.createElement('div');
    main.id = 'person-main';

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Nome';
    main.appendChild(inputNome);

    const inputSobrenome = document.createElement('input');
    inputSobrenome.type = 'text';
    inputSobrenome.placeholder = 'User';
    main.appendChild(inputSobrenome);


    const footer = document.createElement('div');
    footer.id = 'person-footer';
    const buttonRegistery = document.createElement('button');
    buttonRegistery.innerText = 'Registrar';

    function registery() {
        const name = inputNome.value;
        const userName = inputSobrenome.value;

        if (!name || name == '') {
            return;
        }
        if (!userName || userName == '') {
            return;
        }

        registeryPerson(name, userName);
        removeModal();
    }
    buttonRegistery.onclick = registery;

    const buttonCancel = document.createElement('button');
    buttonCancel.innerText = 'Cancelar';
    buttonCancel.onclick = removeModal;

    footer.appendChild(buttonRegistery);
    footer.appendChild(buttonCancel);

    return {
        header: header,
        main: main,
        footer: footer,
    }
}

function registeryPerson(name, userName) {
    let person = {
        name: name,
        userName: userName
    }

    ListClassMates.push(person);
    CreateTable();
}

function clickButtonRegisteryPerson() {

}
// JavaScript code
/* function search_animal() {
let input = document.getElementById('searchbar').value
input = input.toLowerCase();
let x = document.getElementsByClassName('animals');

for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
    } else {
        x[i].style.display = "list-item";
    }
}

onkeyup
} */

function Filtro(){
    let input = Element.querySelector("input");
    
}

