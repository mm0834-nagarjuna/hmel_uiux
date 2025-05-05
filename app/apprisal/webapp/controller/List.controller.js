sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("apprisal.controller.List", {
        onInit() {
        },
        onListItemPress: function (oEvent) {
              var oListItem = oEvent.getSource();
              var oBindingContext = oListItem.getBindingContext();
              console.log(oBindingContext)
              var sAppId = oBindingContext.getProperty("appraisalId");
              console.log(sAppId)
              this.getOwnerComponent().getRouter().navTo("apprisalDetail", {
                appId:sAppId
            });
             
        }
    });
});