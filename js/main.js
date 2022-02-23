//Grab all icons
const buttons = document.querySelectorAll('.button');

//Add event listener to all icons and run showAnswer function on click
Array.from(buttons).forEach(element => element.addEventListener('click', showAnswer));

//Reveals question answer and toggles icon
function showAnswer(click) {
    let currentQuestionAnswer = click.target.previousElementSibling.lastElementChild;
    currentQuestionAnswer.classList.toggle('hidden');

    toggleButton(click);
}

//Toggles icon 
function toggleButton(click) {
    let currentButtonIcon = getCurrentButtonIcon(click);

    if (currentButtonIcon === 'downArrow') {
        click.target.classList.toggle('ph-caret-down-bold')
        click.target.classList.add('ph-minus-bold')
    } else {
        click.target.classList.toggle('ph-minus-bold')
        click.target.classList.add('ph-caret-down-bold')
    }
}

//Gets current icon
function getCurrentButtonIcon(click) {
    let currentButtonIcon = click.target.classList;

    if (currentButtonIcon.contains('ph-caret-down-bold')) {
        return currentButtonIcon = 'downArrow'
    } else {
        return currentButtonIcon = 'minusSign'
    }
}
