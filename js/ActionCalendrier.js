function ActionCalendrier ()
{
}
ActionCalendrier.prototype = 
{
	dayCliqueAction : function () 
	{

		$('.calendrier-app-lit-day-tr-container')[1].addEventListener('click',function()
	  	{		
			Self.ActionCalendrier.weekMatcher(1);
	    });

		$('.calendrier-app-lit-day-tr-container')[2].addEventListener('click',function()
	  	{
			Self.ActionCalendrier.weekMatcher(2);
	    });

		$('.calendrier-app-lit-day-tr-container')[3].addEventListener('click',function()
	  	{
			Self.ActionCalendrier.weekMatcher(3);
	    });

		$('.calendrier-app-lit-day-tr-container')[4].addEventListener('click',function()
	  	{
			Self.ActionCalendrier.weekMatcher(4);
	    });

		$('.calendrier-app-lit-day-tr-container')[5].addEventListener('click',function()
	  	{
			Self.ActionCalendrier.weekMatcher(5);			
	    });

		$('.calendrier-app-lit-day-tr-container')[6].addEventListener('click',function()
	  	{
			Self.ActionCalendrier.weekMatcher(6);
	    });

	},
	weekMatcher : function (lineNumber)
	{
		var clickWeekTab=Self.CreateDateJsonData.weekByNbLine(lineNumber);
		var clickFirstWeekTab=Self.CreateDateJsonData.weekByNbLine(1);
		console.log(clickWeekTab)
		var takeFirst=true;
		for(var i = 0; i<Self.DateJsonData.weekNumber.length; i++)
		{
			for(var y=0;y<2;y++)
			{
				if(Self.DateJsonData.weekNumber[i].weekTab[0]==clickWeekTab[0]&&Self.DateJsonData.weekNumber[i].monthNum[y]==Self.DataCalendrier.currentMonth && Self.DateJsonData.weekNumber[i].tableCellNum==lineNumber&&takeFirst)
				{
					takeFirst=false;
					console.log(Self.DateJsonData.weekNumber[i].weekTab+' | '+Self.DateJsonData.weekNumber[i].weekTab[0]);

					Self.DataCalendrier.weekInYear=i;
				}
			}
		}
		takeFirst=true;
    	console.log(lineNumber 	+' | ' +Self.DataCalendrier.currentMonth+' | '+Self.DataCalendrier.choosenYear);
    	$('.calendrier-app-days-table-container')[0].remove()
		$('#calendrier-app-table-header-container').remove();
		$('#calendrier-app-week-table-header-container').remove();
		$('#tabs-names-app-container').remove();
		$('#tabs-contenu-app-container').remove();
		// Self.removeAll();
		Self.CreateLitView.litVisible=true;
		Self.CreateCalendrier.currentView=1;
		Self.createAll();
	},
	titleCliqueAction : function () 
	{
		$('#calendrier-app-lit-table-title-container')[0].addEventListener('click',function()
	  	{
			$('.calendrier-app-days-table-container')[0].remove()
			$('#calendrier-app-table-header-container').remove();
			$('#calendrier-app-week-table-header-container').remove();
			$('#tabs-names-app-container').remove();
			$('#tabs-contenu-app-container').remove();
			Self.CreateLitView.litVisible=true;
			Self.CreateCalendrier.currentView=0;
			Self.createAll();
	    },false);
	},
}