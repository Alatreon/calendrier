function CreateAppCalendrier ()
{
	Self=this;
	this.CreateJsonTask = new CreateJsonTask;
	this.DataCalendrier = new DataCalendrier;
	this.CreateMonthView = new CreateMonthView;
	this.CreateWeekView = new CreateWeekView;
	this.CreateDateJsonData = new CreateDateJsonData;
	this.ActionCalendrier = new ActionCalendrier;
	this.CreateCalendrier = new CreateCalendrier;
	this.CreateLitView = new CreateLitView;
	this.CreateTabs = new CreateTabs;
	this.CreateWeekTask = new CreateWeekTask;
	this.CreateMonthTask = new CreateMonthTask;
	this.WeekUiTasks = new WeekUiTasks;
	
	/************************************************/

	this.DateJsonData=this.CreateDateJsonData.allDatesInYear(Self.DataCalendrier.choosenYear);

	
	/***********************************************/
}
CreateAppCalendrier.prototype=
{
	createAll : function ()
	{
		this.CreateCalendrier.getDefaultCalendrier();
		this.CreateTabs.getDefaultTabs();
	},
	removeAll : function ()
	{
		$('div table').remove();
		$('div #calendrier-app-week-table-header-container').remove();
		$('#tabs-names-app-container').remove();
		$('#tabs-contenu-app-container').remove();
		// $('.calendrier-app-days-table-container')[0].remove()
		// $('#calendrier-app-table-header-container').remove();
		// $('#calendrier-app-week-table-header-container').remove();
	}
}

		var calendrier = new CreateAppCalendrier;

		calendrier.createAll();
		calendrier.CreateJsonTask.findMonthDayNum(2,5);

/*
BOINTEG:
		DS.COM : https://admincom-dspp-driveds-integ.driveds.com/
		DSPP : https://admin-dspp-driveds-integ.driveds.com/

	Front:
		DS.COM: https://ct-dspp-driveds-integ.driveds.com/fr/accueil.html
		DSPP : https://master-dspp-driveds-integ.driveds.com

BOTEST:
	DS.COM : https://admincom-dspp-driveds-test.driveds.com/
	DSPP : https://admin-dspp-driveds-test.driveds.com/

	Front:
		DS.COM: https://ct-dspp-driveds-test.driveds.com/fr/accueil.html
		DSPP : https://master-dspp-driveds-test.driveds.com

- Qualification technique et fonctionnel des livrables. 
- Aide à la Conception des projets.
- Aide à la planification et coordination des équipes de production technique.
- Aide à la création et utilisation des environnements de développement.
- Création de cahier de recette.
*/