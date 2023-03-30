/* ------------------------------- Navigation button ------------------------------- */
function navigationButtonAction () {
    const button = document.querySelector('.about-us__button');
    const target = document.querySelector('#main__about-us-container');

    button.addEventListener('click', () => {
        target.scrollIntoView();
    })
}
registerButtonAction();


/* ------------------------------- Modal button ------------------------------- */
function registerButtonAction () {
    const buttonList = document.querySelectorAll('.register__button');
    const modal = document.querySelector('#main__modal-controller');

    for (let i = 0; i < buttonList.length; i++) {
        const button = buttonList[i];

        button.addEventListener('click', () => {
            modal.showModal();
        })
    }
    closeModal();
}

function closeModal() {
    const button = document.querySelector(".close-modal");
    const modal = document.querySelector("#main__modal-controller");
  
    button.addEventListener("click", () => {
      modal.close();
    });
}

navigationButtonAction();
