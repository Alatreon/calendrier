choosenMonth=5;
choosenYear=2017;


//renvoie le nombre de jours dans un moi d'une annee ex:getDaysInMonth(12,2000);
function getDaysInMonth(month,year)
{
	return (new Date(Date.parse(((month%12)+1).toString() + "/01/" + year)-86400000)).getDate();
}

function getJours(i)
{
	if(i==0){i=1;}
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
	getJours((new Date(Ofyear+'-'+whichMonth+'-'+1)).getDay());
	if( (new Date(Ofyear+'-'+whichMonth+'-'+1)).getDay()==0 ){ return 7 }
	else { return (new Date(Ofyear+'-'+whichMonth+'-'+1)).getDay();}
}

function createMonthDaysName (i)
{
		var dayTitle=document.createElement('th');
		dayTitle.setAttribute("id","calendrier-app-day-th-container-"+i)
		dayTitle.setAttribute("class","calendrier-app-day-th-container")
		$("#calendrier-app-day-tr-container-1")[0].appendChild(dayTitle);
		$("#calendrier-app-day-th-container-"+i).text(getJours(i));
}

function createMonthsDays(nbFirstDay,nbDaysInCurentMonth,nbDaysInLastMonth)//refactoryser cette fonction separer le table et les tr calendarStructure
{
	var tableCell=1;
	var tableRow=1;
	var dayInCurentMonth=1;
	var sevenMonthDaysName=1;
	var dayInCurentMonthClass="";
	var dayDisplayed=nbDaysInLastMonth-nbFirstDay+2;
	if(nbDaysInLastMonth-nbFirstDay+2==32){console.log('ezqsdsdfqsdfqsf');}

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

				if(tableCell==nbFirstDay || dayInCurentMonth>nbDaysInCurentMonth)
				{
					dayInCurentMonth=1;
					if(tableCell>27)
					{
						dayInCurentMonthClass="";
					}
					else
					{
						dayInCurentMonthClass="test-test-test";
					}

					dayDisplayed=1;
				}
					console.log('testttt'+dayDisplayed);
				var day = document.createElement('td');
				day.setAttribute("id","calendrier-app-day-td-container-"+tableCell);
				day.setAttribute("class","calendrier-app-day-td-container "+dayInCurentMonthClass);
				$("#calendrier-app-day-tr-container-"+tableRow)[0].appendChild(day);
				$("#calendrier-app-day-td-container-"+tableCell).text(dayDisplayed);
			
				tableCell++;
				dayDisplayed++;
			}
			//console.log('dayInCurentMonth='+dayInCurentMonth+' | '+tableCell+'=='+nbFirstDay +'||'+ a+'=='+nbDaysInCurentMonth);
			dayInCurentMonth++;
		}
		tableRow++;
	}
}

function createMonthTitle(choosenMonth)//refactoryser cette fonction separer le table et les tr calendarStructure
{
	var titreCalendrierContain = document.createElement("div");
	titreCalendrierContain.setAttribute("id","calendrier-app-table-header-container");
	var calendrierAppContainer = document.getElementsByClassName("calendrier-app-container")[0];
	calendrierAppContainer.insertBefore(titreCalendrierContain, calendrierAppContainer.childNodes[0]);

	var leftArrowContainer = document.createElement("div");
	leftArrowContainer.setAttribute("id","calendrier-app-table-header-left-arrow-container");
	$("#calendrier-app-table-header-container")[0].appendChild(leftArrowContainer);

	var titreCalendrierContain = document.createElement("div");
	titreCalendrierContain.setAttribute("id","calendrier-app-table-title-container");
	$("#calendrier-app-table-header-container")[0].appendChild(titreCalendrierContain);

	var rightArrowContainer = document.createElement("div");
	rightArrowContainer.setAttribute("id","calendrier-app-table-header-right-arrow-container");
	$("#calendrier-app-table-header-container")[0].appendChild(rightArrowContainer);

	$("#calendrier-app-table-header-left-arrow-container").text("<");
	$("#calendrier-app-table-title-container").text(getMonth(choosenMonth)+' ('+choosenMonth+') | '+
choosenYear);
	$("#calendrier-app-table-header-right-arrow-container").text(">");
}

function createCliqueArrows (choosenMonth)
{

	$("#calendrier-app-table-header-left-arrow-container")[0].addEventListener("click", function (){
		$('div table').remove();
		$('div #calendrier-app-table-header-container').remove();
		choosenMonth--;
		if(choosenMonth<1){choosenMonth=12;
choosenYear--}
		createAll(choosenMonth);

		}, false);	

	$("#calendrier-app-table-header-right-arrow-container")[0].addEventListener("click", function (){

		$('div table').remove();
		$('div #calendrier-app-table-header-container').remove();

		choosenMonth++;
		if(choosenMonth>12){choosenMonth=1;
choosenYear++;}

		createAll(choosenMonth);

	}, false);
}

function createAll (choosenMonth)
{
	createMonthsDays(getFirstDayInMonth(choosenMonth,choosenYear), getDaysInMonth(choosenMonth,choosenYear), getDaysInMonth(choosenMonth-1,choosenYear));
	createMonthTitle(choosenMonth);
	createCliqueArrows(choosenMonth);
}

createAll(choosenMonth);
