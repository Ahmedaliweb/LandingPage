/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

//////////////////// Build menu ////////////////////

// store section id in variable
const allSection = document.querySelectorAll("section");
// listening for an event for the navigation to build
document.addEventListener('DOMContentLoaded', buildNav)
function buildNav(){
  
    const fragment = document.createDocumentFragment();
    const uUl = document.getElementById("navbar__list");
    // loop for target each section from the 4 section
    for (const section of allSection){
        // build li list in nav and store it in varaiable
        const list = document.createElement('li');
        // build anchors in each li 
        list.innerHTML = `<a href="#${section.id}" class="menu__link">${section.getAttribute("data-nav")}</a>`;
        fragment.appendChild(list);
    }
    // set the li lists inside ul
    uUl.appendChild(fragment);
   
}
///////////////////////////// Scroll to section on link click///////////
//highlight section and nav when scroll

// add scroll as event listener and function that will executed when scroll happend
document.addEventListener("scroll", highlighSectionByScroll);
//excute below function when scroll event happend
function highlighSectionByScroll(){
//loop to target each section from sections
   for (const section of allSection) {
    // determine the hieght of section 
    if (
      section.getBoundingClientRect().top >= 0 &&
      section.getBoundingClientRect().top < 300
    ) {
        //add active class when section equal link
      section.classList.add("your-active-class");
      const allLink = document.querySelectorAll("a.menu__link");
      const sectTitle = section.getAttribute("data-nav");
      //loop to target each link from links 
      for (const link of allLink) {
        //
        if (link.textContent === sectTitle) {
            // add active class when link equal section 
          link.classList.add("Active");
        } else {
          //remove active class when link not equal section
          link.classList.remove("Active");
        }
      }
      
      
    } else {
      //remove active class when section not equal link
      section.classList.remove("your-active-class");
    }
   

}
}
//////////////////smoth scroll///////////////////////////
// Get id and add click event to it
document.getElementById("navbar__list").addEventListener("click", function (e) {
  //prevent the auto-scrolling due to the anchor tag.
  e.preventDefault();
  //we will store the location at which point the click event happened=>target variable
  const target = e.target;
  //loop for which are on elements having class "menu__link".
  if (target.classList.contains("menu__link")) {
    //saving the value given in href attribute of the element in variable and cut the '#' and store the remaining value.
    const id = target.getAttribute("href").slice(1);
    //target the element which is having the id the same as the value stored in the id variable and apply the "scrollIntoView"
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
});
