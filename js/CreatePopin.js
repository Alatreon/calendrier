function CreatePopin ()
{

}
CreatePopin.prototype=
{
	createPopin : function (wording)
	{
		this.getHtml();
		this.setWording(wording);
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
		this.setAnim();
	},
	setWording : function(wording)
	{
		$('#popup-app-in')[0].innerHTML = wording;
	},
	setAnim : function()
	{
		$('#popup-app-in').fadeIn(500).delay(2000).fadeOut(500);
	}
}