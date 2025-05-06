sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment",
], (Controller,MessageBox,Fragment) => {
    "use strict";

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
            var oModel = new sap.ui.model.json.JSONModel(numberDropDown);
            this.getView().setModel(oModel);
            this.getView().setModel();
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

//Opens Dialog for previous year IG
        // onPreviousYearIG: function () {
        //     var aItems = [
        //         { key: "KRA", text: "Key Result Area" },
        //         { key: "KPA", text: "Key Performance Area" },
        //         { key: "Target", text: "Target" }
        //     ];
        
        //     var oModel = new sap.ui.model.json.JSONModel({ items: aItems });
        //     var oDialog = new sap.m.SelectDialog({
        //         title: "Select an Item",
        //         items: {
        //             path: "/items",
        //             template: new sap.m.StandardListItem({
        //                 title: "{text}"
        //             })
        //         },
        //         search: function (oEvent) {
        //             var sValue = oEvent.getParameter("value");
        //             var oFilter = new sap.ui.model.Filter("text", sap.ui.model.FilterOperator.Contains, sValue);
        //             oDialog.getBinding("items").filter([oFilter]);
        //         },
        //         confirm: function (oEvent) {
        //             var oSelectedItem = oEvent.getParameter("selectedItem");
        //             if (oSelectedItem) {
        //                 sap.ui.getCore().byId("selectedItemInput").setValue(oSelectedItem.getTitle());
        //             }
        //         },
        //         cancel: function () {
        //             oDialog.destroy(); // Clean up
        //         }
        //     });
        
        //     oDialog.setModel(oModel);
        //     oDialog.open();
        // },

        onPreviousYearIG3: function () {
            var oView = this.getView();
        
            // Get the model named 'PreDefineGoals' which is already defined in manifest.json
            var oModel = oView.getModel("PreDefineGoals");
            console.log('modeldata',oModel.getData())
        
            // Optional: Check if model is loaded
            if (!oModel) {
                sap.m.MessageToast.show("PreDefineGoals model not found!");
                return;
            }
        
            // Create the SelectDialog
            var oDialog = new sap.m.SelectDialog({
                title: "Select a Goal",
                items: {
                    path: "PreDefineGoals>/ig_goals", // this is the root array in the JSON
                    template: new sap.m.StandardListItem({
                        title: "{PreDefineGoals>ig_ksp_value}",
                        description: "{PreDefineGoals>ig_kpi_value}",
                        type: "Active"
                    })
                },
                search: function (oEvent) {
                    var sValue = oEvent.getParameter("value");
                    var oFilter = new sap.ui.model.Filter("ig_ksp_value", sap.ui.model.FilterOperator.Contains, sValue);
                    oDialog.getBinding("items").filter([oFilter]);
                },
                confirm: function (oEvent) {
                    var oSelectedItem = oEvent.getParameter("selectedItem");
                    if (oSelectedItem) {
                        sap.m.MessageToast.show("Selected: " + oSelectedItem.getTitle());
                    }
                },
                cancel: function () {
                    oDialog.destroy(); // Clean up
                }
            });
        
            // Set the named model to the dialog
            oDialog.setModel(oModel, "PreDefineGoals");
        
            // Open the dialog
            oDialog.open();
        }
        

        //2nd trail for dialog binding
        // onPreviousYearIG2: function (oEvent) {
        //     oView = this.getView();
        //     if (!this._pDialog) {
		// 		this._pDialog = Fragment.load({
		// 			id: "dialog",
		// 			name: "apprisal.view.IgDialog",
		// 			controller: this
		// 		}).then(function(oDialog){
        //             oDialog.setModel(oView.getModel("CustomData"));
        //             oDialog.open();
        //         }.bind(this));
		// 	}
        // },
        // Bttest:function(){
        //     console.log("Hi");
        // }
        // ,

// Select Dialog
        // onSelectDialogPress: function (oEvent) {
		// 	var oButton = oEvent.getSource(),
		// 		oView = this.getView();
		// 	if (!this._pDialog) {
		// 		this._pDialog = Fragment.load({
		// 			id: oView.getId(),
		// 			name: "apprisal.view.IgDialog",
		// 			controller: this
		// 		}).then(function(oDialog){
        //             oDialog.setModel(oView.getModel("PreDefineGoals"));
        //             oDialog.open();
        //         }.bind(this));
		// 	}


		// },

		// _configDialog: function (oButton, oDialog) {
		// 	// Multi-select if required
		// 	var bMultiSelect = !!oButton.data("multi");
		// 	oDialog.setMultiSelect(bMultiSelect);

		// 	var sCustomConfirmButtonText = oButton.data("confirmButtonText");
		// 	oDialog.setConfirmButtonText(sCustomConfirmButtonText);
		// },

        


    });
});