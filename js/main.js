choosenMonth=1;

//renvoie le nombre de jours dans un moi d'une annee ex:getDaysInMonth(12,2000)
function getDaysInMonth(month,year)
{
	return (new Date(Date.parse(((month%12)+1).toString() + "/01/" + year)-86400000)).getDate();
}
//renvoie le premier jour d'un moi d'une annee/*(1-12),9999*/ ex:getFirstDayInMonth(12,2000)
function getJours(i)
{
	switch (i)
	{
		case 1:
			day='Lundi';
		break;
		case 2:
			day='Mardi';
		break;
		case 3:
			day='Mercredi';
		break;
		case 4:
			day='Jeudi';
		break;
		case 5:
			day='Vendredi';
		break;
		case 6:
			day='Samedi';
		break;
		case 7:
			day='Dimanche';
		break;
	}
	return day;
}
function getFirstDayInMonth(whichMonth,Ofyear)
{
	// var day

	// if(whichMonth>12 || whichMonth<1 )
	// {
	// 	day='Undefined';
	// 	whichMonth=1;
	// }
	// if(day!='Undefined')
	// {
	// }
	getJours((new Date(Ofyear+'-'+whichMonth+'-'+1)).getDay());
	return Day={nbDay:(new Date(Ofyear+'-'+whichMonth+'-'+1)).getDay(),nameDay:day};
}
//le tableau commence Lundi et fini le dimanche, il est statique et il comporte 6 lignes de jours en hauteur il comporte donc 42 jours
//Le mois sous forme de jour en francais:
console.log(getFirstDayInMonth(12,9999).nbDay);
//L'incrementation des jours du mois dans le tableau debutera grace a ce numero de celule :
console.log(getFirstDayInMonth(03,2016).nameDay);
//renvoie le nombre de jours dans une annee
console.log(getDaysInMonth(03,2016));

function createMonthsWeekDay (i)
{
		var dayTitle=document.createElement('th');
		dayTitle.setAttribute("id","calendrier-app-day-th-container-"+i)
		$("#calendrier-app-day-tr-container-1")[0].appendChild(dayTitle);
		$("#calendrier-app-day-th-container-"+i).text(getJours(i));
}

function createMonthsDays(nbFirdtDay,nbDaysInMonth,nbDaysInLastMonth)//refactoryser cette fonction separer le table et les tr calendarStructure
{
	var a=1;	
	var b=1;
	var c=1;
	var d=nbDaysInLastMonth-nbFirdtDay+2;

	var table = document.createElement('table');	
	table.setAttribute("class","calendrier-app-days-table-container");
	$('.calendrier-app-container')[0].appendChild(table);

	for(var i=0; i<7; i++)
	{
		var tr = document.createElement('tr');
		tr.setAttribute("id","calendrier-app-day-tr-container-"+b);
		$('.calendrier-app-days-table-container')[0].appendChild(tr);


		for(var y=0; y<7; y++)
		{

			if(b==1)
			{
				createMonthsWeekDay(a);
			}
			else
			{
				var day = document.createElement('td');
				day.setAttribute("id","calendrier-app-day-td-container-"+a);
				day.setAttribute("class","calendrier-app-day-td-container");
				day.style.width='100px';
				day.style.height='100px';
				$("#calendrier-app-day-tr-container-"+b)[0].appendChild(day);

				if(a==nbFirdtDay || c>nbDaysInMonth)
				{
					c=1;
					d=1;
				}
				$("#calendrier-app-day-td-container-"+a).text(d);
			}
			//console.log('c='+c+' | '+a+'=='+nbFirdtDay +'||'+ a+'=='+nbDaysInMonth);
			if(b==1)
			{
			}
			else{
				a++;}
			c++;
			d++;
		}
		b++;
	}
}
createMonthsDays(getFirstDayInMonth(choosenMonth,2016).nbDay, getDaysInMonth(choosenMonth,2016), getDaysInMonth(choosenMonth-1,2016));