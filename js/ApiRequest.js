function ApiRequest ()
{
	this.apiUrl='http://127.0.0.1:8000/v1/api/';
}
ApiRequest.prototype = 
{
	post : function(formVal, route)
	{
		$.post(Self.ApiRequest.apiUrl+route ,
		    formVal,
		    function(data)
		    {
				console.log(formVal);
				console.log(Self.ApiRequest.apiUrl+route);
		        console.log(status);
		        console.log(data);
				
				Self.ApiRequest.waiting(true);
		        
		        Self.CreatePopin.createPopin(data.msg);

		        if(data.success==true)
		        {
		        	Self.ApiRequest.callBackTrue(route)
		        }
		        else
		        {
		        	console.log("echec");
		        }

		    }
	    );
	},
	waiting : function(state)
	{
		
		if(!state)
		{
			$("#loader-in").css("width",0);

			this.loading = setInterval(function(){

			$("#loader-in")[0].style.display="block";
			$("#loader-in").css("width", "+=1" );

			},1);
		}
		else if(state)
		{
			document.getElementById("form-valider-send").setAttribute("id","form-valider");

			clearInterval(this.loading);

			$("#loader-in").css("width", $("body").css("width") ).fadeOut("slow");

		}
	},
	getWaitingHtml : function(formVal, route)
	{
		var loaderCont = document.createElement('div');
		loaderCont.setAttribute("id","loader-container");

		var loaderIn = document.createElement('div');
		loaderIn.setAttribute("id","loader-in");

		loaderCont.appendChild(loaderIn);

		$("body")[0].appendChild(loaderCont);
	},
	callBackTrue : function(route)
	{
		console.log(route)
		switch (route)
		{
			case "authenticate":				
				Self.CreateCalendrier.currentView=2;
				Self.CreateCalendrier.getDefaultCalendrier();
				console.log(document.location.href);
			break;
		}
	}
}