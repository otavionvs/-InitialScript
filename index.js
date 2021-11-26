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
    { name: 'Leonardo Heitor Poglia', userName: 'Leonardo Heitor Poglia' },
    { name: 'Leonardo Giuseppe de Souza Rafaelli', userName: 'LeonardoRafaelli' },
    { name: 'Matheus Franzener Hohmann', userName: 'MatheusFranzener' },
    { name: 'Otavio Matheus Neves', userName: 'otavionvs' },
    { name: 'Otavio Augusto dos Santos', userName: 'SantOtavio' },
    { name: 'Thiago Marins Braga', userName: 'ThiagoBrag' },
    { name: 'Vinícius Bonatti Benner', userName: 'viniciusz1' },
    { name: 'Vytor Augusto Rosa', userName: 'K43RU' },

];

function CreateTable() {
    const Tablebody = document.querySelector('table');
    if (Tablebody) {
        Tablebody.remove();
    }

    const table = document.createElement('table');
    const row = document.createElement('tr');
    const columnName = document.createElement('td');
    const columnuserName = document.createElement('td');


    columnName.innerText = 'Nomes';
    columnuserName.innerText = 'UserNames';


    row.appendChild(columnName);
    row.appendChild(columnuserName);
    table.appendChild(row);

    ListClassMates.forEach(function(element) {
        console.log('element:', element);
        const rowTable = ClassMatesTable(
            element.name,
            element.userName
        );

        table.appendChild(rowTable);
    })

    document.body.appendChild(table);
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


function getUserGithub(userName) {
    fetch('https://api.github.com/users/' + userName)
        .then(function(resultado) {
            resultado.json().then(function(data) {
                console.log('User Data:', data);
                showUserGithub(data);
            });
        }).catch(function(erro) {
            console.log('erro:', erro);
        });
}

function showUserGithub(user) {
    if (!user) return;
    let divName = document.createElement('div');
    divName.innerText = user.login;
    document.body.appendChild(divName);
}

function getUserReposGithub(userName) {
    fetch('https://api.github.com/users/' + userName + '/repos')
        .then(function(resultado) {
            resultado.json().then(function(data) {
                console.log('Repositories Data:', data);
            });
        }).catch(function(erro) {
            console.log('erro:', erro);
        });
}