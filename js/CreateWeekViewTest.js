function CreateDateJsonData () 
{
	this.lastWeekTab= [[],[],[],[],[],[]];
	this.NewWeekTab=[[],[],[],[],[],[]];
	this.equalityNextMonthBool=false;
	this.yearJsonData=
	{
		"weekNumber":
			[
			]
	};
}

CreateDateJsonData.prototype=
{
	uneFoisSurDeux : function (vare)
	{
		if(((Self.DataCalendrier.currentMonth*1)%2)==1)
		{
			Self.DataCalendrier.currentMonthMaxWeek=vare[0];
		}
		else
		{
			Self.DataCalendrier.currentMonthMaxWeek=vare[1];
		}
		//console.log(this.lastWeekTab+'=='+this.newWeekTab)
		if(this.lastWeekTab[0]==this.newWeekTab[0] && this.lastWeekTab[1]==this.newWeekTab[1] && this.lastWeekTab[2]==this.newWeekTab[2] && this.lastWeekTab[3]==this.newWeekTab[3] && this.lastWeekTab[4]==this.newWeekTab[4] && this.lastWeekTab[5]==this.newWeekTab[5] && this.lastWeekTab[6]==this.newWeekTab[6])
		{	
			Self.DataCalendrier.currentWeek=1;

			Self.DataCalendrier.currentMonth+=1;

			if(Self.DataCalendrier.currentMonth>12)
			{
				Self.DataCalendrier.currentMonth=1;
				Self.DataCalendrier.choosenYear++;
			}
		}
		if((this.lastWeekTab[6]+1)!=this.newWeekTab[0] && this.lastWeekTab[0]!=this.newWeekTab[0] && this.lastWeekTab[6]<28 && 
			Self.DataCalendrier.currentMonth<12/* && this.lastWeekTab[1]==this.newWeekTab[1] && this.lastWeekTab[2]==this.newWeekTab[2] && this.lastWeekTab[3]==this.newWeekTab[3] && this.lastWeekTab[4]==this.newWeekTab[4] && this.lastWeekTab[5]==this.newWeekTab[5] && this.lastWeekTab[6]==this.newWeekTab[6]*/)
		{	
			Self.DataCalendrier.currentMonthMaxWeek++;
		}
	},
	equalityNextMonth : function ()
	{
		this.lastWeekTab=this.weekByNbLine(Self.DataCalendrier.currentWeek);

		var nextWeekNum=Self.DataCalendrier.currentWeek+1;
		
		if(nextWeekNum>Self.DataCalendrier.currentMonthMaxWeek){nextWeekNum=1;Self.DataCalendrier.currentMonth+=1;this.equalityNextMonthBool=true;}

		this.newWeekTab=this.weekByNbLine(nextWeekNum);

		if(this.equalityNextMonthBool==true){this.equalityNextMonthBool=false;Self.DataCalendrier.currentMonth-=1;}

		// console.log('last:'+this.lastWeekTab+' | new:'+this.newWeekTab+' | '+nextWeekNum+' | '+Self.DataCalendrier.currentMonthMaxWeek);
	},
	weekByNbLine : function (numeroDeLigne)
	{

		var tableCell=1;
		var tableRow=1;
		var dayInCurentMonth=1;
		var dayDisplayed=Self.DataCalendrier.getDaysInMonth
			(
				Self.DataCalendrier.currentMonth-1,
				Self.DataCalendrier.choosenYear
			)-Self.DataCalendrier.getFirstDayInMonth(
						Self.DataCalendrier.currentMonth,
						Self.DataCalendrier.choosenYear)+2;
		var map = [[],[],[],[],[],[]];

		for(var i=0; i<6; i++)
		{
			for(var y=0; y<7; y++)
			{if(tableCell==Self.DataCalendrier.getFirstDayInMonth(
						Self.DataCalendrier.currentMonth,
						Self.DataCalendrier.choosenYear) || dayInCurentMonth>Self.DataCalendrier.getDaysInMonth(Self.DataCalendrier.currentMonth,Self.DataCalendrier.choosenYear))
				{
					dayInCurentMonth=1;
					dayDisplayed=1;
				}

				map[i].push(dayDisplayed);
			
				tableCell++; 	
				dayDisplayed++;
				dayInCurentMonth++;
			}
			tableRow++;
		}
		return map[numeroDeLigne-1];
	},
	allDatesInYear : function(yearNum)
	{
		var incrYear=52;
		var currentMonth=Self.DataCalendrier.currentMonth;
		var currentWeek=Self.DataCalendrier.currentWeek;
		var currentYear=Self.DataCalendrier.choosenYear;

		Self.DataCalendrier.currentMonth=1;
		Self.DataCalendrier.currentWeek=1;
		Self.DataCalendrier.choosenYear=yearNum;

		for(var i=1; i<=incrYear; i++)
		{
			this.equalityNextMonth();

			var yearNum =Self.DataCalendrier.choosenYear;

			Self.DataCalendrier.oneLessWeek();
			var beforeMonthNum=Self.DataCalendrier.currentMonth;
			Self.DataCalendrier.oneMoreWeek();

			Self.DataCalendrier.oneMoreWeek();
			var nextMonthNum=Self.DataCalendrier.currentMonth;
			Self.DataCalendrier.oneLessWeek();

			var monthNum= Self.DataCalendrier.currentMonth;
			if(i==incrYear && this.lastWeekTab[6]<28)
			{
				incrYear=53;
			}
			
			if(this.lastWeekTab[0]>this.lastWeekTab[6])
			{
				if(beforeMonthNum==monthNum)
				{
					monthNum=[monthNum,nextMonthNum];
				}
				else
				{
					monthNum=[beforeMonthNum,monthNum];
				}

				if(i==1)
				{
					yearNum=[(yearNum-1),(yearNum)];
				}

				if(i==incrYear)
				{
					yearNum=[(yearNum-1),(yearNum)];
				}
			}
			else
			{
				monthNum=[monthNum,Self.DataCalendrier.currentMonth]
			}

			if(i!=incrYear && i!=1){yearNum=[(yearNum),(yearNum)];}

			console.log(
				(i) +' | '+
				yearNum +' | '+
				monthNum +' | '+
				this.lastWeekTab);

			actualArray={"yearNum":yearNum, 'monthNum':monthNum, 'weekTab':this.lastWeekTab};

			this.yearJsonData.weekNumber.push(actualArray);

			this.uneFoisSurDeux([5,4]);
			Self.DataCalendrier.oneMoreWeek();
		}

		Self.DataCalendrier.currentMonth=currentMonth;
		Self.DataCalendrier.currentWeek=currentWeek;
		Self.DataCalendrier.choosenYear=currentYear;
		
		return this.yearJsonData;
	}
}