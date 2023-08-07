function burger_menu()
{
	let navbar = document.getElementById("navbar");
	let strath = document.getElementById("strath-logo");
	if (navbar.classList.contains("open"))
	{
		//strath.style.display = "none";
		navbar.classList.remove("open");
		strath.classList.remove("open");
	}
	else
	{
		//strath.style.display = "block";
		navbar.classList.add("open");
		strath.classList.add("open");
  	}
}
