function playGame(choice) {
    const options = ['red', 'red1', 'red2'];
    const computerChoice = Math.floor(Math.random() * 3);

    const resultText = document.getElementById('result');


    if (choice === computerChoice) {
        resultText.textContent = 'Победа!';
        document.querySelector('.card:nth-child(' + (choice + 1) + ')').classList.add('win');
    } else {
        resultText.textContent = 'Проигрыш.';
        document.querySelector('.card:nth-child(' + (choice + 1) + ')').classList.add('lose');
        document.querySelector('.card:nth-child(' + (computerChoice + 1) + ')').classList.add('win');
    }

    const buttonContainer = document.querySelector('.button');
    buttonContainer.innerHTML = '<button class="red" onclick="reloadPage()">Сыграть еще раз</button>';
}

function reloadPage() {
    location.reload();
}
