const messages = [
    "Na pewno?",
    "Ale serio??",
    "Ala naprawdę?",
    "Alutek plis...",
    "Przemyśl to jeszcze raz!",
    "Oh no no no Alit",
    "Proszę zostań",
    "Będzie mi bardzo smutno",
    "No dobrze rozumiem",
    "Nie no Aluś żartujesz sobie? ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
