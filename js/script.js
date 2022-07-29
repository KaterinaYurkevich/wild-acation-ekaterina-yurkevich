// header

const header = document.querySelector("header");
window.addEventListener("scroll", function(e) {
    const scrollFromTop = document.querySelector("html").scrollTop
    header.style.backgroundColor = scrollFromTop > 0 ? "#23272c" : "transparent";
})


// button switching

const buttonLang = document.querySelector(".language-button-wrapper");

function getButtonActive(event) {
    const buttonLangElem = document.querySelectorAll(".language-button");

    buttonLangElem.forEach((elem) => {
        elem.classList.remove('language-button-active');
    })
    event.target.classList.add('language-button-active');
}

buttonLang.addEventListener("click", getButtonActive);


// disabling button

const mainForm = document.forms.main;
const mainFormInputCheckbox = main.inputCheckbox;
const mainFormInputButton = main.inputButton;
const mainFormInputPlace = main.tripPlace;

let messageInputPlace = document.createElement('span');
mainFormInputPlace.after(messageInputPlace);
messageInputPlace.style.fontSize = "10px";

let messageInputCheckbox = document.createElement('span');
mainFormInputButton.before(messageInputCheckbox);
messageInputCheckbox.style.fontSize = "10px";

//// один из вариантов так мне больше нравится)))

//mainForm.addEventListener("submit", function(event) {
//    mainFormInputPlace.classList.remove("_error");

//    if (!mainFormInputPlace.value) {

//        messageInputPlace.innerHTML = 'Вы не ввели куда бы Вы хотели отправится';
//        mainFormInputPlace.classList.add("_error");
//        event.preventDefault();
//    } else {
//        messageInputPlace.innerHTML = '';
//        mainFormInputPlace.classList.remove("_error");
//    }

//    if (!mainFormInputCheckbox.checked) {

//        messageInputCheckbox.innerHTML = 'Нужно согласится с обработкой данных';
//        event.preventDefault();
//    } else {
//        messageInputCheckbox.innerHTML = '';
//    }
//});


// c disabled

mainFormInputButton.disabled = true;

mainFormInputPlace.addEventListener("keydown", function(event) {

    messageInputPlace.innerHTML = '';
    mainFormInputPlace.classList.remove("_error");
    if (mainFormInputCheckbox.checked) {
        mainFormInputButton.disabled = false;
    }

});

mainForm.addEventListener("click", function(event) {

    if (!mainFormInputPlace.value) {

        messageInputPlace.innerHTML = 'Вы не ввели куда бы Вы хотели отправится';
        mainFormInputPlace.classList.add("_error");
    } else {
        messageInputPlace.innerHTML = '';
        mainFormInputPlace.classList.remove("_error");
    }

    if (!mainFormInputCheckbox.checked) {

        messageInputCheckbox.innerHTML = 'Нужно согласится с обработкой данных';
    } else {
        messageInputCheckbox.innerHTML = '';
    }
    if (mainFormInputPlace.value && mainFormInputCheckbox.checked) {
        mainFormInputButton.disabled = false;
    }
});


// Request button

const buttonRequest = document.querySelector(".help-button");
const popupWindow = document.querySelector(".popup");
const popupWindowButton = document.querySelector(".popup-button");

function getRequest(url) {
    return fetch(url)
        .then(response => response.json())
}

function createMessage(message) {
    let popupMessage = document.createElement('p');
    popupMessage.classList.add('popup-message');
    popupWindow.append(popupMessage);
    popupMessage.innerHTML = message;
}

function removeMessage() {
    let popupMessage = document.querySelector('.popup-message');
    if (!popupMessage) {
        return;
    } else {
        popupMessage.remove();
    }

}

buttonRequest.addEventListener("click", function(event) {
    removeMessage();
    let messageRequest = getRequest('https://jsonplaceholder.typicode.com/');

    createMessage(messageRequest);
    popupWindow.style.display = "block";
})

popupWindowButton.addEventListener("click", function(event) {
    popupWindow.style.display = "none";
    removeMessage();
})


// menu button

const menuBody = document.querySelector('.menu-header');
const menuButton = document.querySelector('.mobile-menu-button');

menuButton.addEventListener("click", menu);

function menu(event) {
    if (event.target.closest('.mobile-menu-button')) {
        menuBody.classList.toggle('_menu-header-active');
    }
    if (!event.target.closest('.menu-header')) {
        menuBody.classList.remove('_menu-header-active');
    }
}