   const navBar = document.querySelector("nav");
   const staticBtn = document.querySelector(".btn-static-search");
   const search = document.querySelector("#search-text");
   const resultContainer = document.querySelector('#search-result-container');
   var heroList = {}; 

// pull our heroes from rapid api after DOM is successfully loaded
document.addEventListener("DOMContentLoaded", async () => {
    heroList = await requestApi();
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
        search.style.color ="white";
    }
    else{
    navBar.style.backgroundColor ="white";
    search.style.color ="black";
    }
}

const showSearchResult = element => {  
    const filteredHeroes = heroList.data.filter(i => i.name.toLowerCase().includes(element.value.toLowerCase()));
    let tempCharList =[];

    resultContainer.innerHTML ='';
    resultContainer.style.display = element.value === null || element.value==="" || filteredHeroes.length == 0 ? "none":"block";

    for(let hero of filteredHeroes){

        const heroExist = tempCharList.filter(i => i.toLowerCase() === hero.name.toLowerCase()).length > 0 ;

        if(!heroExist){
        //avatar
        let heroImage = document.createElement("img");
        heroImage.src = hero.avatar.slice(0, hero.avatar.lastIndexOf('.'))+".png";
        heroImage.width = "40";
        heroImage.height ="40";
        heroImage.objectFit = "cover";
        heroImage.id = hero.wiki;
        heroImage.addEventListener("click",redirectToWiki,false);
        

        //name
        let elementP = document.createElement("p");
        elementP.textContent = hero.name;
        elementP.style.color ="white";
        elementP.style.marginLeft = "5";
        elementP.id = hero.wiki;
        elementP.addEventListener("click",redirectToWiki,false);

        let subDiv = document.createElement("div");
        subDiv.appendChild(heroImage);
        subDiv.appendChild(elementP);
        subDiv.style.display ="flex";
        subDiv.style.paddingBottom = "10";
        subDiv.style.cursor ="pointer"; 
        subDiv.classList.add('hover-effect');
        subDiv.classList.add("heroItem");
        subDiv.id = hero.wiki;
        subDiv.addEventListener("click",redirectToWiki,false);

        resultContainer.append(subDiv);
        tempCharList.push(hero.name);

        }
    }

}


const redirectToWiki = event => {
    window.open(event.target.id,'_blank');
    document.querySelector(".main-searchbar").value ="";
}



