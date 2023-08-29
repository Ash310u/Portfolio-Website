let mouseCursor = document.querySelector('.cursor')
                                    // here e is and event
window.addEventListener('mousemove', (e) => {
    mouseCursor.style.top = `${e.pageY}px`;
    mouseCursor.style.left = `${e.pageX}px`;
})

//    Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
function myFunction() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        let x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
}