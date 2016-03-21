choosenMonth=2;

//renvoie le nombre de jours dans un moi d'une annee ex:getDaysInMonth(12,2000);
function getDaysInMonth(month,year)
{
	return (new Date(Date.parse(((month%12)+1).toString() + "/01/" + year)-86400000)).getDate();
}
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
function getMonth(i)
{
	switch (i)
	{
		case 1:
			month='Janvier';
		break;
		case 2:
			month='Février';
		break;
		case 3:
			month='Mars';
		break;
		case 4:
			month='Avril';
		break;
		case 5:
			month='Mai';
		break;
		case 6:
			month='Juin';
		break;
		case 7:
			month='Juillet';
		break;
		case 8:
			month='Août';
		break;
		case 9:
			month='Septembre';
		break;
		case 10:
			month='Octobre';
		break;
		case 11:
			month='Novembre';
		break;
		case 12:
			month='Décembre';
		break;
	}
	return month;
}
//renvoie le premier jour d'un moi d'une annee/*(1-12),9999*/ ex:getFirstDayInMonth(12,2000);
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

function createMonthDaysName (i)
{
		var dayTitle=document.createElement('th');
		dayTitle.setAttribute("id","calendrier-app-day-th-container-"+i)
		dayTitle.setAttribute("class","calendrier-app-day-th-container")
		$("#calendrier-app-day-tr-container-1")[0].appendChild(dayTitle);
		$("#calendrier-app-day-th-container-"+i).text(getJours(i));
}

function createMonthsDays(nbFirdtDay,nbDaysInCurentMonth,nbDaysInLastMonth)//refactoryser cette fonction separer le table et les tr calendarStructure
{
	var tableCell=1;
	var tableRow=1;
	var dayInCurentMonth=1;
	var sevenMonthDaysName=1;
	var dayInCurentMonthClass="";
	var dayDisplayed=nbDaysInLastMonth-nbFirdtDay+2;

	var table = document.createElement('table');	
	table.setAttribute("class","calendrier-app-days-table-container");
	$('.calendrier-app-container')[0].appendChild(table);

	for(var i=0; i<7; i++)
	{
		var tr = document.createElement('tr');
		tr.setAttribute("id","calendrier-app-day-tr-container-"+tableRow);
		tr.setAttribute("class","calendrier-app-day-tr-container");
		$('.calendrier-app-days-table-container')[0].appendChild(tr);


		for(var y=0; y<7; y++)
		{

			if(tableRow==1)
			{
				createMonthDaysName(sevenMonthDaysName);
				sevenMonthDaysName++;
			}
			else
			{

				if(tableCell==nbFirdtDay || dayInCurentMonth>nbDaysInCurentMonth)
				{
					dayInCurentMonth=1;
					if(tableCell>27){dayInCurentMonthClass="";
				}
				else{
					dayInCurentMonthClass="test-test-test";}
					dayDisplayed=1;
				}
				var day = document.createElement('td');
				day.setAttribute("id","calendrier-app-day-td-container-"+tableCell);
				day.setAttribute("class","calendrier-app-day-td-container "+dayInCurentMonthClass);
				$("#calendrier-app-day-tr-container-"+tableRow)[0].appendChild(day);
				$("#calendrier-app-day-td-container-"+tableCell).text(dayDisplayed);
			
				tableCell++;
				dayDisplayed++;
			}
			//console.log('dayInCurentMonth='+dayInCurentMonth+' | '+tableCell+'=='+nbFirdtDay +'||'+ a+'=='+nbDaysInCurentMonth);
			dayInCurentMonth++;
		}
		tableRow++;
	}
}

createMonthsDays(getFirstDayInMonth(choosenMonth,2016).nbDay, getDaysInMonth(choosenMonth,2016), getDaysInMonth(choosenMonth-1,2016));

var titreCalendrierContain = document.createElement("th");calendrierAppContainer;
titreCalendrierContain.setAttribute("id","calendrier-app-table-title-container");
titreCalendrierContain.setAttribute("colspan",7);
var calendrierAppContainer = document.getElementsByClassName("calendrier-app-days-table-container")[0];
calendrierAppContainer.insertBefore(titreCalendrierContain, calendrierAppContainer.childNodes[0]);
$("#calendrier-app-table-title-container").text(getMonth(choosenMonth));
