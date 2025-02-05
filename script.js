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
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
