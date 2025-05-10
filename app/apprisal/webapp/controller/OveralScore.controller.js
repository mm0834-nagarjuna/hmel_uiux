sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"    
    
], (Controller,Fragment) => {
    "use strict";

    return Controller.extend("apprisal.controller.OveralScore", {
        onInit() {
           
        },
        handlePopoverPress: function (oEvent) {
            let oControl = oEvent.getSource(); 
            let oText = oControl.getText();   
            let oView = this.getView();
        
           
            if (oText && oText.includes("BSM Score")) {
                if (!this._pDialog) {
                    this._pDialog = Fragment.load({
                        id: oView.getId(),
                        name: "apprisal.fragment.OS_section_popOver",
                        controller: this
                    }).then(function(oDialog) {
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }
        
                this._pDialog.then(function(oDialog) {
                    oDialog.open();
                }.bind(this));
            } else {
                
                console.log("Link does not contain 'BSM Score'. Dialog not opened.");
            }
        }
        ,
        handleActionPress : function () {
            this.byId('myPopover').close()
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