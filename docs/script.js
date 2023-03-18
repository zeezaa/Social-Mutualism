function checkDates()
{
	var checks = document.getElementsByClassName('checkmark');
	for(var i = 0; i < checks.length; ++i)
	{
		var ISO = new Date(checks[i].dataset.modified);
		var today = new Date();
		if(today.getTime() > ISO.getTime() + 1209600000) //2 weeks in ms
		{
			checks[i].innerHTML="&#x2718;";
			checks[i].className="xmark";
		}
	}
}

function toggleSect(sect)
{
	var sib = sect.nextElementSibling;
	if(sib.className=="closed")
	{
		sib.className="open";
		sect.querySelector('.sectI').src="minus.svg";
	}
	else
	{
		sib.className="closed";
		sect.querySelector('.sectI').src="plus.svg";
	}
}