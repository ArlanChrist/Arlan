//1.COMPTEUR DE CLICS
const btnCompteur = document.querySelector('#btn-compteur');
let nombreClics = 0;

btnCompteur.addEventListener('click', ()=>{
    nombreClics++;
    btnCompteur.textContent = 'Clics : ${nombreClics}';
    if (nombreClics>=10){
        btnCompteur.style.background = '#2E7D32';
        btnCompteur.textContent = 'Champion : ${nombreClics} clics !';
    }
});

// 2. BASCULER LE THEME SOMBRE
const btnTheme = document.querySelector('#btn-theme');

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('theme-sombre');
    const estSombre = document.body.classList.contains('theme-sombre');
    btnTheme.textContent = estSombre ? 'Theme clair' : 'Theme sombre';
});

// 3. VALIDATION DE FORMULAIRE
const formulaire = document.querySelector('#formulaire');
const champNom = document.querySelector('#champ-nom');
const messageRetour = document.querySelector('#message-retour');

formulaire.addEventListener('submit', (e) =>{
    e.preventDefault();
    const nom = champNom.value.trim();

    if (nom.length<2) {
        messageRetour.textContent = 'Nom trop court (2 caracteres min.)';
        messageRetour.style.color = '#C62828'
        return;
    }

    messageRetour.textContent = 'Bienvenue,' nom '!';
    messageRetour.style.color = '#2E7D32';
    formulaire.reset();
})