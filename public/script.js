let navMenu = document.getElementById('navMenu')
let closeNavBar = document.getElementById('closeNavBar')
    
closeNavBar.addEventListener("click",function(){
    navMenu.style.top = '-900px'
})

document.querySelector('.custom-element').addEventListener('click', function(event) {
    const element = document.querySelector('.custom-element');
    const rect = element.getBoundingClientRect();
    
    // Define the approximate dimensions of the ::after pseudo-element
    const afterWidth = 50;  // Adjust as needed
    const afterHeight = 20; // Adjust as needed
    const afterLeft = rect.left + rect.width - afterWidth;
    const afterTop = rect.top + rect.height - afterHeight;
  
    // Check if the click is within the bounds of the ::after element
    if (event.clientX >= afterLeft && event.clientX <= afterLeft + afterWidth &&
        event.clientY >= afterTop && event.clientY <= afterTop + afterHeight) {
        navMenu.style.top = '0px'
        
    }
  });
console.log(navMenu);
