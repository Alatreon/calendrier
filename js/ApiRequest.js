function ApiRequest ()
{
	this.apiUrl='http://127.0.0.1:8000/v1/api/';
}
ApiRequest.prototype = 
{
	post : function(formVal, route)
	{
		$.post(this.apiUrl+route ,
		    formVal,
		    function(data, status)
		    {
				console.log(formVal);
				console.log(this.apiUrl+route);
		        console.log(status);
		        console.log(data);
		        
		        return data;
		    }
	    );
	}
}