window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")

    navbar.classList.toggle("sticky", window.scrollY > 0);


    if(window.scrollY >= menu.offsetTop) {
        if(!start) {
            nums.forEach(num => {
                startCount(num)
            });
        }
        start = true;
    }
});

