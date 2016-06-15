function AddTask ()
{
	this.dateStart=0;
}
AddTask.prototype=
{
	createHtmlAddRessources : function ()
	{
		var popupOverlay=document.createElement('div');
		popupOverlay.setAttribute("id","task-add-popup-overlay");						
		popupOverlay.setAttribute("class","task-add-popup-overlay");				//.task-add-popup-overlay
		$("body")[0].appendChild(popupOverlay);

		var popupModal=document.createElement('div');
		popupModal.setAttribute("id","task-add-popup-modal");						
		popupModal.setAttribute("class","task-add-popup-modal");					//.task-add-popup-modal

		$("#task-add-popup-overlay")[0].appendChild(popupModal);

		this.impleModale();
	},
	impleModale : function ()
	{
		var popupContent=document.createElement('div');
		popupContent.setAttribute("class","task-add-popup-modal-content");
		$("#task-add-popup-modal")[0].appendChild(popupContent);

		$(".task-add-popup-modal-content")[0].appendChild(
			this.createFormElem("div",
			[
				[
					["class"],
					["form-container"]
				]
			])
		);

		var formJson=[
			{
				"tag" : "div",
				"attribute" :
				[
					[
						["class"],
						["form-header"]
					],
					[
						["id"],
						["form-task-header"]
					]
				],
				"wording":""
			},
			{
				"tag":"input",
				"attribute" :
				[
					[
						["maxlength"],
						["10"]
					],
					[
						["placeholder"],
						["Nom de la tache : "]
					],
					[
						["class"],
						["form-field"]
					],
					[
						["id"],
						["task-name"]
					]
				],
				"wording":""
			},
			{
				"tag":"textarea",
				"attribute" :
				[
					[
						["maxlength"],
						["300"]
					],
					[
						["placeholder"],
						["Commentaire : "]
					],
					[
						["class"],
						["form-field"]
					],
					[
						["id"],
						["task-com"]
					]
				],
				"wording":""
			},
			{
				"tag":"select",
				"attribute" :
				[
					[
						["class"],
						["form-field select"]
					],
					[
						["id"],
						["task-ressource-name"]
					]
				],
				"wording":"Ressource"
			},
			{
				"tag":"input",
				"attribute" :
				[
					[
						["id"],
						["task-ressource-id"]
					],
					[
						["type"],
						["hidden"]
					]
				],
				"wording":""
			},
			{
				"tag":"input",
				"attribute" :
				[
					[
						["type"],
						["date"]
					],
					[
						["class"],
						["form-field"]
					],
					[
						["id"],
						["task-date"]
					]
				],
				"wording":""
			},
			{
				"tag":"select",
				"attribute" :
				[
					[
						["class"],
						["form-field select"]
					],
					[
						["id"],
						["task-hour-debut"]
					]
				],
				"wording":"Debut"
			},
			{
				"tag":"button",
				"attribute" :
				[
					[
						["class"],
						["form-field form-button form-left"]
					],
					[
						["id"],
						["task-annuler"]
					]
				],
				"wording":"Annuler"
			},
			{
				"tag":"button",
				"attribute" :
				[
					[
						["class"],
						["form-field form-button form-right"]
					],
					[
						["id"],
						["task-valider"]
					]
				],
				"wording":"Valider"
			}
		];

		this.createForm(formJson);
		this.formAction("form-task");


		$( "#form-task-header" )[0].innerHTML="Ajouter une tache";

		// $( " .form-container " )[0].innerHTML='  <input type="date" class="form-field">';
	},
	createFormElem : function (typeElem, attrElem, optionSelectWording)
	{
		var element=document.createElement(typeElem);
		self=this;

		for(var i = 0; i<attrElem.length; i++)
		{
			if(typeElem=="select")
			{
				optionElem=document.createElement("option");
				optionElem.setAttribute("value","");
				optionElem.setAttribute("disabled",true);
				optionElem.setAttribute("selected",true);
				optionElem.setAttribute("hidden",true);
				optionElem.innerHTML=optionSelectWording;
				element.appendChild(optionElem);//<option value="" disabled selected hidden>Ressource</option>

				var optionElem;
				var userRessources=Self.CreateJsonTask.userRessources;
				if(optionSelectWording=="Ressource" && i==0)
				{
					for(var y=0;y<userRessources.length;y++)
					{
						optionElem=document.createElement("option");
						optionElem.setAttribute("value",userRessources[y]._id);//<option value="_id">userRessources[y].name/option>
						optionElem.innerHTML=userRessources[y].name;
						element.appendChild(optionElem);			
					}
					element.onchange=function()
					{

						for(var y=0;y<Self.CreateJsonTask.userRessources.length ;y++)
						{
							if(Self.CreateJsonTask.userRessources[y]._id==this.value)
							{
								$("#task-ressource-id")[0].setAttribute("value",userRessources[y].name);//<option value="_id">userRessources[y].name/option>
							}
								
						}
					}
				}
				if(optionSelectWording=="Debut" || optionSelectWording=="Fin")
				{
					for(var y=this.dateStart;y<=48;y++)
					{
						hourWording=Self.CreateMonthTask.demiHourStart(y/2);
						if(y/2==24){hourWording=Self.CreateMonthTask.demiHourStart(0)}
						optionElem=document.createElement("option");
						optionElem.setAttribute("value",y/2);//<option value="_id">userRessources[y/2].name/option>
						optionElem.setAttribute("id",'t'+y);//<option value="_id">userRessources[y/2].name/option>

						optionElem.innerHTML=hourWording;

						if(optionSelectWording=="Debut")
						{
							element.onchange=function()
							{
								$("#task-hour-fin").remove();

								self.dateStart=(this.value*2)+2;

								document.getElementById("task-hour-debut").parentNode.insertBefore(self.createFormElem("select",
										[
											[
												["class"],
												["form-field select"]
											],
											[
												["id"],
												["task-hour-fin"]
											]
										],
										["Fin"]
									), document.getElementById("task-hour-debut").nextSibling);

								self.dateStart=24;
							}
						}

						element.appendChild(optionElem);
					}
				}
			}
			if(typeElem=="button")
			{				
				element.innerHTML=optionSelectWording;
			}
			element.setAttribute(attrElem[i][0],attrElem[i][1]);
		}
		return element;
	},
	createForm : function (formJson)
	{
		for(var i = 0; i<formJson.length; i++)
		{
			$(" .form-container ")[0].appendChild(
				this.createFormElem(formJson[i].tag,formJson[i].attribute,formJson[i].wording)
			);
		}
	},
	getWeekNum : function(year,month,day)
	{
		newDate = new Date();

		newDate.setFullYear(year);
		newDate.setMonth(month-1);
		newDate.setDate(day);

		return newDate.getWeek()
	},
	formAction : function (formType)
	{
		self=this;
		if(formType=="form-task")
		{
			$("#task-annuler")[0].addEventListener("click",function(){
				$('#task-add-popup-overlay').remove();
				$('#task-add-popup-modal').remove();			
			});

			$("#task-valider")[0].addEventListener("click",function(){

				Self.AddTask.formTaskValid();
			});
		}
		if(formType=="signup")
		{
			$("#signup-valider")[0].addEventListener("click",function(){

				Self.AddTask.formSignValid();
			});
		}
	},
	formTaskValid : function ()
	{
		// console.log("name :"+$("#task-name").val()+
		// 		"start : "+($("#task-hour-debut").val()*1)+
		// 		"end : "+($("#task-hour-fin").val()*1)+
		// 		"date : "+$("#task-date").val()+
		// 		"ressource : "+$("#task-ressource-name").val()+
		// 		"text : "+$("#task-com").val());	

		var name = "#task-name";
		var start = "#task-hour-debut";
		var end = "#task-hour-fin";
		var date = "#task-date";
		var ressource ="#task-ressource-name";
		var	text ="#task-com";
		var ressourceId='#task-ressource-id'

		var boxShadow="0px 0px 1px 1px ";

		var allSelect = [name,start,date,ressource,text,end];

		var allSelectTrue = [false,false,false,false,false,false];

		for(var i = 0; i<allSelect.length; i++)
		{
			if( $(allSelect[i]).val()=="" || $(allSelect[i]).val()*1==0  || $(allSelect[i]).val()==NaN || $(allSelect[i]).val()=='nulltext' ){$(allSelect[i])[0].style.boxShadow = boxShadow+"red";allSelectTrue[i]=false}
			else if( $(allSelect[i]).val()!="" || $(allSelect[i]).val()*1!=0  || $(allSelect[i]).val()!=NaN || $(allSelect[i]).val()!='nulltext' ){$(allSelect[i])[0].style.boxShadow = boxShadow+"green";allSelectTrue[i]=true}
		}

		if(allSelectTrue[0]==true && allSelectTrue[1]==true && allSelectTrue[2]==true && allSelectTrue[3]==true && allSelectTrue[4]==true && allSelectTrue[5]==true)
		{
			this.dateStart=0;
			var dateSplit=$(date).val().split("-");
			var month=dateSplit[1]*1;
			var year =dateSplit[0]*1;
			var day = dateSplit[2]*1;
			Self.CreateJsonTask.userTask.push(
			{
				"_id" : "56fa8dfd36153fb420020ab0",
				"ressource_id" : $("#task-ressource-name").val(),
				"name" : $("#task-name").val(),
				"start" : ($("#task-hour-debut").val()*1),
				"end" : ($("#task-hour-fin").val()*1),
				"day" : day,
				"week" : self.getWeekNum(year, month, day),
				"month" : month,
				"year" : year,
				"ressource" : $(ressourceId).val(),
				"text" : $("#task-com").val(),
				"state" : 0,
			});
			
			$('#task-add-popup-overlay').remove();
			$('#task-add-popup-modal').remove();

			Self.removeAll();
			$('div table').remove();
			$('div #calendrier-app-table-header-container').remove();
			Self.createAll();
		}
	},
	formSignValid : function ()
	{		

		var name = "#signup-name";
		var mdp = "#signup-mdp";
		var mdpConf = "#signup-mdp-conf";
		var email = "#signup-email";

		console.log('name:'+$(name).val() +" | mdp:"+$(mdp).val() +" | mdpconf:"+ $(mdpConf).val() +" | email:"+ $(email).val() )

		var boxShadow="0px 0px 1px 1px ";

		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

		var allSelectTrue = [false,false,false];

			if( $(name).val()=="")
			{
				$(name)[0].style.boxShadow = boxShadow+"red";
				allSelectTrue[0]=false;
			}

			console.log($(mdp).val())

			if($(mdp).val()!=$(mdpConf).val() || $(mdp).val()=="")
			{
				$(mdp)[0].style.boxShadow = boxShadow+"red";

				$(mdpConf)[0].style.boxShadow = boxShadow+"red";

				allSelectTrue[1]=false;
			}

			if(!re.test($(email).val()))
			{
				$(email)[0].style.boxShadow = boxShadow+"red";
				allSelectTrue[2]=false;
			}



			if( $(name).val()!="" )
			{
				$(name)[0].style.boxShadow = boxShadow+"green";
				allSelectTrue[0]=true;
			}
			if( $(mdp).val()==$(mdpConf).val() && $(mdp).val()!="")
			{
				$(mdp)[0].style.boxShadow = boxShadow+"green";
				$(mdpConf)[0].style.boxShadow = boxShadow+"green";
				allSelectTrue[1]=true;
			}
			if( re.test($(email).val()) )
			{
				$(email)[0].style.boxShadow = boxShadow+"green";
				allSelectTrue[2]=true;
			}

		if(allSelectTrue[0]==true && allSelectTrue[1]==true && allSelectTrue[2]==true)
		{
			Self.ApiRequest.post()
		}
	}
}