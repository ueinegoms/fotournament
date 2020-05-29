var conteudoChave = '';

(function () {
    chave = 'asdf123'
    obj = {"chave": chave};
    form = JSON.stringify(obj);

    const dbRefObject = firebase.database().ref().child('fotournamentBrackets');
    dbRefObject.on('value', snap => console.log(snap.val()));

    const dbRefChave = firebase.database().ref().child(chave);
    dbRefChave.on('value', snap => conteudoChave = snap.val());


    fetch("https://fotournament-prototype.firebaseio.com/fotournamentBrackets.json", {
        method: "PUT",
        body: form
    }).then(e => console.log(e));
    fetch("https://fotournament-prototype.firebaseio.com/"+chave+".json", {
        method: "POST",
        body: JSON.stringify(obj)
    }).then(e => console.log(e));

    document.getElementById('chaveid').innerHTML = chave;
}());

function irparacelular(){
    window.location = 'https://newurl.com'
}