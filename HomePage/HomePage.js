
//  blurEffect for Navbar
window.addEventListener('scroll', function(e) {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 5) { // Change 50 to whatever pixel value you prefer
        navbar.classList.add('blur-effect');
    } else {
        navbar.classList.remove('blur-effect');
    }
});

// image swiper
var swiper1 = new Swiper(".slide-container.slide-container2", {
    slidesPerView: 3,
    centerSlide: true,
    spaceBetween: 30,
    grabCursor:true,
  //   fade:true,
  //   pagination: {
  //     el: ".swiper-pagination",
      // type: "fraction",
  // dynamicBullets:true
  //   },
  // loop:true,
    navigation: {
      nextEl: ".swiper-navBtn1.swiper-button-next",
      prevEl: ".swiper-navBtn1.swiper-button-prev",
    },
    breakpoints:{
      0:{
          slidesPerView:1
      },
      520:{
          slidesPerView:2
      },
      768:{
          slidesPerView:3
      },
      1000:{
          slidesPerView:3
      },
    }
  });

// Get the swiper instance
var swiperInstance = swiper1;

// Add event listener to the next button
document.querySelector('.next1').addEventListener('click', function() {
    var currentIndex = swiper1.activeIndex;
    var newIndex = currentIndex + 3; // Move 3 slides forward
    swiper1.slideTo(newIndex);
});

// Add event listener to the prev button
document.querySelector('.prev1').addEventListener('click', function() {
    var currentIndex = swiper1.activeIndex;
    var newIndex = currentIndex - 3; // Move 3 slides backward
    swiper1.slideTo(newIndex);
});

  // Card Swiper
  var swiper = new Swiper(".slide-container.slide-container1", {
    slidesPerView: 3,
    centerSlide: true,
    spaceBetween: 30,
    fade:true,
    navigation: {
      nextEl: ".swiper-navBtn2.swiper-button-next",
      prevEl: ".swiper-navBtn2.swiper-button-prev",
    },
    breakpoints:{
      0:{
          slidesPerView:1
      },
      520:{
          slidesPerView:2
      },
      768:{
          slidesPerView:3
      },
      1000:{
          slidesPerView:4
      },
    }
  });

// heart fill 
const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    if(icon.classList.contains("far")){
        icon.classList.remove("far");
        icon.classList.add("fas")
    }else{
        icon.classList.remove("fas");
        icon.classList.add("far");
    }  });
});
// Available roommate
const panels = document.querySelectorAll('.panel');

function selectItem(){
    removeActiveClasses();
    this.classList.add('active')
}
function removeActiveClasses() {
    panels.forEach((item)=>item.classList.remove('active'))
}
panels.forEach(item=>item.addEventListener('mouseenter',selectItem));


// chat
const chat = document.getElementById('chat');
chat.addEventListener("click",()=>{
    window.location.href="Chat/Chat.html"
})

// favorite
document.getElementById('favorite').addEventListener('click',()=>{
    window.location.href="./Favorite/favorite.html"
  })
  
// notifications
 document.getElementById('notifications').addEventListener('click',()=>{
    window.location.href="Notifications/Notifications.html"
})
// Room Select 
const cards = document.querySelectorAll('.details')

cards.forEach(card => {
    card.style.cursor="pointer"
    card.addEventListener("click", () => {
        window.location.href = "ListPlace/listPlace.html";
    });
});

// Roommate Select
const roommates = document.querySelectorAll('.panel');
roommates.forEach(item=>item.addEventListener('click',()=>{
    window.location.href="SeekerRoommate/SeekerRoommate.html"
}));

// Ahmed Abu Alhawa 
const allNamesT1 = document.querySelectorAll(".container1 .swiper-slide .t1")
const allNamesT2 = document.querySelectorAll(".container1 .swiper-slide .t2")
const allImgT1 = document.querySelectorAll(".container1 .swiper-slide .imt-1")
const allImgT2 = document.querySelectorAll(".container1 .swiper-slide .imt-2")
const next = document.getElementById('next')
const prev = document.getElementById('prev')
next.addEventListener("click",()=>{
    allNamesT2.forEach(item=>{
        item.style.transform="translateX(0px)"
    })
    allImgT2.forEach(item=>{
        item.style.transform="translateX(0px)"
    })
    allNamesT1.forEach(item=>
        item.style.transform="translateX(-200px)"
    )
    allImgT1.forEach(item=>
        item.style.transform="translateX(-200px)"
    )
})
prev.addEventListener("click",()=>{
    allNamesT2.forEach(item=>{
        item.style.transform="translateX(300px)"
    })
    allImgT2.forEach(item=>{
        item.style.transform="translateX(300px)"
    })
    allNamesT1.forEach(item=>
        item.style.transform="translateX(0px)"
    )
    allImgT1.forEach(item=>
        item.style.transform="translateX(0px)"
    )
  
   
})