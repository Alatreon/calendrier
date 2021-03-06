function CreateJsonTask () 
{
	this.userTask=this.getUserTask();
	this.userRessources=this.getRessources();
}

CreateJsonTask.prototype=
{
	getUserTask : function ()
	{
		return [
			{
				"_id" : "56fa8dda1307bd2c244c8ffc",
				"name" : "taskTest1",
				"start" : 0,
				"end" : 24,
				"day" : 25,
				"week" : 21,
				"month" : 5,
				"year" : 2016,
				"state" : 0,
				"ressource" : "Jean-Noelien DANIOUL",
				"text" : "They decide if they're going to make more shows.Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows."
			},
			{ 
				"_id" : "56fa8dfd36153fb420020ab0",
				"name" : "taskTest2",
				"start" : 8,
				"end" : 10,
				"day" : 26,
				"week" : 21,
				"month" : 5,
				"year" : 2016,
				"state" : 1,
				"ressource" : "Jean-Noelien DANIOUL",
				"text" : "Well, the way they make shows is and on the strength of that one show they decide if they're going to make more shows."
			},
			{
				"_id" : "56fa8dfd36153fb420020abe",
				"name" : "taskTest3",
				"start" : 6.5,
				"end" : 10.5,
				"day" : 24,
				"week" : 21,
				"month" : 5,
				"year" : 2016,
				"state" : 2,
				"ressource" : "Jean-Noelien DANIOUL",
				"text" : "Well, the way they make shows isat one show more shows."
			},
			{
				"_id" : "56fa8dfd32553fb420020adf",
				"name" : "taskTest4",
				"start" : 14,
				"end" : 18.5,
				"day" : 27,
				"week" : 21,
				"month" : 5,
				"year" : 2016,
				"state" : 1,
				"ressource" : "Jean-Noelien DANIOUL",
				"text" : "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows."
			},
			{
				"_id" : "56fa8dfd32553fb420020gdf",
				"name" : "taskTest5",
				"start" : 10,
				"end" : 18.5,
				"day" : 29,
				"week" : 26,
				"month" : 6,
				"year" : 2016,
				"state" : 0,
				"ressource" : "Jean-Noelien DANIOUL",
				"text" : "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows."
			},
			{
				"_id" : "56fa8dfd32553fb420020ahf",
				"name" : "taskTest6",
				"start" : 9,
				"end" : 19,
				"day" : 23,
				"week" : 21,
				"month" : 5,
				"year" : 2016,
				"state" : 0,
				"ressource" : "Jean-Noelien DANIOUL",
				"text" : "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows."
			},
			{
				"_id" : "56fa8dfd32553fb420021rdf",
				"name" : "taskTest7",
				"start" : 9,
				"end" : 19,
				"day" : 15,
				"week" : 22,
				"month" : 6,
				"year" : 2016,
				"state" : 1,
				"ressource" : "Jean-Noelien DANIOUL",
				"text" : "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows."
			},
			{
				"_id" : "56fa8dfd32553fb420021tdf",
				"name" : "taskTest8",
				"start" : 9,
				"end" : 19,
				"day" : 15,
				"week" : 22,
				"month" : 7,
				"year" : 2016,
				"state" : 2,
				"ressource" : "Jean-Noelien DANIOUL",
				"text" : "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows."
			},
			{
				"_id" : "56fa8dfd32553fb420021fdf",
				"name" : "taskTest9",
				"start" : 9,
				"end" : 19,
				"day" : 15,
				"week" : 22,
				"month" : 7,
				"year" : 2016,
				"state" : 0,
				"ressource" : "Jean-Noelien DANIOUL",
				"text" : "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows."
			}
		];
	},
	getRessources : function ()
	{
		return [
			{ "_id" : "56fa8dda1307bd2c244c8ffc", "name" : "Marie-Joséeee","email" : "test@test.fr"},
			{ "_id" : "56fa8dfd36153fb420020ab0", "name" : "Marie-Josée", "email" : "test@test.fr"},
			{ "_id" : "56fa8e4b51aa901405d83367", "name" : "Marie-Josiane", "email" : "test@test.fr"},
			{ "_id" : "56fa8e6f0d1b2b48222b2625", "name" : "Marie", "email" : "test@test.fr"},
			{ "_id" : "56fa8ebeaf3fec6c1ae76bb9", "name" : "José", "email" : "test@test.fr"},
			{ "_id" : "56fa8ee3af3fec6c1ae76bbb", "name" : "Josiane", "email" : "test@test.fr"}
		];
	},
	findDayNum : function(i)
	{
		var month = this.userTask[i].month;

		var day = this.userTask[i].day;

		var year = this.userTask[i].year;

		var newDate = new Date(year, (month-1), day);
		
		var jourSemaine = newDate.getDay();

		if(jourSemaine==0)jourSemaine=7;

		return jourSemaine;
	},
	findMonthDayNum : function(i,dayNum)
	{
		var day = dayNum;
		var week = this.userTask[i].week;	
		var year = this.userTask[i].year;
		return Self.CreateDateJsonData.yearJsonData.weekNumber[week-1].weekTab[day];
	},
}