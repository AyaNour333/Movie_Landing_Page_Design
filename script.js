let arrowLeft = document.querySelector(".grinch-box .arrow-left")
let arrow = document.querySelector(".grinch-box .arrow")
let search = document.querySelector(".grinch-box .search-movie")

arrowLeft.onclick = function(){
    this.classList.add("none")
    search.classList.add("open")
}
arrow.onclick = function(){
    search.classList.remove("open")
    arrowLeft.classList.remove("none")
}