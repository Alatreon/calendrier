function CreateAppCalendrier ()
{
	Self=this;
	this.DataCalendrier = new DataCalendrier;
	this.CreateMonthView = new CreateMonthView;
	this.CreateWeekView = new CreateWeekView;
	this.ActionCalendrier = new ActionCalendrier;
	this.CreateCalendrier = new CreateCalendrier;
}
CreateAppCalendrier.prototype=
{
	createAll : function ()
	{
		this.CreateCalendrier.getDefaultCalendrier();
		this.startEventListener()
	},
	startEventListener : function () 
	{
		Self.ActionCalendrier.dayCliqueAction();
	}
}

var calendrier = new CreateAppCalendrier;

calendrier.createAll();
calendrier.CreateWeekView.testTestTest(

			calendrier.DataCalendrier.getFirstDayInMonth
			(
				calendrier.DataCalendrier.currentMonth,
				calendrier.DataCalendrier.choosenYear
			),
			calendrier.DataCalendrier.getDaysInMonth
			(
				calendrier.DataCalendrier.currentMonth,
				calendrier.DataCalendrier.choosenYear
			),
			calendrier.DataCalendrier.getDaysInMonth
			(
				calendrier.DataCalendrier.currentMonth-1,
				calendrier.DataCalendrier.choosenYear
			),
			2

		);