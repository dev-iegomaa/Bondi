window.addEventListener("load", function () {
    const btn = this.document.getElementById("scroll");
    this.window.addEventListener("scroll", function () {
        if (this.window.scrollY >= 1500) {
            btn.style.bottom = "25px";
        } else {
            btn.style.bottom = "-60px";
        }
    });
});
