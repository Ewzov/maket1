const loginBtn = document.querySelector(".bu button"); 
const modal = document.getElementById("Modal"); 
const closeBtn = document.querySelector(".close"); 

loginBtn.addEventListener("click", () => {
  modal.style.display = "block"; 
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; 
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"; 
  }
});

const loginBtnKom = document.querySelector(".bu_kom button"); 
const modalKom = document.getElementById("Modal_kom");  
const closeBtnKom = document.querySelector(".close_kom"); 

loginBtnKom.addEventListener("click", () => {
  modalKom.style.display = "block"; 
});

  closeBtnKom.addEventListener("click", () => {
  modalKom.style.display = "none"; 
});

window.addEventListener("click", (e) => {
  if (e.target === modalKom) {
    modalKom.style.display = "none"; 
  }
});
