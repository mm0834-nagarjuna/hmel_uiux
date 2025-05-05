sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("apprisal.controller.List", {
        onInit() {
        },
        onListItemPress: function (oEvent) {
              var oListItem = oEvent.getSource();
              var oBindingContext = oListItem.getBindingContext("apprisalData");
              console.log(oBindingContext)
              var sAppId = oBindingContext.getProperty("appraisalId");
              var sAppIndex = oBindingContext.getProperty("index");
              console.log(sAppId)
              this.getOwnerComponent().getRouter().navTo("apprisalDetail", {
                index:sAppIndex, appId:sAppId
            });
             
        }
    });
});