let btnContainer = document.getElementById('header-btn');
let btns = btnContainer.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
let current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active", "");
this.className += " active";
});
}
let ratingNumber = document.getElementById('rating-number');
let submitBtn = document.getElementById('submit-btn').addEventListener('click', btnFunction);
let frontContainer = document.getElementById('frontContainer');
let principalContainer = document.getElementById('principalContainer');
function btnFunction(){
let current = document.getElementsByClassName("active");
ratingNumber.innerHTML = current[0].innerHTML;
principalContainer.style.display = 'none';
frontContainer.style.display = 'grid';
}
