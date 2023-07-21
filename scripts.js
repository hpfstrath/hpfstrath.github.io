function burger_menu() {
	let navbar = document.getElementById("navbar");
	let strath = document.getElementById("strath-logo");
	if (navbar.style.height === "auto")
	{
		navbar.style.height = "73px";
		strath.style.display = "none";
	}
	else
	{
		navbar.style.height = "auto";
		strath.style.display = "block";
  	}
}
