document.getElementById('home').addEventListener('click',()=>{
    window.location.href="../HomePage.html"
})

document
.querySelector(".menu-icon")
.addEventListener("click", function () {
  document.querySelector(".chats").classList.toggle("active");
});

// favorite
document.getElementById('favorite').addEventListener('click',()=>{
  window.location.href="../Favorite/favorite.html"
})

// notifications
document.getElementById('bell-fill').addEventListener('click',()=>{
  window.location.href="../Notifications/Notifications.html"
})
