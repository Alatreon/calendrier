function CreateMonthView () 
{
}

CreateMonthView.prototype={
	
	createMonthDaysName : function (i)
	{
			var dayTitle=document.createElement('th');
			dayTitle.setAttribute("id","calendrier-app-day-th-container-"+i)
			dayTitle.setAttribute("class","calendrier-app-day-th-container")
			$("#calendrier-app-day-tr-container-1")[0].appendChild(dayTitle);
			$("#calendrier-app-day-th-container-"+i).text(Self.DataCalendrier.getNameJours(i));
	},

	createMonthsDays : function ()
	{
		var tableCell=1;
		var tableRow=1;
		var dayInCurentMonth=1;
		var realDayInMonthView="";
		var dayInCurentMonthDayClass="";
		var nbFirstDay = Self.DataCalendrier.getFirstDayInMonth(Self.DataCalendrier.currentMonth, Self.DataCalendrier.choosenYear);
		var nbDaysInCurentMonth = Self.DataCalendrier.getDaysInMonth(Self.DataCalendrier.currentMonth, Self.DataCalendrier.choosenYear);
		var nbDaysInLastMonth = Self.DataCalendrier.getDaysInMonth(Self.DataCalendrier.currentMonth-1,Self.DataCalendrier.choosenYear);
		var dayDisplayed=nbDaysInLastMonth-nbFirstDay+2;
		if(nbDaysInLastMonth-nbFirstDay+2==32){console.log('ezqsdsdfqsdfqsf');}/*Quand les premieres lignes sont bonnent*/

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
					this.createMonthDaysName(y+1);
				}
				else
				{

					if(tableCell==nbFirstDay || dayInCurentMonth>nbDaysInCurentMonth)
					{
						dayInCurentMonth=1;
						if(tableCell>27)
						{
							realDayInMonthView="";
						}
						else
						{
							realDayInMonthView="calendrier-app-day-real-days-in-month-td-container";
							var NbLastDay=dayDisplayed;
						}

						dayDisplayed=1;
					}

					if(tableCell>=nbFirstDay&&(tableCell-nbFirstDay) < NbLastDay)
					{	
						dayInCurentMonthDayClass="calendrier-app-day-real-days-in-month-td-container-"+dayDisplayed;
					}
					else
					{
						dayInCurentMonthDayClass="";
					}

					var day = document.createElement('td');
					day.setAttribute("id","calendrier-app-day-td-container-"+tableCell);
					day.setAttribute("class","calendrier-app-day-td-container "+realDayInMonthView+" "+dayInCurentMonthDayClass);
					$("#calendrier-app-day-tr-container-"+tableRow)[0].appendChild(day);

					var day = document.createElement('div');
					day.setAttribute("id","calendrier-app-day-month-day-name-container-"+tableCell);
					$("#calendrier-app-day-td-container-"+tableCell)[0].appendChild(day);
					$("#calendrier-app-day-month-day-name-container-"+tableCell).text(dayDisplayed);

					tableCell++;
					dayDisplayed++;
				}
				//console.log('dayInCurentMonth='+dayInCurentMonth+' | '+tableCell+'=='+nbFirstDay +'||'+ a+'=='+nbDaysInCurentMonth);
				dayInCurentMonth++;
			}
			tableRow++;
		}
	},

	createMonthTitle : function ()
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
		$("#calendrier-app-table-title-container").text(Self.DataCalendrier.getNameMonth(Self.DataCalendrier.currentMonth)+' ('+Self.DataCalendrier.currentMonth+') | '+	/*this.choosenYear*/ Self.DataCalendrier.choosenYear);
		$("#calendrier-app-table-header-right-arrow-container").text(">");
	},

	createCliqueArrows : function ()
	{
		self=this;

		Self.CreateLitView.createChooseCtaData("#calendrier-app-table-title-container");

		$("#calendrier-app-table-header-left-arrow-container")[0].addEventListener("click", function ()
		{
			Self.removeAll();
				$('div table').remove();
				$('div #calendrier-app-table-header-container').remove();
				Self.DataCalendrier.currentMonth--;
				if(Self.DataCalendrier.currentMonth<1)
				{
					Self.DataCalendrier.currentMonth=12;
					Self.DataCalendrier.choosenYear--;
				}
				Self.createAll();

			}, false);	

		$("#calendrier-app-table-header-right-arrow-container")[0].addEventListener("click", function (){

			$('div table').remove();
			$('div #calendrier-app-table-header-container').remove();
			Self.removeAll();

			Self.DataCalendrier.currentMonth++;

			if(Self.DataCalendrier.currentMonth>12)
			{
				Self.DataCalendrier.currentMonth=1;
				Self.DataCalendrier.choosenYear++;
			}

			Self.createAll();

		}, false);
	}
}