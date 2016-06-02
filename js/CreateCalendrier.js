function CreateCalendrier () 
{
	this.currentView=0;
}

CreateCalendrier.prototype=
{	
	getDefaultCalendrier : function ()
	{
		if(this.currentView==0)
		{
			this.getMonthViewCalendrier();
		}
		else if(this.currentView==1)
		{
			this.getWeekViewCalendrier();
		}
	},
	getLitViewCalendrier : function()
	{
		Self.CreateLitView.createLitDays();
		Self.CreateLitView.createLitTitle(Self.DataCalendrier.currentMonth);
		Self.CreateLitView.createCliqueArrows(Self.DataCalendrier.currentMonth);
	},
	getMonthViewCalendrier : function ()
	{
		Self.CreateMonthView.createMonthsDays();
		Self.CreateMonthView.createMonthTitle(Self.DataCalendrier.currentMonth);
		Self.CreateMonthView.createCliqueArrows(Self.DataCalendrier.currentMonth);

		Self.CreateMonthTask.createHtmlTask();
	},
	getWeekViewCalendrier : function ()
	{
		Self.CreateWeekView.createWeekDays();
		Self.CreateWeekView.createWeekTitle(Self.DataCalendrier.currentWeek);
		Self.CreateWeekView.createCliqueArrows(Self.DataCalendrier.currentMonth);

		Self.CreateWeekTask.createHtmlTask();
		Self.WeekUiTasks.getUi();
	}
}