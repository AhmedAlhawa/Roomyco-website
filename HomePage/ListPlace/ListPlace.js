
    //  blurEffect for Navbar
    window.addEventListener('scroll', function(e) {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 5) { // Change 50 to whatever pixel value you prefer
            navbar.classList.add('blur-effect');
        } else {
            navbar.classList.remove('blur-effect');
        }
    });
    // Swiper
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  
    //   Scrolling
    document.addEventListener('DOMContentLoaded', () => {
        const tagLinks = document.querySelectorAll('.btn');
        
        tagLinks.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                
                // Get the target div ID
                const targetId = link.getAttribute('href').slice(1);
                
                // Scroll to the target div
                scrollToDiv(targetId);
            });
        });
    
        function scrollToDiv(id) {
            const targetDiv = document.getElementById(id);
            
            if (targetDiv) {
                // Smooth scroll to the div
                smoothScroll(targetDiv.offsetTop);
                
            }
        }
    
        function smoothScroll(offset) {
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    
     
    });
    
// chat
const chat = document.getElementById('chat');
chat.addEventListener("click",()=>{
    window.location.href="../Chat/Chat.html"
})
// Home
// Home
document.getElementById('home').addEventListener('click',()=>{
    window.location.href="../HomePage.html"
})