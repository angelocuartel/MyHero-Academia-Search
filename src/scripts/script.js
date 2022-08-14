   const navBar = document.querySelector("nav");
   const staticBtn = document.querySelector(".btn-static-search");
   const poweredBy = document.querySelector("#poweredby-text");
   const search = document.querySelector("#search-text");
   const resultContainer = document.querySelector('#search-result-container'); 

// pull our heroes from rapid api after DOM is successfully loaded
document.addEventListener("DOMContentLoaded",() => {
    requestApi();
})

const showCurrentInnerHeight = () => {
    changeNavColor();
   if(window.scrollY >= 395){
       if(!staticBtn.classList.contains("show")){
        staticBtn.classList.add("show");
       }
    
   }
   else if (window.scrollY < 395){
    staticBtn.classList.remove("show");
   }
}

const isVisible = element => {
    return element.style.visibility == "visible";
}

const changeNavColor = () => {
    if(window.scrollY >= 984){
        navBar.style.backgroundColor ="rgb(30,30,30)";
        poweredBy.style.color=search.style.color= "white";
    }
    else{
    navBar.style.backgroundColor ="white";
    poweredBy.style.color = search.style.color= "black";
    }
}

const showSearchResult = element => {  
    resultContainer.style.display = element.value === undefined || element.value==='' ? "none":"block";
} 



