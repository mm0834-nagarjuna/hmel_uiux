sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment",
], (Controller,MessageBox,Fragment) => {
    "use strict";

    return Controller.extend("apprisal.controller.Cof", {
        onInit() {
           
        },
        
        // onClickCancel: function(){

        // },

        onClickPredefined: function (oEvent) {
            var oButton = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialog) {
                this._pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "apprisal.fragment.CofPredefined",
                    controller: this
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pDialog.then(function(oDialog){
                oDialog.setMultiSelect(true);
                oDialog.open();
            }.bind(this));
        },

        onClickNew: function(oEvent){
            
        },

        // ----Function for calling Score Infor Dialog--------

        onClickScoreInfo: function (oEvent) {
            var oButton = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialog) {
                this._pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "apprisal.fragment.Ig_Cof_score",
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
        onClickCancelScoreInfo: function () {
            var oView = this.getView();
            var oDialog = oView.byId("idScoreInfoDialog");
            if (oDialog) {
                oDialog.close();
            }
        }
    });
});