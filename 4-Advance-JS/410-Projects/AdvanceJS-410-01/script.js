const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const profilesContainer = document.getElementById('profiles_container');
const clear = document.getElementById('clear-button');

init();

function init(){
    searchButton.addEventListener('click', getUsers);
    clear.addEventListener('click',()=>{
        searchInput.value="";
        profilesContainer.innerHTML='';
    })
}

async function getUsers(){
    const value = searchInput.value;
    const streamResponse = await fetch(`https://api.github.com/search/users${value ? `?q=${value}` : ''}`)
    const textResponse = await streamResponse.text();
    const jsonResponse = JSON.parse(textResponse);
    console.log(jsonResponse);
    renderUsers(jsonResponse.items); 
}

function renderUsers(userdata){
    let html="";
    for(let i=0;i<userdata.length;i++){
        const profilePictureUrl = userdata[i]['avatar_url'];
        const profileUrl = userdata[i]['html_url'];
        const username = userdata[i]['login'];
        html  += `<div class="profile">
        <img src="${profilePictureUrl}" class="profile_img" alt="profile"/>
        <div>
            <h3 id="username">${username}</h3>
            <a href="${profileUrl}">visit profile</a>
        </div>
    </div>`
    }
profilesContainer.innerHTML = html;
}
