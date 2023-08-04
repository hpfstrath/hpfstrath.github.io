function burger_menu()
{
	let navbar = document.getElementById("navbar");
	let strath = document.getElementById("strath-logo");
	if (navbar.style.height === "auto")
	{
		strath.style.display = "none";
		navbar.style.height = Math.max(...[...navbar.children].map(x => x.clientHeight)) + "px";
	}
	else
	{
		navbar.style.height = "auto";
		strath.style.display = "block";
  	}
}

let navbar = document.getElementById("navbar");
navbar.style.height = Math.max(...[...navbar.children].map(x => x.clientHeight)) + "px";
