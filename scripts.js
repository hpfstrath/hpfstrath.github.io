function burger_menu()
{
	let navbar = document.getElementById("navbar");
	let strath = document.getElementById("strath-logo");
	if (navbar.style.height === "auto")
	{
		strath.style.display = "none";
		navbar.style.height = "91px";
	}
	else
	{
		navbar.style.height = "auto";
		strath.style.display = "block";
  	}
}
