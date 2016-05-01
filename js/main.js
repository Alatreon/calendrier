function CreateAppCalendrier ()
{
	Self=this;
	this.DataCalendrier = new DataCalendrier;
	this.CreateMonthView = new CreateMonthView;
	this.CreateWeekView = new CreateWeekView;
	this.CreateDateJsonData = new CreateDateJsonData;
	this.ActionCalendrier = new ActionCalendrier;
	this.CreateCalendrier = new CreateCalendrier;
	this.CreateLitView = new CreateLitView;
	/************************************************/

	this.DateJsonData=this.CreateDateJsonData.allDatesInYear(Self.DataCalendrier.choosenYear);
	
	/***********************************************/
}
CreateAppCalendrier.prototype=
{
	createAll : function ()
	{
		this.CreateCalendrier.getDefaultCalendrier();
		this.startEventListener()

	},
	startEventListener : function () 
	{
		Self.ActionCalendrier.dayCliqueAction();
	}
}

var calendrier = new CreateAppCalendrier;

calendrier.createAll();

/*calendrier.CreateWeekView.weekByNbLine(

			calendrier.DataCalendrier.getFirstDayInMonth
			(
				calendrier.DataCalendrier.currentMonth,
				calendrier.DataCalendrier.choosenYear
			),
			calendrier.DataCalendrier.getDaysInMonth 
				(
				calendrier.DataCalendrier.currentMonth,
				calendrier.DataCalendrier.choosenYear
			),
			calendrier.DataCalendrier.getDaysInMonth
			(
				calendrier.DataCalendrier.currentMonth-1,
				calendrier.DataCalendrier.choosenYear
			),
			2

		);
*/
/*
BOINTEG:
		DS.COM : https://admincom-dspp-driveds-integ.driveds.com/
		DSPP : https://admin-dspp-driveds-integ.driveds.com/

	Front:
		DS.COM: https://ct-dspp-driveds-integ.driveds.com/fr/accueil.html
		DSPP : https://master-dspp-driveds-integ.driveds.com

BOTEST:
	DS.COM : https://admincom-dspp-driveds-test.driveds.com/
	DSPP : https://admin-dspp-driveds-test.driveds.com/

	Front:
		DS.COM: https://ct-dspp-driveds-test.driveds.com/fr/accueil.html
		DSPP : https://master-dspp-driveds-test.driveds.com


http://dspp.isobar.pprod.aeaws.com/v111/dspp-smarty/web/src/html/index.html
 
http://dspp.isobar.pprod.aeaws.com/v111/dspp-smarty-mobile/web/src/html/index.html
 
http://dspp.isobar.pprod.aeaws.com/v111/ds-smarty/web/src/html/sections/1colonne/default-defaut.html

1colonne    
2colonnest3      
ajaxCreativity
footer          
murMedias 
p404      
 slideshow   
slideshowt4
2colonnes   
2colonnest4       
ajaxMasterPage 
header           
navN2     
p503       
slideshowt1 
texteSeul
2colonnest1 
HP                
boussole       
layerCookie     
offret1   
pageCookie 
slideshowt2
2colonnest2 
ajaxCraftsmanship 
dev            
mentionsLegales 
offret2   
planDuSite 
slideshowt3
 
http://dspp.isobar.pprod.aeaws.com/v111/ds-smarty-mobile/web/src/html/sections/

1colonne    
2colonnest3       
ajaxMasterPage 
dev              
mur_medias 
p404        
slideshowt2 
texte_seul
2colonnes   
2colonnest4       
boussole       
footer           
navN2      
p503        
slideshowt3
2colonnest1 
ajaxCraftsmanship 
cookies        
header           
offret1    
slideshow   
slideshowt4
2colonnest2 
ajaxCreativity    
cookies_popup  
mentions_legales 
offret2    
slideshowt1 
text_riche
 
	 
	dsmediumitalic
	dsmediumregular
	roboto
	citroenlight
	didot
	didotitalic9*/