const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const image = document.querySelector(".image")

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    image.src = "https://media1.tenor.com/m/ASElCHMDevkAAAAC/kawaii-hugs.gif";
    question.innerHTML = "私も愛しているよ >.<";
    noBtn.remove()
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));

    noBtn.style.position = 'absolute';
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});