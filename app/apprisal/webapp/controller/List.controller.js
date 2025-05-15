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
             
        },
        onSelectYear: function(oEvent){
            var sKey = oEvent.getSource().getProperty("selectedKey");
            let oTable = this.getView().byId('idApprisalTable')
            let btns = this.getView().byId('bts')
            console.log(sKey)
            if(sKey === '03' || sKey === '02'){
               
                
                btns.setProperty("visible", true)
                oTable.setProperty("mode", "SingleSelectLeft")
            } else {
                btns.setProperty("visible", false)
                oTable.setProperty("mode", "None")
            }
        }
        
    });
});