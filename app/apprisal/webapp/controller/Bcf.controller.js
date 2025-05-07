sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/GroupHeaderListItem",
    "sap/ui/core/Fragment",    
], (Controller,GroupHeaderListItem,Fragment) => {
    "use strict";

    return Controller.extend("apprisal.controller.Cof", {
        onInit() {
           
        },
        
        getGroup: function(oContext){
            return oContext.getProperty('COMP_DESC');
        },

        getGroupHeader: function (oGroup) {
            return new GroupHeaderListItem({
				title : oGroup.key
			});
        },

        onBeforeRendering : function(){
            this.byId("BcfTable").setSticky(["ColumnHeaders"]);
        },

         // ----Function for calling Score Infor Dialog--------

         onClickScoreInfo: function (oEvent) {
            console.log('getting called')
            var oButton = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialog) {
                this._pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "apprisal.fragment.Bce_score",
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
            var oDialog = oView.byId("idBceScoreInfoDialog");
            if (oDialog) {
                oDialog.close();
            }
        }


    });
});