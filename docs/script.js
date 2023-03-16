function toggleSect(sect)
{
	var sib = sect.nextElementSibling;
	var icon = sect.querySelector('.sectI');
	if(sib.className=="closed")
	{
		sib.className="open";
		icon.src="minus.svg"
	}
	else
	{
		sib.className="closed";
		icon.src="plus.svg"
	}
}