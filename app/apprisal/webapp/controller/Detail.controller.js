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
            let oModel = new sap.ui.model.json.JSONModel(numberDropDown);
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
        

    });
});