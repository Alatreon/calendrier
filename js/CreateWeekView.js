function CreateWeekView () 
{
	this.lastWeekTab= [[],[],[],[],[],[]];
	this.NewWeekTab=[[],[],[],[],[],[]];
	this.equalityNextMonthBool=false;
	this.litVisible=false;
}
CreateWeekView.prototype=
{

	createWeekDaysName : function (i)
	{
		var dayDisplayed=Self.DateJsonData.weekNumber[Self.DataCalendrier.weekInYear].weekTab;
		var dayTitle=document.createElement('th');
		dayTitle.setAttribute("id","calendrier-app-week-day-th-container-"+i);
		dayTitle.setAttribute("class","calendrier-app-week-day-th-container");
		$("#calendrier-app-week-day-tr-container-1")[0].appendChild(dayTitle);
		if(i>0)
		{
			$("#calendrier-app-week-day-th-container-"+i).text(Self.DataCalendrier.getNameJours(i)+' '+dayDisplayed[i-1]);
		}
	},
	createWeekHours : function (i,y)
	{
		var hoursTable='';

		if(y<10)
		{
			hoursTable='0'+y+':00';
		}
		else if(y>9 && y<24)
		{
			hoursTable=''+y+':00';
		}
		else
		{
			hoursTable='00'+':00'
		}
		if(i==1 || i==9 || i==17 || i==25 || i==33 || i==41 || i==49 || i==57 || i==65 || i==73 || i==81 || i==89 || i==97 ||
		   i==105 || i==113 || i==121 || i==129 || i==137 || i==145 || i==153 || i==161 || i==169 || i==177 || i==185)
		{
			$("#calendrier-app-week-hour-day-td-container-"+i).text(hoursTable);
		}
		
		// console.log(hoursTable+' | '+"#calendrier-app-week-day-td-container-"+i)
	},
	createWeekDays : function ()
	{
		var tableCell=1;
		var tableCellTest=1;
		var tableRow=1;
		var dayInCurentMonth=1;
		var sevenWeekDaysName=1;

		var table = document.createElement('table');
		table.setAttribute("class","calendrier-app-days-table-container");
		$('.calendrier-app-container')[0].appendChild(table);

		for(var i=0; i<25; i++)
		{
			var tr = document.createElement('tr');
			tr.setAttribute("id","calendrier-app-week-day-tr-container-"+tableRow);
			tr.setAttribute("class","calendrier-app-week-day-tr-container");
			$('.calendrier-app-days-table-container')[0].appendChild(tr);


			for(var y=0; y<8; y++)
			{
			if(tableRow==1)
				{
					this.createWeekDaysName(y);
				}

				else
				{
					var day = document.createElement('td');
					
					if(tableCell==1 || tableCell==9 || tableCell==17 || tableCell==25 || tableCell==33 || tableCell==41 || tableCell==49 || tableCell==57 || tableCell==65 || tableCell==73 || tableCell==81 || tableCell==89 || tableCell==97 ||
					   tableCell==105 || tableCell==113 || tableCell==121 || tableCell==129 || tableCell==137 || tableCell==145 || tableCell==153 || tableCell==161 || tableCell==169 || tableCell==177 || tableCell==185)
					{
						day.setAttribute("id","calendrier-app-week-hour-day-td-container-"+tableCell);
						day.setAttribute("class","calendrier-app-week-day-td-container calendrier-app-week-hour-day-td-container");
					}
					else
					{
						day.setAttribute("id","calendrier-app-week-day-td-container-"+tableCellTest);
						day.setAttribute("class","calendrier-app-week-day-td-container");
						tableCellTest++;
					}
					$("#calendrier-app-week-day-tr-container-"+tableRow)[0].appendChild(day);
					// console.log(day)
					this.createWeekHours(tableCell,i);
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
			Self.DateJsonData.weekNumber[Self.DataCalendrier.weekInYear].yearNum[1]
		);
		$("#calendrier-app-week-table-header-right-arrow-container").text(">");
	},

	createCliqueArrows : function ()
	{
		self=this;
		
		Self.CreateLitView.createChooseCtaData("#calendrier-app-week-table-title-container");

		$("#calendrier-app-week-table-header-left-arrow-container")[0].addEventListener("click", function ()
		{
			Self.removeAll();

			self.litVisible=false;

			Self.DataCalendrier.weekInYear--;
			
			if(Self.DataCalendrier.weekInYear<1)
			{
				Self.DataCalendrier.oneLessYear();Self.DataCalendrier.weekInYear=52;
				Self.DateJsonData=Self.CreateDateJsonData.allDatesInYear(Self.DataCalendrier.choosenYear);
			}
			
			Self.createAll();

		}, false);	

		$("#calendrier-app-week-table-header-right-arrow-container")[0].addEventListener("click", function ()
		{
			Self.removeAll();

			self.litVisible=false;
			

			Self.DataCalendrier.weekInYear++;
			// console.log(Self.DateJsonData.weekNumber.length);
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