const numberOfMail = 10
let randomMail = [];
const emailList = document.getElementById('emailList')

function generateRandomEmails(){
    emailList.innerHTML = '' //per questo ho chiesto aiuto a ChatGpt, //! SERVE PER RIMUOVERE GLI ELEMENTI GENERATI IN PRECEDENZA
    let randomMail = [];

for(let i = 0; i < numberOfMail; i++){
    axios 
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(res => {
        const email = res.data.response;
        randomMail.push(email)

        const listItem = document.createElement('ol');
        listItem.textContent = email;
        emailList.appendChild(listItem)
 })
    .catch(err => {
        console.log('Errore durante la richiesta', err)
    })
}
}

generateRandomEmails();

const button = document.getElementById('newMail')
button.addEventListener('click', generateRandomEmails)