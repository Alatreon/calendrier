function LoginApi ()
{
}
LoginApi.prototype=
{
	getSignupHtml : function ()
	{

		var login = document.createElement('div');					
		login.setAttribute("class","form-login");
		$("body")[0].appendChild(login);


		var popupModal=document.createElement('div');
		popupModal.setAttribute("id","task-add-popup-modal");						
		popupModal.setAttribute("class","task-add-popup-modal");

		var popupContent=document.createElement('div');
		popupContent.setAttribute("class","task-add-popup-modal-content");
		$(popupModal)[0].appendChild(popupContent);

		$(popupContent)[0].appendChild(
			Self.AddTask.createFormElem("div",
			[
				[
					["class"],
					["form-container"]
				]
			])
		);

		$(".form-login")[0].appendChild(popupModal);


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
						["form-signup-header"]
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
						["50"]
					],
					[
						["placeholder"],
						["Nom : "]
					],
					[
						["class"],
						["form-field"]
					],
					[
						["id"],
						["signup-name"]
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
						["50"]
					],
					[
						["placeholder"],
						["Mot de passe : "]
					],
					[
						["class"],
						["form-field"]
					],
					[
						["id"],
						["signup-mdp"]
					],
					[
						["type"],
						["password"]
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
						["50"]
					],
					[
						["placeholder"],
						["Confirmation : "]
					],
					[
						["class"],
						["form-field"]
					],
					[
						["id"],
						["signup-mdp-conf"]
					],
					[
						["type"],
						["password"]
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
						["50"]
					],
					[
						["placeholder"],
						["Email : "]
					],
					[
						["class"],
						["form-field"]
					],
					[
						["id"],
						["signup-email"]
					]
				],
				"wording":""
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
						["form-valider"]
					]
				],
				"wording":"Valider"
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
						["login-login"]
					]
				],
				"wording":"Login"
			}
		];

		Self.AddTask.createForm( formJson );

		Self.AddTask.formAction("signup");

		$( "#form-signup-header" )[0].innerHTML="Sign Up";
	},
	getLoginHtml : function ()
	{

		var login = document.createElement('div');					
		login.setAttribute("class","form-login");
		$("body")[0].appendChild(login);


		var popupModal=document.createElement('div');
		popupModal.setAttribute("id","task-add-popup-modal");						
		popupModal.setAttribute("class","task-add-popup-modal");

		var popupContent=document.createElement('div');
		popupContent.setAttribute("class","task-add-popup-modal-content");
		$(popupModal)[0].appendChild(popupContent);

		$(popupContent)[0].appendChild(
			Self.AddTask.createFormElem("div",
			[
				[
					["class"],
					["form-container"]
				]
			])
		);

		$(".form-login")[0].appendChild(popupModal);


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
						["form-signup-header"]
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
						["50"]
					],
					[
						["placeholder"],
						["Email : "]
					],
					[
						["class"],
						["form-field"]
					],
					[
						["id"],
						["signup-email"]
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
						["50"]
					],
					[
						["placeholder"],
						["Mot de passe : "]
					],
					[
						["class"],
						["form-field"]
					],
					[
						["id"],
						["signup-mdp"]
					],
					[
						["type"],
						["password"]
					]
				],
				"wording":""
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
						["login-singup"]
					]
				],
				"wording":"Signup"
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
						["form-valider"]
					]
				],
				"wording":"Valider"
			}
		];

		Self.AddTask.createForm( formJson );

		Self.AddTask.formAction("login");

		$( "#form-signup-header" )[0].innerHTML="Login";
	}
}