document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const section = document.querySelector(this.hash);
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});
