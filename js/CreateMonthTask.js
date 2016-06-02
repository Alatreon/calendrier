function CreateMonthTask () 
{
	this.tdTwoWidthSize;
	this.tdTwoHeightSize;
}
CreateMonthTask.prototype=
{
	createHtmlTask : function()
	{
		for(var i = 0; i<Self.CreateJsonTask.userTask.length; i++)
		{			
			if(Self.CreateJsonTask.userTask[i].month==Self.DataCalendrier.currentMonth)
			{	
				var createDivTask = document.createElement("div");
				createDivTask.setAttribute("id","calendrier-app-month-task-"+i);
				createDivTask.setAttribute("class","calendrier-app-month-task");
				$(".calendrier-app-day-real-days-in-month-td-container-"+Self.CreateJsonTask.userTask[i].day)[0].appendChild(createDivTask);
				$("#calendrier-app-month-task-"+i).text(this.demiHourStart(Self.CreateJsonTask.userTask[i].start)+"-"+this.demiHourStart(Self.CreateJsonTask.userTask[i].end)+"|"+Self.CreateJsonTask.userTask[i].name)
				this.createDayTaskHover(i,$("#calendrier-app-month-task-"+i));
			}
		}
	},
	createDayTaskHover : function (i,append)
	{
		this.tdTwoWidth = Math.floor((($('#calendrier-app-day-td-container-1').css('width').replace(/[^-\d\.]/g, ''))*1))-14;
		var createDivTask = document.createElement("div");
		createDivTask.setAttribute("id","calendrier-app-month-task-hover"+i);
		createDivTask.setAttribute("class","calendrier-app-day-task-hover");
		$(createDivTask).insertBefore(append);

		$("#calendrier-app-month-task-hover"+i)[0].innerHTML=Self.CreateWeekTask.taskDescri(i);

		$("#calendrier-app-month-task-hover"+i)[0].style.display="none";
		$("#calendrier-app-month-task-hover"+i)[0].style.width=this.tdTwoWidth+"px";
		$("#calendrier-app-month-task-hover"+i)[0].style.marginLeft=1+"px";

		var taskMarginTop = ((-$("#calendrier-app-month-task-hover"+i).height()))/*.replace(/[^-\d\.]/g, ''))*1))+(-$("#calendrier-app-month-task-hover"+i).next().height()*4)*/;
		
		console.log(taskMarginTop+" | ");

		console.log("next:"+(-$("#calendrier-app-month-task-hover"+i).next().height()));

		$(append)[0].addEventListener("mouseover",function()
			{
				$("#calendrier-app-month-task-hover"+i)[0].style.display="block";
				$("#calendrier-app-month-task-hover"+i)[0].style.marginTop=(-$("#calendrier-app-month-task-hover"+i).height()+(-$("#calendrier-app-month-task-hover"+i).next().height()*1.5))+"px";
				console.log($("#calendrier-app-month-task-hover"+i).height());
			});
		$(append)[0].addEventListener("mouseleave",function()
			{
				$("#calendrier-app-month-task-hover"+i)[0].style.display="none";
			})
	},	
	demiHourStart : function (num)
	{
		var hour = Math.floor(num);
		if(hour==num)
		{
			return num+"h00";
		}
		else
		{
			return hour+"h30";
		}
	}
}
