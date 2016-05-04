function CreateLitView () 
{
	this.litVisible=false;
	this.yearBeforePicking=Self.DataCalendrier.choosenYear;
	this.monthBeforePicking=Self.DataCalendrier.currentMonth;
}

CreateLitView.prototype={
	
	createLitDaysName : function (i)
	{	
		var dayTitle=document.createElement('th');
		dayTitle.setAttribute("id","calendrier-app-lit-day-th-container-"+i)
		dayTitle.setAttribute("class","calendrier-app-lit-day-th-container")
		$("#calendrier-app-lit-day-tr-container-1")[0].appendChild(dayTitle);
		$("#calendrier-app-lit-day-th-container-"+i).text((Self.DataCalendrier.getNameJours(i)).substring(0,2));
	},

	createLitDays : function (nbFirstDay,nbDaysInCurentMonth,nbDaysInLastMonth)
	{
		self=this;
		var tableCell=1;
		var tableRow=1;
		var dayInCurentMonth=1;
		var dayInCurentMonthClass="";
		var dayDisplayed=nbDaysInLastMonth-nbFirstDay+2;
		if(nbDaysInLastMonth-nbFirstDay+2==32){console.log('ezqsdsdfqsdfqsf');}/*Quand les premieres lignes sont bonnent*/

		var tableCont = document.createElement('div');	
		tableCont.setAttribute("class","calendrier-modale-app-lit-cont");
		$('body')[0].appendChild(tableCont);

		var tableCont = document.createElement('div');	
		tableCont.setAttribute("class","calendrier-app-lit-container");
		$('body')[0].appendChild(tableCont);

		var table = document.createElement('table');	
		table.setAttribute("class","calendrier-app-lit-days-table-container");
		$('.calendrier-app-lit-container')[0].appendChild(table);

		for(var i=0; i<7; i++)
		{
			var tr = document.createElement('tr');
			tr.setAttribute("id","calendrier-app-lit-day-tr-container-"+tableRow);
			tr.setAttribute("class","calendrier-app-lit-day-tr-container");
			$('.calendrier-app-lit-days-table-container')[0].appendChild(tr);


			for(var y=0; y<7; y++)
			{

				if(tableRow==1)
				{
					this.createLitDaysName(y+1);
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
							dayInCurentMonthClass="calendrier-app-lit-day-real-days-in-month-td-container";
						}

						dayDisplayed=1;
					}
					//console.log('testttt'+dayDisplayed);
					var day = document.createElement('td');
					day.setAttribute("id","calendrier-app-lit-day-td-container-"+tableCell);
					day.setAttribute("class","calendrier-app-lit-day-td-container "+dayInCurentMonthClass);
					$("#calendrier-app-lit-day-tr-container-"+tableRow)[0].appendChild(day);
					$("#calendrier-app-lit-day-td-container-"+tableCell).text(dayDisplayed);
				
					tableCell++;
					dayDisplayed++;
				}
				//console.log('dayInCurentMonth='+dayInCurentMonth+' | '+tableCell+'=='+nbFirstDay +'||'+ a+'=='+nbDaysInCurentMonth);
				dayInCurentMonth++;
			}
			tableRow++;
		}
		$(".calendrier-modale-app-lit-cont")[0].addEventListener("click", function (event)
		{
			Self.DataCalendrier.choosenYear=self.yearBeforePicking;
			Self.DataCalendrier.currentMonth=self.monthBeforePicking;
			$('.calendrier-modale-app-lit-cont').remove();
			$('.calendrier-app-lit-container').remove();
			self.litVisible=false;
		}, false);
		Self.ActionCalendrier.dayCliqueAction();
	},

	createLitTitle : function ()
	{
		var titreCalendrierContain = document.createElement("div");
		titreCalendrierContain.setAttribute("id","calendrier-app-lit-table-header-container");
		var calendrierAppContainer = document.getElementsByClassName("calendrier-app-lit-container")[0];
		calendrierAppContainer.insertBefore(titreCalendrierContain, calendrierAppContainer.childNodes[0]);

		var leftArrowContainer = document.createElement("div");
		leftArrowContainer.setAttribute("id","calendrier-app-lit-table-header-left-arrow-container");
		$("#calendrier-app-lit-table-header-container")[0].appendChild(leftArrowContainer);

		var titreCalendrierContain = document.createElement("div");
		titreCalendrierContain.setAttribute("id","calendrier-app-lit-table-title-container");
		$("#calendrier-app-lit-table-header-container")[0].appendChild(titreCalendrierContain);

		var rightArrowContainer = document.createElement("div");
		rightArrowContainer.setAttribute("id","calendrier-app-lit-table-header-right-arrow-container");
		$("#calendrier-app-lit-table-header-container")[0].appendChild(rightArrowContainer);

		$("#calendrier-app-lit-table-header-left-arrow-container").text("<");
		$("#calendrier-app-lit-table-title-container").text(Self.DataCalendrier.getNameMonth(Self.DataCalendrier.currentMonth)+' '+	Self.DataCalendrier.choosenYear);
		$("#calendrier-app-lit-table-header-right-arrow-container").text(">");
		Self.ActionCalendrier.titleCliqueAction();
	},

	createCliqueArrows : function ()
	{
		self=this;

		$("#calendrier-app-lit-table-header-left-arrow-container")[0].addEventListener("click", function ()
		{
			$('.calendrier-app-lit-container')[0].remove();
			$('div #calendrier-app-lit-table-header-container').remove();
			$('body .calendrier-modale-app-lit-cont').remove();

			Self.DataCalendrier.oneLessMonth();

			Self.CreateLitView.createLitDays
			(
				Self.DataCalendrier.getFirstDayInMonth
				(
					Self.DataCalendrier.currentMonth,
					Self.DataCalendrier.choosenYear
				),
				Self.DataCalendrier.getDaysInMonth
				(
					Self.DataCalendrier.currentMonth,
					Self.DataCalendrier.choosenYear
				),
				Self.DataCalendrier.getDaysInMonth
				(
					Self.DataCalendrier.currentMonth-1,
					Self.DataCalendrier.choosenYear
				)
			);
			Self.CreateLitView.createLitTitle(Self.DataCalendrier.currentMonth);
			Self.CreateLitView.createCliqueArrows(Self.DataCalendrier.currentMonth);
			

			}, false);	

		$("#calendrier-app-lit-table-header-right-arrow-container")[0].addEventListener("click", function (){

			$('.calendrier-app-lit-container')[0].remove();
			$('div #calendrier-app-lit-table-header-container').remove();
			$('body .calendrier-modale-app-lit-cont').remove();

			Self.DataCalendrier.oneMoreMonth();

			Self.CreateLitView.createLitDays
			(
				Self.DataCalendrier.getFirstDayInMonth
				(
					Self.DataCalendrier.currentMonth,
					Self.DataCalendrier.choosenYear
				),
				Self.DataCalendrier.getDaysInMonth
				(
					Self.DataCalendrier.currentMonth,
					Self.DataCalendrier.choosenYear
				),
				Self.DataCalendrier.getDaysInMonth
				(
					Self.DataCalendrier.currentMonth-1,
					Self.DataCalendrier.choosenYear
				)
			);
			Self.CreateLitView.createLitTitle(Self.DataCalendrier.currentMonth);
			Self.CreateLitView.createCliqueArrows(Self.DataCalendrier.currentMonth);

		}, false);
	},

	createChooseCtaData : function (nameSelector)
	{
		self=this;
		this.yearBeforePicking=Self.DataCalendrier.choosenYear;
		this.monthBeforePicking=Self.DataCalendrier.currentMonth;

		$(nameSelector)[0].addEventListener("click", function (e)
		{
			if(self.litVisible==false)
			{
				Self.CreateCalendrier.getLitViewCalendrier();
				self.litVisible=true;
			}
			else if(self.litVisible==true)
			{
				$('.calendrier-modale-app-lit-cont').remove();
				self.litVisible=false;
			}

		}, false);
	}
}
// brt@awakit.com
