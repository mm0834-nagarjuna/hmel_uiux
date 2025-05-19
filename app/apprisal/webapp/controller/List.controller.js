sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], (Controller, Fragment) => {
    "use strict";

    return Controller.extend("apprisal.controller.List", {
        onInit() {
        },
        onPressHistoricData: function (oEvent) {
            var oView = this.getView();

            if (!this._pDialog) {
                this._pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "apprisal.fragment.HistoricData",
                    controller: this
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pDialog.then(function(oDialog){
                // oDialog.setMultiSelect(true);
                oDialog.open();
            }.bind(this));
        },
        onClickHistoricDataCancel: function (oEvent) {
            if (this._pDialog) {
                this._pDialog.then(function(oDialog){
                     oDialog.close();
                 }.bind(this));
             }
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
            // if(sKey === '03' || sKey === '02'){
               
                
            //     btns.setProperty("visible", true)
            //     oTable.setProperty("mode", "SingleSelectLeft")
            // } else {
            //     btns.setProperty("visible", false)
            //     oTable.setProperty("mode", "None")
            // }
        }
        
    });
});