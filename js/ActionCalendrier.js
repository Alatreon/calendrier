function ActionCalendrier ()
{
}
ActionCalendrier.prototype = 
{
	dayCliqueAction : function () 
	{
		/*for(var i = 0; $('.calendrier-app-day-tr-container').length>i;i++)
		{
			if(i>0)
			{*/
				if(Self.CreateCalendrier.currentView==0)
				{

					$('.calendrier-app-day-tr-container')[1].addEventListener('click',function()
				  	{
				    	console.log(1 	+' | ' +Self.DataCalendrier.currentMonth+' | '+Self.DataCalendrier.choosenYear);										
						Self.DataCalendrier.currentWeekInMonth=1;
				  //   	console.log(
						// 	Self.CreateWeekView.weekByNbLine(

						// 		Self.DataCalendrier.getFirstDayInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth-1,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		1
						// 	)+' | '+ Self.DataCalendrier.currentWeekInMonth	
						// );		
				    });
					$('.calendrier-app-day-tr-container')[2].addEventListener('click',function()
				  	{
				    	console.log(2 	+' | ' +Self.DataCalendrier.currentMonth+' | '+Self.DataCalendrier.choosenYear);
						Self.DataCalendrier.currentWeekInMonth=2;	
				  //   	console.log(
						// 	Self.CreateWeekView.weekByNbLine(

						// 		Self.DataCalendrier.getFirstDayInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth-1,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		2
						// 	)+' | '+ Self.DataCalendrier.currentWeekInMonth	
						// );		
				    });
					$('.calendrier-app-day-tr-container')[3].addEventListener('click',function()
				  	{
				    	console.log(3 	+' | ' +Self.DataCalendrier.currentMonth+' | '+Self.DataCalendrier.choosenYear);
						Self.DataCalendrier.currentWeekInMonth=3;	
				  //   	console.log(
						// 	Self.CreateWeekView.weekByNbLine(

						// 		Self.DataCalendrier.getFirstDayInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth-1,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		3
						// 	)+' | '+ Self.DataCalendrier.currentWeekInMonth	
						// );	
				    });
					$('.calendrier-app-day-tr-container')[4].addEventListener('click',function()
				  	{
				    	console.log(4	+' | ' +Self.DataCalendrier.currentMonth+' | '+Self.DataCalendrier.choosenYear);
						Self.DataCalendrier.currentWeekInMonth=4;
				  //   	console.log(
						// 	Self.CreateWeekView.weekByNbLine(

						// 		Self.DataCalendrier.getFirstDayInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth-1,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		4
						// 	)+' | '+ Self.DataCalendrier.currentWeekInMonth	
						// );		
				    });
					$('.calendrier-app-day-tr-container')[5].addEventListener('click',function()
				  	{
				    	console.log(5	+' | ' +Self.DataCalendrier.currentMonth+' | '+Self.DataCalendrier.choosenYear);
						Self.DataCalendrier.currentWeekInMonth=5;	
				  //   	console.log(
						// 	Self.CreateWeekView.weekByNbLine(

						// 		Self.DataCalendrier.getFirstDayInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth-1,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		5
						// 	)+' | '+ Self.DataCalendrier.currentWeekInMonth	
						// );	
				    });
					$('.calendrier-app-day-tr-container')[6].addEventListener('click',function()
				  	{
				    	console.log(6	+' | ' +Self.DataCalendrier.currentMonth+' | '+Self.DataCalendrier.choosenYear);
						Self.DataCalendrier.currentWeekInMonth=6;	
				  //   	console.log(
						// 	Self.CreateWeekView.weekByNbLine(

						// 		Self.DataCalendrier.getFirstDayInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		Self.DataCalendrier.getDaysInMonth
						// 		(
						// 			Self.DataCalendrier.currentMonth-1,
						// 			Self.DataCalendrier.choosenYear
						// 		),
						// 		6
						// 	)+' | '+ Self.DataCalendrier.currentWeekInMonth	
						// );	
				    });
				}
			/*}
		}*/
	}
}