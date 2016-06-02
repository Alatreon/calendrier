function WeekUiTasks () 
{
	this.tdTwoWidthSize;
	this.tdTwoHeightSize;
}
WeekUiTasks.prototype=
{
	getUi : function ()
	{
		this.tdTwoWidthSize = Math.floor((($('#calendrier-app-week-day-td-container-1').css('width').replace(/[^-\d\.]/g, ''))*1))+4;
		this.tdTwoHeightSize = ((($('#calendrier-app-week-day-td-container-1').css('height').replace(/[^-\d\.]/g, ''))*1)+4)/2;
		this.resizableTask();
		this.draggableTask();
	},
	resizableTask : function ()
	{
		self=this;
		
		//init
		$( ".calendrier-app-task-container" ).resizable(
		{
  			handles: "s",
			grid:
			[
				0,
				self.tdTwoHeightSize 
			],
  			resize: function( event, originalSize )
  			{
  				var i=$(this).context.id.replace(/[^\d\.]/g, '')*1;

  				self.currentHourTask=(Self.CreateJsonTask.userTask[i].end)+(((originalSize.size.height-originalSize.originalSize.height)/self.tdTwoHeightSize)/2);

				Self.CreateWeekTask.whriteHourTaskHeaderTotalHour(i,self.currentHourTask);
				Self.CreateWeekTask.resizeDemiHourEnd(i,self.currentHourTask);
				// Self.CreateWeekTask.whriteTaskDesc(i);
  			},
			stop: function( event, ui ) 
			{
				var i=$(this).context.id.replace(/[^\d\.]/g, '')*1;
				Self.CreateJsonTask.userTask[i].end=self.currentHourTask;
			},
			// ghost:true,
  			// containment: "parent",
			// animate: true,
			// animateEasing: "easeOutBounce"
		});
	},
	draggableTask : function ()
	{
		self=this;

		$( ".calendrier-app-task-container" ).draggable(
		{
  			drag: function( event, ui)
  			{
				var i=$(this).context.id.replace(/[^\d\.]/g, '')*1;

  				self.currentHourEndTaskTop=(Self.CreateJsonTask.userTask[i].end)+(((ui.position.top-ui.originalPosition.top)/self.tdTwoHeightSize)/2);
  				self.currentHourStartTaskTop=((Self.CreateJsonTask.userTask[i].start)+(((ui.position.top-ui.originalPosition.top))/self.tdTwoHeightSize)/2);  				
  				self.currentHourStartTaskLeft=((Self.CreateJsonTask.findDayNum(i))+(((ui.position.left-ui.originalPosition.left))/self.tdTwoWidthSize));

				Self.CreateWeekTask.resizeDemiHourEnd(i,self.currentHourEndTaskTop);
				Self.CreateWeekTask.resizeDemiHourStart(i,self.currentHourStartTaskTop);
  			},
  			stop: function(event, ui)
  			{
				var i=$(this).context.id.replace(/[^\d\.]/g, '')*1;

				Self.CreateJsonTask.userTask[i].end=self.currentHourEndTaskTop;
				Self.CreateJsonTask.userTask[i].start=self.currentHourStartTaskTop;

				Self.CreateJsonTask.userTask[i].day=Self.CreateJsonTask.findMonthDayNum(i,self.currentHourStartTaskLeft);

  			},
			grid:
			[
				self.tdTwoWidthSize,
				self.tdTwoHeightSize 
			],
		});
	}
}
