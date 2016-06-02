function CreateTabs ()
{
	this.ressources=[
		{ "_id" : "56fa8dda1307bd2c244c8ffc", "name" : "Marie-Joséeee","email" : "test@test.fr"},
		{ "_id" : "56fa8dfd36153fb420020ab0", "name" : "Marie-Josée", "email" : "test@test.fr"},
		{ "_id" : "56fa8e4b51aa901405d83367", "name" : "Marie-Josiane", "email" : "test@test.fr"},
		{ "_id" : "56fa8e6f0d1b2b48222b2625", "name" : "Marie", "email" : "test@test.fr"},
		{ "_id" : "56fa8ebeaf3fec6c1ae76bb9", "name" : "José", "email" : "test@test.fr"},
		{ "_id" : "56fa8ee3af3fec6c1ae76bbb", "name" : "Josiane", "email" : "test@test.fr"}];
	this.tabs=[
		{ "name" : "Taches"},
		{ "name" : "Ressources"},
		{ "name" : "Tab 3"}];
	this.currentTab='';
}
CreateTabs.prototype = 
{
	getDefaultTabs : function ()
	{
		this.CreateTabContainer();
	},
	CreateTabContainer : function ()
	{
		var tabContainer=document.createElement('div');
		tabContainer.setAttribute("id","tabs-names-app-container");
		$(".tabs-app-container")[0].appendChild(tabContainer);
		var tabContainer=document.createElement('div');
		tabContainer.setAttribute("id","tabs-contenu-app-container");
		$(".tabs-app-container")[0].appendChild(tabContainer);
		this.CreateTabName();
		this.CreateRessourcesTab();
	},
	CreateTabName : function ()
	 {
		for(var i=0; i<this.tabs.length; i++)
		{
			var tabCurentTitle ="";
			var tabTitle=document.createElement('div');
				tabTitle.setAttribute("id","tabs-name-tab-app-container-"+i);
				if(i==this.currentTab)
				{
					tabCurentTitle = " tabs-current-tab-app";					
				}
				else
				{
					tabCurentTitle="";
				}
				tabTitle.setAttribute("class","tabs-name-tab-app-container"+tabCurentTitle);
				$("#tabs-names-app-container")[0].appendChild(tabTitle);
				$("#tabs-name-tab-app-container-"+i).text(this.tabs[i].name);
		}
	},
	CreateRessourcesTab : function ()
	{
		for(var i=0; i<this.ressources.length; i++)
		{
			var dayTitle=document.createElement('div');
			dayTitle.setAttribute("id","ressources-tab-app-container-"+i);
			dayTitle.setAttribute("class","ressources-tab-app-container");
			$("#tabs-contenu-app-container")[0].appendChild(dayTitle);
			$("#ressources-tab-app-container-"+i).text(this.ressources[i].name);
		}

	},
	CreateRessourcesTab : function ()
	{
		for(var i=0; i<Self.CreateJsonTask.userTask.length; i++)
		{
			var dayTitle=document.createElement('div');
			dayTitle.setAttribute("id","ressources-tab-app-container-"+i);
			dayTitle.setAttribute("class","ressources-tab-app-container");
			$("#tabs-contenu-app-container")[0].appendChild(dayTitle);
			$("#ressources-tab-app-container-"+i).text(Self.CreateJsonTask.userTask[i].name);
		}

		var dayTitle=document.createElement('div');
		dayTitle.setAttribute("id","ressources-more-tab-app-container");
		dayTitle.setAttribute("class","ressources-more-tab-app-container");
		$("#tabs-contenu-app-container")[0].appendChild(dayTitle);


		var dayTitle=document.createElement('div');
		dayTitle.setAttribute("id","ressources-more-tab-app");
		dayTitle.setAttribute("class","ressources-more-tab-app");
		$("#ressources-more-tab-app-container")[0].appendChild(dayTitle);

	}
}