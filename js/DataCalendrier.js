function DataCalendrier ()
{
	this.newDate=new Date;
	this.currentMonth=this.newDate.getMonth()+1;
	/*GetWeek*/
	//this.getFullYear = new Date(this.newDate.getFullYear(), 0, 1);
	//this.currentWeek = (Math.ceil((((this.newDate - this.getFullYear) / 86400000) + this.getFullYear.getDay() + 1) / 7 ))-1;
	/******/
	
	this.choosenYear=this.newDate.getFullYear();
	this.choosen=this.newDate.getDay();
}
DataCalendrier.prototype=
{
	getDaysInMonth : function(month, year)
	{
		return (new Date(Date.parse(((month%12)+1).toString() + "/01/" + year)-86400000)).getDate();
	},
	getNameJours : function (i)
	{
		if(i==0){i=1;}
		switch (i)
		{
			case 1:
				day='Lundi';
			break;
			case 2:
				day='Mardi';
			break;
			case 3:
				day='Mercredi';
			break;
			case 4:
				day='Jeudi';
			break;
			case 5:
				day='Vendredi';
			break;
			case 6:
				day='Samedi';
			break;
			case 7:
				day='Dimanche';
			break;
		}
		return day;
	},
	getNameMonth : function (i)
	{
		switch (i)
		{
			case 1:
				month='Janvier';
			break;
			case 2:
				month='Février';
			break;
			case 3:
				month='Mars';
			break;
			case 4:
				month='Avril';
			break;
			case 5:
				month='Mai';
			break;
			case 6:
				month='Juin';
			break;
			case 7:
				month='Juillet';
			break;
			case 8:
				month='Août';
			break;
			case 9:
				month='Septembre';
			break;
			case 10:
				month='Octobre';
			break;
			case 11:
				month='Novembre';
			break;
			case 12:
				month='Décembre';
			break;
		}
		return month;
	},
	//renvoie le premier jour d'un moi d'une annee/*(1-12),9999*/ ex:this.getFirstDayInMonth(12,2000);
	getFirstDayInMonth : function (whichMonth, Ofyear)
	{
		this.getNameJours((new Date(Ofyear+'-'+whichMonth+'-'+1)).getDay());
		if( (new Date(Ofyear+'-'+whichMonth+'-'+1)).getDay()==0 ){ return 7 }
		else { return (new Date(Ofyear+'-'+whichMonth+'-'+1)).getDay();}
	},
}