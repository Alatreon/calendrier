function CreateWeekTask () 
{
}
CreateWeekTask.prototype=
{
	createHtmlTask : function()
	{
		for(var i =0; i<Self.CreateJsonTask.userTask.length; i++)
		{
			if(Self.CreateJsonTask.userTask[i].week==Self.DataCalendrier.weekInYear+1)
			{
				var hourEnd = Math.floor(Self.CreateJsonTask.userTask[i].start);

				hourEndDiv = ((hourEnd)*7) + Self.CreateJsonTask.findDayNum(i);
				var createDivTask = document.createElement("div");
				createDivTask.setAttribute("id","calendrier-app-task-container-"+i);
				createDivTask.setAttribute("class","calendrier-app-task-container ui-widget-content");
				console.log(hourEndDiv);
				$("#calendrier-app-week-day-td-container-"+hourEndDiv)[0].appendChild(createDivTask);
				
				this.createHourTaskHeader(i);

				this.taskStartHeightSize(i);
			}
		}
	},
	createHourTaskHeader : function(i)
	{
		var createDivTask = document.createElement("div");
		createDivTask.setAttribute("id","calendrier-app-hour-task-container-"+i);
		createDivTask.setAttribute("class","calendrier-app-hour-task-container");
		$("#calendrier-app-task-container-"+i)[0].appendChild(createDivTask);

		var createDivTask = document.createElement("div");
		createDivTask.setAttribute("id","calendrier-app-hour-start-task-container-"+i);
		createDivTask.setAttribute("class","calendrier-app-hour-start-task-container");
		$("#calendrier-app-hour-task-container-"+i)[0].appendChild(createDivTask);

		var createDivTask = document.createElement("div");
		createDivTask.setAttribute("id","calendrier-app-hour-end-task-container-"+i);
		createDivTask.setAttribute("class","calendrier-app-hour-start-task-container");
		$("#calendrier-app-hour-task-container-"+i)[0].appendChild(createDivTask);

		this.demiHourStart(i);

		this.createHourTaskHeaderTitle(i);
		this.createHourTaskHeaderTotalHour(i);
		this.createTaskDesc(i);

	},
	createHourTaskHeaderTitle : function(i)
	{
		var createDivTask = document.createElement("div");
		createDivTask.setAttribute("id","calendrier-app-hour-title-task-container-"+i);
		createDivTask.setAttribute("class","calendrier-app-hour-title-task-container");
		$("#calendrier-app-hour-task-container-"+i)[0].appendChild(createDivTask);
		this.whriteHourTaskHeaderTitle(i,Self.CreateJsonTask.userTask[i].end);
	},
	whriteHourTaskHeaderTitle : function(i)
	{
		$("#calendrier-app-hour-title-task-container-"+i).text('| '+Self.CreateJsonTask.userTask[i].name);
	},
	createHourTaskHeaderTotalHour : function(i)
	{
		var createDivTask = document.createElement("div");
		createDivTask.setAttribute("id","calendrier-app-hour-total-task-container-"+i);
		createDivTask.setAttribute("class","calendrier-app-hour-total-task-container");
		$("#calendrier-app-hour-task-container-"+i)[0].appendChild(createDivTask);

		this.whriteHourTaskHeaderTotalHour(i,Self.CreateJsonTask.userTask[i].end);
		this.demiHourStart(i);
	},
	whriteHourTaskHeaderTotalHour : function(i, endHour)
	{
		var totalTaskHourFloor = Math.floor(endHour-Self.CreateJsonTask.userTask[i].start);
		var totalTaskHour = endHour-Self.CreateJsonTask.userTask[i].start;
		var demiHour
		if(totalTaskHourFloor==totalTaskHour) demiHour = "";
		else demiHour = "30";
		$("#calendrier-app-hour-total-task-container-"+i).text( "("+ (totalTaskHourFloor) +"h"+demiHour+") ");
	},
	createTaskDesc : function(i)
	{
		var createDivTask = document.createElement("div");
		createDivTask.setAttribute("id","calendrier-app-task-desc-container-"+i);
		createDivTask.setAttribute("class","calendrier-app-task-desc-container");
		$("#calendrier-app-hour-task-container-"+i)[0].appendChild(createDivTask);

		this.whriteTaskDesc(i);
	},
	whriteTaskDesc : function(i)
	{
		var taskContHeight = $( "#calendrier-app-task-container-"+i ).css('height').replace(/[^-\d\.]/g, '')*1; 
		if(taskContHeight>100){$( "#calendrier-app-task-desc-container-"+i ).text( "" );}
		else {$( "#calendrier-app-task-desc-container-"+i )[0].innerHTML=this.taskDescri(i);}
	},
	demiHourStart : function (i)
	{
		var hourStart = Math.floor(Self.CreateJsonTask.userTask[i].start);
		var hourEnd = Math.floor(Self.CreateJsonTask.userTask[i].end);
		var demiHourEnd;
		var demiHourStart;
		
		if(hourStart==Self.CreateJsonTask.userTask[i].start)
		{
			demiHourStartClass="";
			$("#calendrier-app-hour-start-task-container-"+i).text(hourStart + ':00 -');
		}
		else
		{
			demiHourStartClass="calendrier-app-task-demi-hour-start-container";
			$("#calendrier-app-hour-start-task-container-"+i).text(hourStart + ':30 -');
		}

		if(hourEnd==Self.CreateJsonTask.userTask[i].end)
		{
			demiHourEndClass="";
			$("#calendrier-app-hour-end-task-container-"+i).text(' '+hourEnd + ':00');
		}
		else
		{
			demiHourEndClass="calendrier-app-task-demi-hour-end-container";
			$("#calendrier-app-hour-end-task-container-"+i).text(' '+hourEnd + ':30');
		}
		
		$("#calendrier-app-task-container-"+i)[0].setAttribute( "class", "calendrier-app-task-container	ui-widget-content "+demiHourStartClass+" "+demiHourEndClass	);

	},
	resizeDemiHourEnd : function (i,hourEnd)
	{
		var hourEndFloor = Math.floor(hourEnd);
		var demiHourEnd;
		if(hourEndFloor==hourEnd)
		{
			$("#calendrier-app-hour-end-task-container-"+i).text(' '+hourEnd + ':00');
		}
		else
		{
			demiHourEnd=30;
			$("#calendrier-app-hour-end-task-container-"+i).text(' '+hourEndFloor + ':30');
		}
	},
	resizeDemiHourStart : function (i,hourStart)
	{
		var hourStartFloor = Math.floor(hourStart);
		var demiHourStart;
		if(hourStartFloor==hourStart)
		{
			$("#calendrier-app-hour-start-task-container-"+i).text(hourStart + ':00 -');
		}
		else
		{
			demiHourStart=30;
			$("#calendrier-app-hour-start-task-container-"+i).text(hourStartFloor + ':30 -');
		}
	},
	taskStartHeightSize : function (i)
	{
		var hourStart = Self.CreateJsonTask.userTask[i].start;
		var hourEnd = Self.CreateJsonTask.userTask[i].end;

		var finaleHeight=((hourEnd-hourStart)-1)*((($('#calendrier-app-week-day-td-container-1').css('height').replace(/[^-\d\.]/g, ''))*1)+4)+18;

		$("#calendrier-app-task-container-"+i)[0].style.height=finaleHeight+'px';
	},
	taskDescri : function (i)
	{
		return "<strong>Ressource :</strong><br>" +  Self.CreateJsonTask.userTask[i].ressource  + "<br><strong>Commentaire :</strong><br>" + Self.CreateJsonTask.userTask[i].text;
	}
}
