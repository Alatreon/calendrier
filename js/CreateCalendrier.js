function CreateCalendrier () 
{
	this.currentView=1;
}

CreateCalendrier.prototype=
{	
	getDefaultCalendrier : function ()
	{
		if(this.currentView==1)
		{
			this.getWeekViewCalendrier();
		}
		else if(this.currentView==0)
		{
			this.getMonthViewCalendrier();
		}
	},
	getMonthViewCalendrier : function ()
	{
		Self.CreateMonthView.createMonthsDays
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
		Self.CreateMonthView.createMonthTitle(Self.DataCalendrier.currentMonth);
		Self.CreateMonthView.createCliqueArrows(Self.DataCalendrier.currentMonth);
	},
	getWeekViewCalendrier : function ()
	{

		Self.CreateWeekView.createWeekDays
		();
		Self.CreateWeekView.createWeekTitle(Self.DataCalendrier.currentWeek);
		Self.CreateWeekView.createCliqueArrows(Self.DataCalendrier.currentMonth);
	},
}