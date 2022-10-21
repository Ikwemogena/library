

const popupLogin = document.getElementById("myPopup");
const showPop = document.getElementById("show-add");
const mainContainer = document.getElementById("erase");


showPop.addEventListener("click", () => {
    popupLogin.classList.remove("hidden");
    mainContainer.style.display = "none"
})










// let library = []

// function Book(title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function(){
//         return(`title + author + ". " + pages + ", " + read`);
//     }
    
// }


// function myFunction() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//   }