const randomNumb = []
const foundNumb = []
const randomNumbEl = document.querySelector(`.random-numbers`);
// creo l`array con 5 numeri casuali
while (randomNumb.length < 5) {
    let i = Math.floor(Math.random() * 100) + 1;
    randomNumb.push(i);
}
// console.log(randomNumb);
// mostro sulla pagina i nr casuali
randomNumbEl.textContent = randomNumb

// dopo 30 secondi rimuovo i numeri dalla pagina 
setTimeout(function () {
    randomNumbEl.classList.add(`d-none`)
}, 30000);

// faccio inserire all`utente tramite un prompt i numeri che si ricorda
setTimeout(function () {
    for (let i = 0; i < 5; i++) {
        const num = prompt(`Inserisci uno dei numeri che ricordi`);
        if (randomNumb.includes(parseInt(num))) {
            foundNumb.push(num);
        }
    }
    alert(`Hai indovinato ${foundNumb.length} numeri: ${foundNumb}`);
    // console.log(foundNumb.length);
}, 31000);

