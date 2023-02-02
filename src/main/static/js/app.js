let buttonShowHome = document.querySelector('#home-show');
let buttonShowDruty = document.querySelector('#druty-show');
let buttonShowRobotki = document.querySelector('#robotki-show');
let articleHome = document.querySelector('.dodo1');
let articleDruty = document.querySelector('.dodo2');
let articleRobotki = document.querySelector('.dodo3');


function toggleDiv(toggleBtn, myDiv) {
    if (myDiv.style.display === "block") {
        myDiv.style.display = "none";
        toggleBtn.innerHTML = "Pokaż";
    } else {
        myDiv.style.display = "block";
        toggleBtn.innerHTML = "Ukryj";
    }
}

buttonShowHome.addEventListener("click", function() {
    toggleDiv(buttonShowHome, articleHome);
});
buttonShowDruty.addEventListener("click", function() {
    toggleDiv(buttonShowDruty, articleDruty);
});
buttonShowRobotki.addEventListener("click", function() {
    toggleDiv(buttonShowRobotki, articleRobotki);
});


