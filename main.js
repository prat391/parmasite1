let DesktopMediaQuery = window.matchMedia("(min-width:1050px)")

/*================================================================
==================================================================
          Switch between Touch Mode & Cursor Mode
==================================================================
=================================================================*/



function watchForHover() {
  // lastTouchTime is used for ignoring emulated mousemove events
  // that are fired after touchstart events. Since they're
  // indistinguishable from real events, we use the fact that they're
  // fired a few milliseconds after touchstart to filter them.
  let lastTouchTime = 0

  function enableHover() {
    if (new Date() - lastTouchTime < 500) return
    document.getElementsByClassName('navbarmain')[0].classList.add('hasHover')
    document.getElementsByClassName('headernavigationcontainer')[0].classList.add('hasHover')
    
    
    
    
    for (let i=0; i<document.getElementsByClassName('nav-level-one').length; i++){
    
           document.getElementsByClassName('nav-level-one')[i].classList.add('hasHover')}

           for (let i=0; i<document.getElementsByClassName('nav-level-two').length; i++){
    
              document.getElementsByClassName('nav-level-two')[i].classList.add('hasHover')}

  }






  function disableHover() {
    document.getElementsByClassName('navbarmain')[0].classList.remove('hasHover')
    document.getElementsByClassName('headernavigationcontainer')[0].classList.remove('hasHover')

    for (let i=0; i<document.getElementsByClassName('nav-level-one').length; i++){
    
     document.getElementsByClassName('nav-level-one')[i].classList.remove('hasHover')}

     for (let i=0; i<document.getElementsByClassName('nav-level-two').length; i++){
    
        document.getElementsByClassName('nav-level-two')[i].classList.remove('hasHover')}
  }

  function updateLastTouchTime() {
    lastTouchTime = new Date()
  }

  document.addEventListener('touchstart', updateLastTouchTime, true)
  document.addEventListener('touchstart', disableHover, true)
  document.addEventListener('mousemove', enableHover, true)

  enableHover()
}

watchForHover()




let plus = document.getElementsByClassName('plus');
let menu = document.getElementsByClassName('nav-level-one');
let navbarmaintext = document.getElementsByClassName('topnavtext')
let subplus = document.getElementsByClassName('sub-plus')
let submenu = document.getElementsByClassName('nav-level-two')




function spanexpand(){


  for(let i=0; i<plus.length; i++) {


       plus[i].addEventListener("click", function(){
 
             if (menu[i].style.display === "block"){
                     
                   
                   plus[i].classList.remove('active')
                   navbarmaintext[i].classList.remove('active')
                      
 
                   menu[i].style.display = "none";
                   
                   
 }
 

 else {
 
 menu[i].style.display = "block";
 plus[i].classList.add('active')
 navbarmaintext[i].classList.add('active')
 
 
 
 }
 });  
 
 }

}

function subspanexpand(){


  for(let i=0; i<subplus.length; i++) {


       subplus[i].addEventListener("click", function(){
 
             if (submenu[i].style.display === "block"){
                     
                   
                   subplus[i].classList.remove('active')
                   document.getElementsByClassName('productsnav')[i].classList.remove('active')
                   document.getElementsByClassName('productsnavtext')[i].classList.remove('highlight')
                   
                      
 
                   submenu[i].style.display = "none";
                   
 }
 

 else {
 
 submenu[i].style.display = "block";
 subplus[i].classList.add('active')
 document.getElementsByClassName('productsnav')[i].classList.add('active')
 document.getElementsByClassName('productsnavtext')[i].classList.add('highlight');
 
 
 }
 });  
 
 }

}
spanexpand();
subspanexpand();













if (DesktopMediaQuery.matches) {


let headerNavList = document.getElementsByClassName('topnavitem');



for (var i = 0; i < headerNavList.length; i++) { //Iterates through the List Items in the Main Menu

    var li = headerNavList[i]; //Local Variable declared which selects the first element that is hovered over, and makes it 0 in the index?

    li.addEventListener("mouseover", function() {

      this.getElementsByClassName("topnavtext")[0].style.color = "#6b6b6b"; // List Item Text is imported locally
    })

    li.addEventListener("mouseout", function() {

        this.getElementsByClassName("topnavtext")[0].style.color = "#1a6fba"; // List Item Text is imported locally
      })
}



let productNavList = document.getElementsByClassName('productsnav');











for (var i = 0; i < productNavList.length; i++) { //Iterates through the List Items in the Main Menu

    var bi = productNavList[i]; //Local Variable declared which selects the first element that is hovered over, and makes it 0 in the index?
   

    bi.addEventListener("mouseover", function() {

      this.getElementsByClassName("productsnavtext")[0].style.color = "#1a6fba"; // List Item Text is imported locally
    })

    bi.addEventListener("mouseout", function() {

        this.getElementsByClassName("productsnavtext")[0].style.color = "gray"; // List Item Text is imported locally
      })
}

}

//------------------------------------Trigger Mobile Menu on Toggle Button--------------------------------------------//


let togglebutton = document.getElementsByClassName('mobile-nav-toggle')[0]
let navbarLinks = document.getElementsByClassName('headernavigationcontainer')[0]

togglebutton.addEventListener('click', function(){


  

  for (let i = 0; i<document.getElementsByClassName('hamburger-line').length; i++){

    document.getElementsByClassName('hamburger-line')[i].classList.toggle('active')
  }
  
  
  navbarLinks.classList.toggle('active')} 



)





















//--------------------Body is Created-------------------------------------------------//



let overlayLayer = document.createElement('div') //create the overlay blue layer that is triggered when the desktop menu is hovered over
overlayLayer.className = "menuoverlay"
overlayLayer.id = "blueoverlay"
document.body.appendChild(overlayLayer) //appending before main body so that over triggers on top


let controllersDiv = document.createElement('div');         //Creating the <div> Container for the Controllers Section
let controllersDivLeft = document.createElement('div');     //Create Left side <div> for Controllers section
let controllersDivRight = document.createElement('div') ;    //Create Right side <div> for Controllers Section
let controllersHeading = document.createElement('h1')  ;     //Creating the <h1> for Controllers
let controllersDescription = document.createElement('p')  ;   //Creating the <p> tag for Controller Description
let controllersImage = document.createElement ("IMG") ;       //create the controllers image
let controllersButton = document.createElement ("button");

let SensorsDiv = document.createElement('div');         //Creating the <div> Container for the Controllers Section
let SensorsDivLeft = document.createElement('div');     //Create Left side <div> for Controllers section
let SensorsDivRight = document.createElement('div') ;    //Create Right side <div> for Controllers Section
let SensorsHeading = document.createElement('h1')  ;     //Creating the <h1> for Controllers
let SensorsDescription = document.createElement('p')  ;   //Creating the <p> tag for Controller Description
let SensorsImage = document.createElement ("IMG") ;       //create the controllers image
let SensorsButton = document.createElement ("button");




//----------------------------Assigning Classes to created Elements----------------------------------------

controllersDiv.className = "controllersParent";
controllersHeading.className = "controllersHeading hstyles";
controllersDescription.className = "controllersDescription dstyles";
controllersButton.classname = "controllersButton bstyles";


SensorsDiv.className = "SensorsParent";
SensorsHeading.className = "SensorsHeading hstyles";
SensorsDescription.className = "SensorsDescription dstyles";
SensorsButton.classname = "SensorsButton bstyles";


//----------------------------- Adding Elements to created elements----------------------------------------------

controllersHeading.innerText = "Controllers";       //Adding text to the h1 controllers tag
controllersDescription.innerText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.";
controllersImage.setAttribute ("src", "controllers_2.png");
controllersImage.setAttribute ("width", "300");


controllersDiv.style.paddingTop = "5vh"



SensorsHeading.innerText = "Sensors";       //Adding text to the h1 controllers tag
SensorsDescription.innerText = "Browse our collection of Proximity, Photoelectric, Magnetic, Flow, Level, Fiber Optic, Area Sensors & Encoders to meet your sensing & decection applications.";
SensorsImage.setAttribute ("src", "sensors_1.png");
SensorsImage.setAttribute ("width", "300");




//----------------------------- Adding Elements to their respective parents---------------------------------------


controllersDivLeft.appendChild(controllersHeading);     //adding the <h1> and the <p> elements under the <div> like we do in html
controllersDivLeft.appendChild(controllersDescription);
controllersDivRight.appendChild(controllersImage);
controllersDivRight.appendChild(controllersButton);
controllersDiv.appendChild(controllersDivLeft);
controllersDiv.appendChild(controllersDivRight);
document.body.appendChild(controllersDiv);      //adding the main "controllersParent"<div> under the <body>





SensorsDivLeft.appendChild(SensorsHeading);     //adding the <h1> and the <p> elements under the <div> like we do in html
SensorsDivLeft.appendChild(SensorsDescription);
SensorsDivRight.appendChild(SensorsImage);
SensorsDivRight.appendChild(SensorsButton);
SensorsDiv.appendChild(SensorsDivLeft);
SensorsDiv.appendChild(SensorsDivRight);
document.body.appendChild(SensorsDiv); 
//document.body.style.background = "#f8f8f8"




//--------------------------------------------------------------------------------------------------------------

controllersButton.style.width = "100px";
controllersButton.style.height = "30px";
controllersButton.style.borderStyle = "none";
controllersButton.style.backgroundColor =  "#b0282b";

controllersButton.innerText = "View Product Range";
controllersButton.style.color = "#ffffff";



//----------Controllers <div> container styling---------------------//
controllersDiv.style.display = "flex";


SensorsDiv.style.display = "flex";



//--------------------------------------- This section applies the appropriate style attributes to the corresponding class, tag or id names-------------------------

//document.getElementsByClassName/TagName returns an array or a collection of items that contain the specified class or Tag,
//so to make any changes on them whatsoever you need to run a for loop so that you can run through the various entries of that collection/array.
    

function styledescriptions() {
    let desciptionstyling = document.getElementsByClassName('dstyles'); //Returns an Array of elements that have the class of 'dstyles'


    for (i = 0; i < desciptionstyling.length; i++) {
        console.log (desciptionstyling)
        desciptionstyling[i].setAttribute("style", "color: #6b6b6b; font-size: 1.8vw; padding: 0% 15% 4% 15%; margin: 0; font-family: Open Sans, sans-serif; font-weight: 100;");
    }
}

function styleheadings() {
    let headingstyling = document.getElementsByClassName('hstyles'); //Returns an Array of elements that have the class of 'hstyles'


    for (i = 0; i < headingstyling.length; i++) {
        headingstyling[i].setAttribute("style","color: #1a6fba; font-size: 4vw; padding: 4% 0% 0% 15%; margin: 0; font-family: Open Sans, sans-serif; font-weight: 100;");
    }
}



styledescriptions();
styleheadings();


overlayLayer.setAttribute("style"," background-color: #1a6fba;position:absolute; opacity:0;  display:none;  ")









//-------------------------------------------------------------------------------------------------------------------------------






let mobileMediaQuery = window.matchMedia("(max-width:1000px)")



function toggleblueoverlayoffMobile(){

  if (mobileMediaQuery.matches) {
    overlayLayer.style.display = "none";
    overlayLayer.style.width = "0";
    overlayLayer.style.height = "0";

  }

  else overlayLayer.style.display = "block"



}

toggleblueoverlayoffMobile();
mobileMediaQuery.addListener(toggleblueoverlayoffMobile)


function shiftbodybelowMobile(){

  if (mobileMediaQuery.matches) {
    controllersDiv.style.paddingTop = "150px"
  }
}

shiftbodybelowMobile();
mobileMediaQuery.addListener(shiftbodybelowMobile);








let navbar = document.getElementsByClassName('navbarmain');


function desktopNavHoverTriggersBlueOverlay() {

  

  


  

  if (DesktopMediaQuery.matches) {

        for (var i = 0; i < navbar.length; i++) {

         var ci = navbar[i]; 

          ci.addEventListener("mouseover", function() {

            overlayLayer.style.display = "block";
            overlayLayer.style.width = "100vw";
            overlayLayer.style.height = "100vh";
            overlayLayer.style.transitionProperty = "opacity"
            overlayLayer.style.transitionDuration = "0.5s"
            overlayLayer.style.opacity = "0.5" 
            overlayLayer.style.zIndex = "1"
             


          })

    ci.addEventListener("mouseout", function() {

 
          
          //overlayLayer.style.transitionProperty = "display"
          //overlayLayer.style.transitionDuration = "5s"
          overlayLayer.style.opacity = "0" 
          overlayLayer.style.zIndex = "-100"
          //overlayLayer.style.display = "none";
     
         })


    }
  }
  

  
    
}






desktopNavHoverTriggersBlueOverlay()


DesktopMediaQuery.addListener(desktopNavHoverTriggersBlueOverlay)






