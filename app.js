const numberOfMail = 10
let randomMail = [];

for(let i = 0; i < numberOfMail; i++){
    axios 
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(res => {
        const email = res.data.response;
        randomMail.push(email)
    })
}
console.log(randomMail)