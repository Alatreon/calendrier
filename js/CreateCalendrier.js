function CreateCalendrier () 
{
	this.currentView=2;
}

CreateCalendrier.prototype=
{	
	getDefaultCalendrier : function ()
	{
		Self.removeAll();
		switch (this.currentView)
		{
			case 0:
				this.getloginView();
			break;
			case 1:
				this.getSignUpView();
			break;
			case 2:
				Self.CreateTabs.getDefaultTabs();
				this.getMonthViewCalendrier();
			break;
			case 3:
				Self.CreateTabs.getDefaultTabs();
				this.getWeekViewCalendrier();
			break;
		}
	},
	getloginView : function ()
	{
		Self.LoginApi.getLoginHtml();
	},
	getSignUpView : function ()
	{
		Self.LoginApi.getSignupHtml();
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