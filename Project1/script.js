function closeMenu()
{
	let container = document.querySelector('.container')
	container.classList.toggle('closed')

	let sub = document.querySelector(".sub_menu_tasks")
	if(sub.classList.contains('animation'))
	{
		sub.classList.remove('animation')
		setTimeout(() => sub.classList.remove('active'), 700);
	}
}

function subMenu()
{
	let sub = document.querySelector(".sub_menu_tasks")
	

	if(sub.classList.contains('animation'))
	{
		sub.classList.remove('animation')
		setTimeout(() => sub.classList.remove('active'), 700);
	}else
	{
		sub.classList.toggle('active')
		setTimeout(() => sub.classList.toggle('animation'), 500);
	}
}