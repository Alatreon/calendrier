function CreateTabs ()
{
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
		var self=this;
		for(var i=0; i<Self.CreateJsonTask.userTask.length; i++)
		{
			var dayTitle=document.createElement('div');
			dayTitle.setAttribute("id","ressources-tab-app-container-"+i);
			dayTitle.setAttribute("class","ressources-tab-app-container");
			$("#tabs-contenu-app-container")[0].appendChild(dayTitle);
			this.addIcons(i);
		}

		var dayTitle=document.createElement('div');
		dayTitle.setAttribute("id","ressources-more-tab-app-container");
		dayTitle.setAttribute("class","ressources-more-tab-app-container");
		$("#tabs-contenu-app-container")[0].appendChild(dayTitle);

		var dayTitle=document.createElement('div');
		dayTitle.setAttribute("id","ressources-more-tab-app");
		dayTitle.setAttribute("class","ressources-more-tab-app");
		$("#ressources-more-tab-app-container")[0].appendChild(dayTitle);

		var dayTitle=document.createElement('div');
		dayTitle.setAttribute("id","ressources-add-all-tab-app");
		dayTitle.setAttribute("class","ressources-add-all-tab-app");
		$("#ressources-more-tab-app-container")[0].appendChild(dayTitle);

		var dayTitle=document.createElement('div');
		dayTitle.setAttribute("id","ressources-add-all-tab-popin");
		dayTitle.setAttribute("class","ressources-add-all-tab-popin");
		$("#ressources-more-tab-app-container")[0].appendChild(dayTitle);

		$("#ressources-add-all-tab-popin")[0].innerHTML="Envoyer toutes les demandes";

		$("#ressources-add-all-tab-app")[0].addEventListener("mouseover", function(){
			
			$("#ressources-add-all-tab-popin")[0].style.marginRight=(($("#ressources-add-all-tab-popin").css('width').replace(/[^-\d\.]/g, ''))*(-1))-30;

			$("#ressources-add-all-tab-popin")[0].style.display="block";
		});
		
		$("#ressources-add-all-tab-app")[0].addEventListener("mouseleave", function(){

			$("#ressources-add-all-tab-popin")[0].style.display="none";
		});

		$( "#ressources-more-tab-app" )[0].addEventListener("click", function(event)
			{
				Self.AddTask.createHtmlAddRessources();
			}
		);
	},
	addIcons : function (i)
	{
		var tabStateWording = ["Non envoyé","Wating","Validé","Refusé"];
		var tabTitle="<div class='tab-title'>"+Self.CreateJsonTask.userTask[i].name+"</div>";
		var tabTaskStatePopin="<div class='tab-task-state-popin tab-task-state-popin-"+Self.CreateJsonTask.userTask[i].state+"' id='tab-task-state-popin-"+i+"'>"+tabStateWording[Self.CreateJsonTask.userTask[i].state]+"</div>";
		var tabTaskState="<div class='tab-task-state tab-task-state-"+Self.CreateJsonTask.userTask[i].state+"' id='tab-task-state-"+i+"'></div>";

		$("#ressources-tab-app-container-"+i)[0].innerHTML=tabTitle+tabTaskStatePopin+tabTaskState;

		$("#ressources-tab-app-container-"+i)[0].addEventListener("mouseover", function(){
			
			$("#tab-task-state-popin-"+i)[0].style.marginRight=(($("#tab-task-state-popin-"+i).css('width').replace(/[^-\d\.]/g, ''))*(-1))-15;
			console.log(($("#tab-task-state-popin-"+i).css('width').replace(/[^-\d\.]/g, ''))*(-1));
			$("#tab-task-state-popin-"+i)[0].style.display="block";
		});

		$("#ressources-tab-app-container-"+i)[0].addEventListener("mouseleave", function(){

			$("#tab-task-state-popin-"+i)[0].style.display="none";
		});

	}
}