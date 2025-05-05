sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("apprisal.controller.Detail", {
        onInit() {
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
        }
    });
});