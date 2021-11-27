let userName = document.location.search;
PegarUser = userName = userName.substr(1, userName.length);
let divcima = document.createElement('div');
document.body.appendChild(divcima)

function getUserGithub(PegarUser) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName)
        .then(function(resultado) {
            resultado.json().then(function(data) {
                console.log('User Data:', data);
                showUserGithub(data);
            });
        }).catch(function(erro) {
            console.log('erro:', erro);
        });
}
getUserGithub();


function showUserGithub(user) {
    if (!user) return;

    let divName = document.createElement('div');
    divName.innerText = user.name;
    divcima.appendChild(divName);

    let divuserName = document.createElement('div');
    divuserName.innerText = user.login;
    divcima.appendChild(divuserName);

    let divImg = document.createElement('img');
    divImg.src = user.avatar_url;
    divcima.appendChild(divImg);
}

let divbaixo = document.createElement('div');
document.body.appendChild(divbaixo)

function getUserReposGithub(PegarUser) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName + '/repos')
        .then(function(resultado) {
            resultado.json().then(function(Repositorio) {
                Repositorio.forEach(function(element) {

                    console.log('Repositories Data:', element.name);
                    let repos = document.createElement('div')
                    divbaixo.appendChild(repos);
                    repos.innerText = element.name;
                    let link = document.createElement('a')
                    link.href = element.html_url;
                    link.innerText = element.html_url
                    repos.appendChild(link);
                });
            });
        }).catch(function(erro) {
            console.log('erro:', erro);
        });
}
getUserReposGithub();