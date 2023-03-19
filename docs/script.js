function checkDates()
{
	var today = Date.now();
	var checks = document.querySelectorAll('.loadmark');
	for(var i = 0; i < checks.length; ++i)
	{
		var ISO = new Date(checks.item(i).dataset.modified);
		var ISOms = ISO.getTime();
		if(today - ISOms < 432000000) //5 days
		{
			checks[i].innerHTML="NEW ★";
			checks[i].className="newmark";
		}
		else if(today - ISOms < 1209600000) //2 weeks
		{
			checks[i].innerHTML="OK ✔";
			checks[i].className="checkmark";
		}
		else if(today - ISOms < 2629746000) //1 month
		{
			checks[i].innerHTML="OLD ✘";
			checks[i].className="xmark";
		}
		else
		{
			checks[i].innerHTML="DED 💀";
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