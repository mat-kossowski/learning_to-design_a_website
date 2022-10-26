let buttonShow = document.querySelector('#home-show');


let dod1 = document.querySelector('#dodo1');
let dod2 = document.querySelector('#dodo2');


buttonShow.addEventListener('click', event => {
    if (buttonShow.textContent === "Pokaż więcej") {
        dod1.style.display = "inline-block";
        dod2.style.display = "inline-block";
        buttonShow.textContent = "Zwiń"
    }else {
        dod1.style.display = "none";
        dod2.style.display = "none";
        buttonShow.textContent = "Pokaż więcej"
    }

})
