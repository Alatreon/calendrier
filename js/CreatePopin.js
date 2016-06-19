function CreatePopin ()
{
	this.wordings=[]
}
CreatePopin.prototype=
{
	createPopin : function (wording)
	{
		this.wordings.push(wording);
		this.getHtml();
		this.setAnim();
	},
	getHtml : function() 
	{
		var popupOverlay=document.createElement('div');
		popupOverlay.setAttribute("id","popup-app");
		popupOverlay.setAttribute("class","popup-app");

		var popupOverlayIn=document.createElement('div');
		popupOverlayIn.setAttribute("id","popup-app-in");
		popupOverlayIn.setAttribute("class","popup-app-in");
		popupOverlay.appendChild(popupOverlayIn);
		$("body")[0].appendChild(popupOverlay);

	},
	setWording : function()
	{
		$('#popup-app-in')[0].innerHTML = this.wordings[0];
	},
	setAnim : function()
	{
		self=this;
		$('#popup-app-in').fadeOut(0,function(){
			self.setWording()
		}).fadeIn(500).delay(2000).fadeOut(500,function(){
			self.wordings.shift();
		});
	}
}