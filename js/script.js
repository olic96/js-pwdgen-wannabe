// chiedo il nome all'utente (const & prompt)
const name = prompt("Qual è il tuo nome?");
// chiedo il cognome all'utente (const & prompt)
const lastname = prompt("Qual è il tuo cognome?");
// chiedo il colore preferito all'utente (const & prompt)
const favoritecolor = prompt("Qual è il tuo colore preferito?");
// genero la password e aggiungo 21 alla fine (const `${}21`)
const password = `${name}${lastname}${favoritecolor}21`;

// messaggio di benvenuto
document.getElementById("welcome").innerHTML = `Ciao ${name}!<br>La tua password generata è:`;
// password
document.getElementById("password").innerHTML = `${password}`;