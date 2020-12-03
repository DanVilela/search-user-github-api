const users = 'https://api.github.com/users/';
const form = document.querySelector('.mainForm');
const result = document.querySelector('.result')


form.addEventListener('submit', function (event) {
    event.preventDefault();

    let search = document.querySelector('.search').value;
    let originalName = search.split(' ').join('');
    result.innerHTML = "";

    fetch(users + originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)
            result.innerHTML = `
            <div class="dataProfile">
            <a class="userImg" target="_blank" href="https://www.github.com/${originalName}"><img src= "${data.avatar_url}"/></a>
            <div class="textProfile">
            <h1>${data.name}</h1>
            <ul>
                <li>Repositórios: ${data.public_repos} </li>
                <li>Seguidores: ${data.followers}</li>
                <li>Seguindo: ${data.following}</li>
            </ul>
            </div>
            </div>
            `
        }).catch(() => {
            console.error('error');
        })
})