sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller,MessageBox) => {
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
        onPreviousYearIG: function () {
            var aItems = [
                { key: "KRA", text: "Key Result Area" },
                { key: "KPA", text: "Key Performance Area" },
                { key: "Target", text: "Target" }
            ];
        
            var oModel = new sap.ui.model.json.JSONModel({ items: aItems });
            var oDialog = new sap.m.SelectDialog({
                title: "Select an Item",
                items: {
                    path: "/items",
                    template: new sap.m.StandardListItem({
                        title: "{text}"
                    })
                },
                search: function (oEvent) {
                    var sValue = oEvent.getParameter("value");
                    var oFilter = new sap.ui.model.Filter("text", sap.ui.model.FilterOperator.Contains, sValue);
                    oDialog.getBinding("items").filter([oFilter]);
                },
                confirm: function (oEvent) {
                    var oSelectedItem = oEvent.getParameter("selectedItem");
                    if (oSelectedItem) {
                        sap.ui.getCore().byId("selectedItemInput").setValue(oSelectedItem.getTitle());
                    }
                },
                cancel: function () {
                    oDialog.destroy(); // Clean up
                }
            });
        
            oDialog.setModel(oModel);
            oDialog.open();
        }
        


    });
});