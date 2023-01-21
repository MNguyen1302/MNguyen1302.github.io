const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu-item");
const btnContact = document.querySelector(".btn-contact");

window.ityped.init(document.querySelector('.third-text'),{
    strings: ['My Nguyen','Web Developer'],
    loop: true
})

window.addEventListener("scroll", () => {
    let sectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            sectionId = section.getAttribute("id");
        }
    });

    menuItems.forEach(item => {
        item.classList.remove("active");
        if(item.classList.contains(sectionId)) {
            item.classList.add("active");
        }
    })
});

menuItems.forEach((item, index) => {
    item.onclick = function() {
        const section = sections[index];
        section.scrollIntoView({ behavior: "smooth" });
    }
})

function toContact() {
    const sectionContact = document.getElementById("contact");
    btnContact.onclick = function() {
        sectionContact.scrollIntoView({ behavior: "smooth" });
    }
}
toContact();