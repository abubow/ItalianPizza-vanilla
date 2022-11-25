//function to change background color of navbar on scroll
const nav = document.getElementById("navbar");
function changeNavColor() {
	if (
		document.body.scrollTop > 50 ||
		document.documentElement.scrollTop > 50
	) {
		nav.style.backgroundColor = "rgba(32,32,32,0.95)";
        nav.style.backdropFilter = "blur(50px)";
        nav.style.padding = "1vh 2vw";
	} else {
		nav.style.backgroundColor = "transparent";
        nav.style.padding = "5vh 2vw";
        nav.style.backdropFilter = "blur(0px)";
	}
}
window.addEventListener("scroll", changeNavColor);
