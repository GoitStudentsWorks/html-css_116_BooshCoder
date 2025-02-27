document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector(".mobile-menu-open");
    const closeBtn = document.querySelector(".mobile-menu-close");
    const overlay = document.querySelector(".overlay");
    const menu = document.querySelector(".mobile-menu");

    openBtn.addEventListener("click", () => {
        overlay.classList.add("is-open");
        menu.classList.add("is-open");
    });

    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("is-open");
        menu.classList.remove("is-open");
    });

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.classList.remove("is-open");
            menu.classList.remove("is-open");
        }
    });
});