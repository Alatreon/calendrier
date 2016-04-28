function CreateWeekView () 
{
	this.lastWeekTab= [[],[],[],[],[],[]];
	this.NewWeekTab=[[],[],[],[],[],[]];
	this.equalityNextMonthBool=false;
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
	createWeekDays : function ()
	{
		var tableCell=1;
		var tableRow=1;
		var dayInCurentMonth=1;
		var sevenWeekDaysName=1;
		var dayDisplayed=Self.DateJsonData.weekNumber[Self.DataCalendrier.weekInYear].weekTab;

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
		$("#calendrier-app-week-table-title-container").text(' '+
			Self.DateJsonData.weekNumber[Self.DataCalendrier.weekInYear].weekTab[0]+' '+
			Self.DataCalendrier.getNameMonth(Self.DateJsonData.weekNumber[Self.DataCalendrier.weekInYear].monthNum[0]) +' '+
			Self.DateJsonData.weekNumber[Self.DataCalendrier.weekInYear].yearNum[0]+' | '+
			(Self.DataCalendrier.weekInYear+1) +' | '+
			Self.DateJsonData.weekNumber[Self.DataCalendrier.weekInYear].weekTab[6]+' '+
			Self.DataCalendrier.getNameMonth(Self.DateJsonData.weekNumber[Self.DataCalendrier.weekInYear].monthNum[1]) +' '+
			Self.DateJsonData.weekNumber[Self.DataCalendrier.weekInYear].yearNum[1] +' '
		);
		$("#calendrier-app-week-table-header-right-arrow-container").text(">");
	},

	createCliqueArrows : function ()
	{
		self=this;

		$("#calendrier-app-week-table-header-left-arrow-container")[0].addEventListener("click", function ()
		{
			$('div table').remove();
			$('div #calendrier-app-week-table-header-container').remove();

			Self.DataCalendrier.weekInYear--;
			// console.log(Self.DateJsonData.weekNumber.length);
			if(Self.DataCalendrier.weekInYear<1)
			{
				Self.DataCalendrier.oneLessYear();Self.DataCalendrier.weekInYear=52;
				Self.DateJsonData=Self.CreateDateJsonData.allDatesInYear(Self.DataCalendrier.choosenYear);
			}
			
			Self.createAll();

		}, false);	

		$("#calendrier-app-week-table-header-right-arrow-container")[0].addEventListener("click", function ()
		{

			$('div table').remove();
			$('div #calendrier-app-week-table-header-container').remove();
			

			Self.DataCalendrier.weekInYear++;
			console.log(Self.DateJsonData.weekNumber.length);
			if(Self.DataCalendrier.weekInYear>=Self.DateJsonData.weekNumber.length)
			{
				Self.DataCalendrier.oneMoreYear();
				Self.DataCalendrier.currentMonth=1;
				Self.DataCalendrier.weekInYear=1;
				Self.CreateDateJsonData.yearJsonData=
				{
					"weekNumber":
						[
						]
				};
				Self.DateJsonData=Self.CreateDateJsonData.allDatesInYear(Self.DataCalendrier.choosenYear);
			}

			Self.createAll();

		}, false);
	}
}