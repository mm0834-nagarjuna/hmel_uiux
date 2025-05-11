sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment",
    'sap/m/Bar',
	'sap/m/Button',
	'sap/m/Dialog',
	'sap/m/Link',
	'sap/m/MessageItem',
	'sap/m/MessageView',
	'sap/m/Text',
	'sap/ui/core/IconPool',
	'sap/ui/model/json/JSONModel'
], (Controller,MessageBox,Fragment,Bar, Button, Dialog, Link, MessageItem, MessageView, Text, IconPool, JSONModel) => {
    "use strict";

    var oLink = new Link({
		text: "Show more information",
		href: "http://sap.com",
		target: "_blank"
	});

	var oMessageTemplate = new MessageItem({
		type: '{type}',
		title: '{title}',
		activeTitle: true,
		subtitle: '{subtitle}',
		counter: '{counter}',
		groupName: '{group}',
		link: oLink
	});

    return Controller.extend("apprisal.controller.Detail", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("apprisalDetail").attachPatternMatched(this._onAppIDMatched, this);
            var numberDropDown = {
                numbers: [
                    { key: "1", text: "1" },
                    { key: "2", text: "2" },
                    { key: "3", text: "3" },
                    { key: "4", text: "4" },
                    { key: "5", text: "5" },
                    { key: "6", text: "6" },
                    { key: "7", text: "7" },
                    { key: "8", text: "8" },
                    { key: "9", text: "9" }
                ]
            };
            let oModel2 = new sap.ui.model.json.JSONModel(numberDropDown);
            this.getView().setModel(oModel2);


            var that = this;
			// create any data and a model and set it to the view

			var sErrorDescription = 'First Error message description. \n' +
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
				'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
				'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
				'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
				'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
				'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

			var aMockMessages = [
                {
                    type: 'Error',
                    title: 'KRA',
                    subtitle: 'Score Issue',
                    group: "Individual Goals"
                },
                {
				type: 'Error',
				title: 'Functional/Any Other Development Area',
				subtitle: 'Rejected Reason is not provided',
				group: "Individual Development Plan"
			}, {
				type: 'Error',
				title: 'Functional/Techincal Development Area',
				subtitle: 'Need to provide Second Training Information',
				group: "Individual Development Plan"
			}];

			var oModel = new JSONModel();
			oModel.setData(aMockMessages);

			var oBackButton = new Button({
				icon: IconPool.getIconURI("nav-back"),
				visible: false,
				press: function () {
					that.oMessageView.navigateBack();
					this.setVisible(false);
				}
			});

			this.oMessageView = new MessageView({
					showDetailsPageHeader: false,
					activeTitlePress: function (oEvent) {
                        that.byId("SplitContDemo").toDetail("container-apprisal---Detail--apprisal.view.Idp");

                        var oView = that.byId("SplitContDemo").getDetailPage("container-apprisal---Detail--apprisal.view.Idp");
                        var oObjectPage = oView.getContent()[0];
                        oObjectPage.setShowFooter(true);
                        var sSectionId = oObjectPage.getSections()[3].getId();
                        oObjectPage.setSelectedSection(sSectionId);

                        oView.getModel("PreDefineGoal").setProperty("/IDP/Error/valueState","Error");
                        oView.getModel("PreDefineGoal").setProperty("/IDP/Error/valueStateText","Rejected Reason is not provided");
                        
						that.oDialog.close();
					},
					items: {
						path: '/',
						template: oMessageTemplate
					},
					groupItems: true
				});

			this.getView().setModel(oModel);
			this.getView().addDependent(this.oMessageView);

			this.oDialog = new Dialog({
				content: this.oMessageView,
				contentHeight: "50%",
				contentWidth: "50%",
				endButton: new Button({
					text: "Close",
					press: function() {
						this.getParent().close();
					}
				}),
				customHeader: new Bar({
					contentLeft: [oBackButton],
					contentMiddle: [
						new Text({text: "Publish order"})
					]
				}),
				verticalScrolling: false
			});
        },
        onSideNavigationExpand(){
            const oSideNavigation = this.byId("sideNavigation"),
				bExpanded = oSideNavigation.getExpanded();

			oSideNavigation.setExpanded(!bExpanded);

            const oSplitContDemo = this.byId("SplitContDemo");
            if(bExpanded)
            {
                oSplitContDemo.addStyleClass("mvnSplitContainer");
            }   
            else
            {
                oSplitContDemo.removeStyleClass("mvnSplitContainer");
            } 

        },
        onSideNavigationItemSelect(oEvent){
            // const oItem = oEvent.getParameter("item"),
			// 	sText = oItem.getText();
			// // MessageToast.show(`Item selected: ${sText}`);
            // console.log(sText)
            
            this.byId("SplitContDemo").toDetail(this.byId( oEvent.getParameter("item").getKey()))
            // this._initalSelectedKey = ;
            // this.byId( this._initalSelectedKey).setVisible(true);
        },
        _onAppIDMatched : function (oEvent) {
            let _appID = oEvent.getParameter("arguments").appId;
            let _appIndex = oEvent.getParameter("arguments").index;
        
            if (_appID) {
                this.getView().bindElement({
                    path: `/appraisal(index=${_appIndex},appraisalId=${_appID})`,
                    model: "apprisalData",
                });
            } else {
                MessageBox.show('No Appraisal Id found')
                
            }
           
            
        },
        formatStatusText: function(apStatusName, apStatusSubName) {
            if (apStatusName && apStatusSubName) {
                return apStatusName + " - " + apStatusSubName;
            }
            return apStatusName || apStatusSubName || ""; 
        },
        onClickSubmit: function(oEvent){
            // this.byId("SplitContDemo").toDetail("container-apprisal---Detail--apprisal.view.Idp");

            // var oView = this.byId("SplitContDemo").getDetailPage("container-apprisal---Detail--apprisal.view.Idp");
            // var oObjectPage = oView.getContent()[0];
            // oObjectPage.setShowFooter(true);
            // var sSectionId = oObjectPage.getSections()[3].getId();
            // oObjectPage.setSelectedSection(sSectionId);
            this.oMessageView.navigateBack();
			this.oDialog.open();



        },
        buttonTypeFormatter: function () {
			var sHighestSeverityIcon;
			var aMessages = this.getView().getModel().oData;

			aMessages.forEach(function (sMessage) {

				switch (sMessage.type) {
					case "Error":
						sHighestSeverityIcon = "Negative";
						break;
					case "Warning":
						sHighestSeverityIcon = sHighestSeverityIcon !== "Negative" ? "Critical" : sHighestSeverityIcon;
						break;
					case "Success":
						sHighestSeverityIcon = sHighestSeverityIcon !== "Negative" && sHighestSeverityIcon !== "Critical" ?  "Success" : sHighestSeverityIcon;
						break;
					default:
						sHighestSeverityIcon = !sHighestSeverityIcon ? "Neutral" : sHighestSeverityIcon;
						break;
				}
			});

			return sHighestSeverityIcon;
		},

		// Display the number of messages with the highest severity
		highestSeverityMessages: function () {
			var sHighestSeverityIconType = this.buttonTypeFormatter();
			var sHighestSeverityMessageType;

			switch (sHighestSeverityIconType) {
				case "Negative":
					sHighestSeverityMessageType = "Error";
					break;
				case "Critical":
					sHighestSeverityMessageType = "Warning";
					break;
				case "Success":
					sHighestSeverityMessageType = "Success";
					break;
				default:
					sHighestSeverityMessageType = !sHighestSeverityMessageType ? "Information" : sHighestSeverityMessageType;
					break;
			}

			return this.getView().getModel().oData.reduce(function(iNumberOfMessages, oMessageItem) {
				return oMessageItem.type === sHighestSeverityMessageType ? ++iNumberOfMessages : iNumberOfMessages;
			}, 0);
		},

		// Set the button icon according to the message with the highest severity
		buttonIconFormatter: function () {
			var sIcon;
			var aMessages = this.getView().getModel().oData;
			aMessages.forEach(function (sMessage) {
				switch (sMessage.type) {
					case "Error":
						sIcon = "sap-icon://message-error";
						break;
					case "Warning":
						sIcon = sIcon !== "sap-icon://message-error" ? "sap-icon://message-warning" : sIcon;
						break;
					case "Success":
						sIcon = sIcon !== "sap-icon://message-error" && sIcon !== "sap-icon://message-warning" ? "sap-icon://message-success" : sIcon;
						break;
					default:
						sIcon = !sIcon ? "sap-icon://message-information" : sIcon;
						break;
				}
			});

			return sIcon;
		}
        

    });
});