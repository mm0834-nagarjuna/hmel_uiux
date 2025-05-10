sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/GroupHeaderListItem",
    "sap/ui/core/Fragment",    
    "sap/ui/model/json/JSONModel"
], (Controller,GroupHeaderListItem,Fragment,JSONModel) => {
    "use strict";

    return Controller.extend("apprisal.controller.Cof", {
        onInit() {
           	// HTML string bound to the formatted text control
                    var oModel = new JSONModel({
                        HTML: 
                            "( <span style=' color : red; font-weight: bold'>Select minimum 1 or maximum 2 Competencies </span> )"
                    });
                    
				this.getView().setModel(oModel);
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
        },
        onClickGuideline: function (oEvent) {

            var oButton = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialog1) {
                this._pDialog1 = Fragment.load({
                    id: oView.getId(),
                    name: "apprisal.fragment.Guideline",
                    controller: this
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pDialog1.then(function(oDialog){
                oDialog.open();
            }.bind(this));
        },
        onClickGuidelineCancel: function () {
            if (this._pDialog1) {
               this._pDialog1.then(function(oDialog){
                    oDialog.close();
                }.bind(this));
            }
        },


    });
});