function CreateWeekView () 
{
	this.numeroDeLigne;
}

CreateWeekView.prototype=
{

	createWeekDaysName : function (i)
	{
		var dayTitle=document.createElement('th');
		dayTitle.setAttribute("id","calendrier-app-week-day-th-container-"+i)
		dayTitle.setAttribute("class","calendrier-app-week-day-th-container")
		$("#calendrier-app-week-day-tr-container-1")[0].appendChild(dayTitle);
		$("#calendrier-app-week-day-th-container-"+i).text(Self.DataCalendrier.getNameJours(i));
	},

	createWeekDays : function (nbFirstDay,nbDaysInLastMonth,numeroDeLigne)
	{
		var tableCell=1;
		var tableRow=1;
		var dayInCurentMonth=1;
		var sevenWeekDaysName=1;
		var dayInCurentMonthClass="";
		var dayDisplayed=this.testTestTest(
			nbFirstDay,
			Self.DataCalendrier.getDaysInMonth
			(
				calendrier.DataCalendrier.currentMonth,
				calendrier.DataCalendrier.choosenYear
			),
			nbDaysInLastMonth,
			numeroDeLigne);
		
		//if(nbDaysInLastMonth-nbFirstDay+2==32){console.log('ezqsdsdfqsdfqsf');}

		var table = document.createElement('table');	
		table.setAttribute("class","calendrier-app-days-table-container");
		$('.calendrier-app-container')[0].appendChild(table);

		for(var i=0; i<2; i++)
		{
			var tr = document.createElement('tr');
			tr.setAttribute("id","calendrier-app-week-day-tr-container-"+tableRow);
			tr.setAttribute("class","calendrier-app-week-day-tr-container");
			$('.calendrier-app-days-table-container')[0].appendChild(tr);


			for(var y=0; y<7; y++)
			{

				if(tableRow==1)
				{
					this.createWeekDaysName(y+1);
				}

				else
				{
					var day = document.createElement('td');
					day.setAttribute("id","calendrier-app-week-day-td-container-"+tableCell);
					day.setAttribute("class","calendrier-app-week-day-td-container ");
					$("#calendrier-app-week-day-tr-container-"+tableRow)[0].appendChild(day);
					$("#calendrier-app-week-day-td-container-"+tableCell).text(dayDisplayed[y]);
				
					tableCell++;
				}
				//console.log('dayInCurentMonth='+dayInCurentMonth+' | '+tableCell+'=='+nbFirstDay +'||'+ a+'=='+nbDaysInCurentMonth);
				dayInCurentMonth++;
			}
			tableRow++;
		}
	},

	createWeekTitle : function ()
	{
		var titreCalendrierContain = document.createElement("div");
		titreCalendrierContain.setAttribute("id","calendrier-app-week-table-header-container");
		var calendrierAppContainer = document.getElementsByClassName("calendrier-app-container")[0];
		calendrierAppContainer.insertBefore(titreCalendrierContain, calendrierAppContainer.childNodes[0]);

		var leftArrowContainer = document.createElement("div");
		leftArrowContainer.setAttribute("id","calendrier-app-week-table-header-left-arrow-container");
		$("#calendrier-app-week-table-header-container")[0].appendChild(leftArrowContainer);

		var titreCalendrierContain = document.createElement("div");
		titreCalendrierContain.setAttribute("id","calendrier-app-week-table-title-container");
		$("#calendrier-app-week-table-header-container")[0].appendChild(titreCalendrierContain);

		var rightArrowContainer = document.createElement("div");
		rightArrowContainer.setAttribute("id","calendrier-app-week-table-header-right-arrow-container");
		$("#calendrier-app-week-table-header-container")[0].appendChild(rightArrowContainer);

		$("#calendrier-app-week-table-header-left-arrow-container").text("<");
		$("#calendrier-app-week-table-title-container").text(Self.DataCalendrier.getNameMonth(Self.DataCalendrier.currentMonth) +' | '+ Self.DataCalendrier.currentWeek +' | '+ Self.DataCalendrier.choosenYear);
		$("#calendrier-app-week-table-header-right-arrow-container").text(">");
	},

	createCliqueArrows : function ()
	{
		self=this;

		$("#calendrier-app-week-table-header-left-arrow-container")[0].addEventListener("click", function ()
		{
			$('div table').remove();
			$('div #calendrier-app-week-table-header-container').remove();



			Self.DataCalendrier.currentWeek--;
			if(Self.DataCalendrier.currentWeek<1)
			{
				Self.DataCalendrier.currentWeek=5;
				Self.DataCalendrier.currentMonth--;
			}

			if(Self.DataCalendrier.currentMonth<1)
			{
				Self.DataCalendrier.currentMonth=12;
				Self.DataCalendrier.choosenYear--;
			}
			Self.createAll();

		}, false);	

		$("#calendrier-app-week-table-header-right-arrow-container")[0].addEventListener("click", function ()
		{
			$('div table').remove();
			$('div #calendrier-app-week-table-header-container').remove();


			Self.DataCalendrier.currentWeek++;
			if(Self.DataCalendrier.currentWeek>5)
			{
				Self.DataCalendrier.currentWeek=1;
				Self.DataCalendrier.currentMonth++;
			}

			if(Self.DataCalendrier.currentMonth>12)
			{
				Self.DataCalendrier.currentMonth=1;
				Self.DataCalendrier.choosenYear++;
			}

			Self.createAll();

		}, false);
	},
	testTestTest : function (nbFirstDay,nbDaysInCurentMonth,nbDaysInLastMonth,numeroDeLigne)
	{

		var tableCell=1;
		var tableRow=1;
		var dayInCurentMonth=1;
		var dayDisplayed=nbDaysInLastMonth-nbFirstDay+2;
		var map = [[],[],[],[],[],[]];

		for(var i=0; i<6; i++)
		{	
			for(var y=0; y<7; y++)
			{
				if(tableCell==nbFirstDay || dayInCurentMonth>nbDaysInCurentMonth)
				{
					dayInCurentMonth=1;
					dayDisplayed=1;
				}

				map[i].push(dayDisplayed);
			
				tableCell++; 	
				dayDisplayed++;
				dayInCurentMonth++;
			}
			tableRow++;
		}
		return map[numeroDeLigne-1];
	}
}