const modalBtn = document.querySelector("button");
const offBtn = document.querySelector ("span");

modalBtn.addEventListener("click", function() {
    document.querySelector('.wrap').classList.add('blur');
    document.querySelector('.modal-wrap').classList.add('active');
})
offBtn.addEventListener("click", function() {
    document.querySelector('.wrap').classList.remove('blur');
    document.querySelector('.modal-wrap').classList.remove('active');
})


