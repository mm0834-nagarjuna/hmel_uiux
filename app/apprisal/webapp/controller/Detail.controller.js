sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller,MessageBox) => {
    "use strict";

    return Controller.extend("apprisal.controller.Detail", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("apprisalDetail").attachPatternMatched(this._onAppIDMatched, this);
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