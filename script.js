const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onload = function () {
        let response = request.response;
        processResponse(response);
    }
}

function sendRequest() {
    requestJSON(requestUrl);
}

function processResponse(response) {
    response = JSON.parse(response);
    
    // Eerst de squad.
    document.getElementById('squadName').innerText = response.squadName;
    document.getElementById('homeTown').innerText = response.homeTown;
    document.getElementById('formed').innerText = response.formed;
    document.getElementById('secretBase').innerText = response.secretBase;
    document.getElementById('active').innerText = response.active;
    
    // Daarna de squad leden.
    for (let i = 0; i < response.members.length; i++) {
       let row = document.getElementById('member-table').insertRow(-1);
       
       let name = row.insertCell(0);
       let age = row.insertCell(1);
       let secretIdentity = row.insertCell(2);
       let powers = row.insertCell(3);

       name.innerText = response.members[i].name;
       age.innerText = response.members[i].age;
       secretIdentity.innerText = response.members[i].secretIdentity;
       powers.innerText = response.members[i].powers.join(', ');
    };
}

sendRequest();
