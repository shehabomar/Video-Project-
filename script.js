// Array.from(feature from ES6)
let sliderImages = Array.from(document.querySelectorAll(".slider-container video"));

let slideCount = sliderImages.length;
//set current slide
let currentSlide =1;
//slide number in string element
let slideNumberElement = document.getElementById('slide-number');
//prevoius and next button
let nextButton = document.getElementById('next'),
    prevButton = document.getElementById('prev');

nextButton.onclick =nextSlide;
prevButton.onclick =prevSlide;


//create the main Ul Element
let paginationElement = document.createElement('ul');

paginationElement.setAttribute('id', 'pagination-ul');

//create list itemms based on slides count

for(let i=1 ; i<=slideCount ;i++ ){
    //createtheli
    let paginationItem = document.createElement('li');
    // Set Custom Atrribute
    paginationItem.setAttribute('data-index', i);
    //Set item content
    paginationItem.appendChild(document.createTextNode(i));
    // Append Items to the ul list
    paginationElement.appendChild(paginationItem);

}
// Add the created UL Element To the page
document.getElementById('indicators').appendChild(paginationElement);

//Get the new created ul
let paginationCreatedUl = document.getElementById('pagination-ul');
//get pagination items
let paginationBullets= Array.from(document.querySelectorAll("#pagination-ul li"));
//loop through bullets items
for (let i=0;i<paginationBullets.length ; i++){
    paginationBullets[i].onclick = function (){
        currentSlide=parseInt(this.getAttribute('data-index'));
        theChecker();

    }
}
// trigger the checker function 
theChecker();
function nextSlide(){
    if(nextButton.classList.contains("disabled")){
        // do nothing
        return false;
    }else{
        currentSlide++
        theChecker();

    }
};
function prevSlide(){
    if(prevButton.classList.contains("disabled")){
        //do nothing
    }else{
        currentSlide--
        theChecker();
    }

};

//create the checker function
function theChecker(){
    //set the slide number
    
    slideNumberElement.textContent = "#" + (currentSlide) +" of " +(slideCount);
    
    //remove all active class
    
    removeAllActive();
    
    //set  active class on current slide
    
    sliderImages[currentSlide - 1].classList.add('active');
    
    // set active class on current pagination item
    
    paginationCreatedUl.children[currentSlide - 1].classList.add('active')
    
    //check if the current slide is the first

    if (currentSlide == 1){
        //Add disabled class on previous button
        prevButton.classList.add('disabled');
    }else {
        //remove disabled class form previous button
        prevButton.classList.remove('disabled');

    }

    //check if the current slide is the last

    if (currentSlide == slideCount){
        //Add disabled class on next button
        nextButton.classList.add('disabled');
    }else {
        //remove disabled class form next button
        nextButton.classList.remove('disabled');
    }
};

//remove all active class fromimages and paginations
function removeAllActive(){

    // loop through images
    sliderImages.forEach(function(video){
        video.classList.remove('active');
    })

//loop through pagination Bullets
    paginationBullets.forEach(function (bullet){
        bullet.classList.remove('active');
 
})
}

document.addEventListener('DOMContentLoaded', function() {
    let video = document.getElementById('video-showcase');
    let victum1 = document.getElementById('victum1');

    if (video && victum1) {
        victum1.addEventListener('click', function() {
            // Set the desired time (in seconds) here
            let desiredTime = 5; 
            if (desiredTime <= video.duration) {
                video.currentTime = desiredTime;
                console.log('Video currentTime set to', desiredTime, 'seconds');
            } else {
                console.log('Desired time exceeds video duration');
            }
        });
    } else {
        if (!video) console.error('Video element not found');
        if (!victum1) console.error('Button element not found');
    }
});

