   const navBar = document.querySelector("nav");
   const staticBtn = document.querySelector(".btn-static-search");
   const poweredBy = document.querySelector("#poweredby-text");
   const search = document.querySelector("#search-text");
   const resultContainer = document.querySelector('#search-result-container');
   var heroList = {}; 

// pull our heroes from rapid api after DOM is successfully loaded
document.addEventListener("DOMContentLoaded", async () => {
    heroList = await requestApi();
    console.log(heroList.data);
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
    const filteredHeroes = heroList.data.filter(i => i.name.toLowerCase().includes(element.value.toLowerCase()));

    resultContainer.innerHTML ='';
    resultContainer.style.display = element.value === null || element.value==="" || filteredHeroes.length == 0 ? "none":"block";

    for(let hero of filteredHeroes){

        //avatar
        let heroImage = document.createElement("img");
        heroImage.src = hero.avatar.slice(0, hero.avatar.lastIndexOf('.'))+".png";
        heroImage.width = "40";
        heroImage.height ="40";
        heroImage.objectFit = "cover";

        //name
        let elementP = document.createElement("p");
        elementP.textContent = hero.name;
        elementP.style.color ="white";
        elementP.style.marginLeft = "5";

        let subDiv = document.createElement("div");
        subDiv.appendChild(heroImage);
        subDiv.appendChild(elementP);
        subDiv.style.display ="flex";
        subDiv.style.paddingBottom = "10";

        resultContainer.append(subDiv);
    }

    
} 



