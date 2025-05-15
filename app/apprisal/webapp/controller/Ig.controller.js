sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment",
], (Controller,MessageBox,Fragment) => {
    "use strict";

    return Controller.extend("apprisal.controller.Ig", {
        onInit() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.getRoute("apprisalDetail").attachPatternMatched(this.onObjectMatched, this);
           
        },
        onObjectMatched(oEvent) {

          var that = this;
          const oModel = this.getView().getModel("apprisalData"); 
          const oContextBinding = oModel.bindContext("/appraisal(index=" + oEvent.getParameter("arguments").index + ",appraisalId=" + oEvent.getParameter("arguments").appId + ")");

          console.log(oContextBinding)
          oContextBinding.requestObject().then(function (oData) {
              
              
              console.log(oData)
              var oModel = new sap.ui.model.json.JSONModel(oData);
              that.getView().setModel(oModel, "Config");

              let _aData = that.UXData()

              console.log(_aData)
              var _aModel = new sap.ui.model.json.JSONModel(_aData);
              that.getView().setModel(_aModel, "myGoal");

              

          }).catch(function (oError) {
              console.error("Failed to load product:", oError);
          });
      },
      UXData: function(){
          var oData = {
              "COF": {
                  "KSP002": {
                      "nodes": [
                        {
                          "key": "KSP",
                          "fieldVisible": "coFgKSP",
                          "fieldEdit": "coFgKSPEdit",
                          "title": "Key Strategic Priority",
                          "value": "Key Strategic Priority value",
                          "visible": true,
                          "editable": true,
                          "isTA": false,
                          "isDrpD": false,
                          "addIcon": "sap-icon://add",
                          "addText": "Add KRA",
                          
                          "nodes": [
                            {
                              "key": "KRA",
                              "fieldVisible": "coFgKSP",
                              "fieldEdit": "coFgKSPEdit",
                              "num": "2.1.1",
                              "title": "Key Result Area",
                              "value": "Key Result Area value",
                              "deleteIcon": "sap-icon://delete",
                              "visible": true,
                              "editable": true,
                              "isTA": true,
                              "isDrpD": false,
                              "nodes": [
                                {
                                  "key": "KPI",
                                  "fieldVisible": "coFgKPI",
                                  "fieldEdit": "coFgKPIEdit",
                                  "title": "Key Performance Index",
                                  "value": "Key Performance Index value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "Target",
                                  "fieldVisible": "coFgTarget",
                                  "fieldEdit": "coFgTargetEdit",
                                  "title": "Annual Target",
                                  "value": "Target value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "FFMmilestone",
                                  "fieldVisible": "coFgTarget",
                                  "fieldEdit": "coFgTargetEdit",
                                  "title": "First Four Monthly Milestones",
                                  "value": "First Four Monthly Milestones value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": false,
                                  "isDrpD": false
                                },
                                {
                                  "key": "SFMmilestone",
                                  "fieldVisible": "coFgTarget",
                                  "fieldEdit": "coFgTargetEdit",
                                  "title": "Second Four Monthly Milestones",
                                  "value": "Second Four Monthly Milestones value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": false,
                                  "isDrpD": false
                                },
                                {
                                  "key": "FFMA:AE",
                                  "fieldVisible": "cofgffmaAE",
                                  "fieldEdit": "cofgffmaAEEdit",
                                  "title": "First Four Monthly Achievement: Appraisee",
                                  "value": "First Four Monthly Achievement: Appraisee Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "FFFedA:AE",
                                  "fieldVisible": "cofgffmaAR",
                                  "fieldEdit": "cofgffmaAREdit",
                                  "title": "First Four Monthly Feedback: Appraiser",
                                  "value": "First Four Monthly Feedback: Appraiser Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "SFMA:AE",
                                  "fieldVisible": "cofgsfmaAE",
                                  "fieldEdit": "cofgsfmaAEEdit",
                                  "title": "Second Four Monthly Achievement: Appraisee",
                                  "value": "Second Four Monthly Achievement: Appraisee Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "SFFedA:AE",
                                  "fieldVisible": "cofgsfmaAR",
                                  "fieldEdit": "cofgsfmaAREdit",
                                  "title": "Second Four Monthly Feedback: Appraiser",
                                  "value": "Second Four Monthly Feedback: Appraiser Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "AA:AE",
                                  "fieldVisible": "cofgaaAEE",
                                  "fieldEdit": "cofgaaAEEdit",
                                  "title": "Annual Achievement: Appraisee",
                                  "value": "Annual Achievement: Appraisee Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "AFedA:AE",
                                  "fieldVisible": "cofgafAER",
                                  "fieldEdit": "cofgafAEREdit",
                                  "title": "Annual Feedback: Appraiser",
                                  "value": "Annual Feedback: Appraiser Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "Weightage",
                                  "title": "Weightage (%)",
                                  "fieldVisible": "coFgWeightage",
                                  "fieldEdit": "coFgWeightageEdit",
                                  "value": "10",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": false,
                                  "isDrpD": true,

                                  "key1": "Appraisee",
                                  "title1": "Appraisee Score",
                                  "fieldVisible1": "cofgaaAEE",
                                  "fieldEdit1": "cofgselfAEScore",
                                  "value1": "10",
                                  "visible1": true,
                                  "editable1": true,
                                  "isTA1": false,
                                  "isDrpD1": true,

                                  "key2": "Appraiser",
                                  "title2": "Appraiser Score",
                                  "fieldVisible2": "coFgARScore",
                                  "fieldEdit2": "coFgARScoreEdit",
                                  "value2": "10",
                                  "visible2": true,
                                  "editable2": true,
                                  "isTA2": false,
                                  "isDrpD2": true,

                                }
                              ]
                            },
                            {
                              "key": "KRA",
                              "fieldVisible": "coFgKSP",
                              "fieldEdit": "coFgKSPEdit",
                              "num": "2.1.2",
                              "title": "Key Result Area",
                              "value": "Key Result Area value",
                              "deleteIcon": "sap-icon://delete",
                              "visible": true,
                              "editable": true,
                              "isTA": true,
                              "isDrpD": false,
                            }
                          ]
                        }
                      ]
                    },
                  "KSP001": {
                      "nodes": [
                        {
                          "key": "KSP",
                          "fieldVisible": "coFgKSP",
                          "fieldEdit": "coFgKSPEdit",
                          "title": "Key Strategic Priority",
                          "value": "Key Strategic Priority value",
                          "visible": true,
                          "editable": true,
                          "isTA": false,
                          "isDrpD": false,
                          "addIcon": "sap-icon://add",
                          "addText": "Add KRA",
                          
                          "nodes": [
                            {
                              "key": "KRA",
                              "fieldVisible": "coFgKSP",
                              "fieldEdit": "coFgKSPEdit",
                              "num": "2.2.1",
                              "title": "Key Result Area",
                              "value": "Key Result Area value",
                              "deleteIcon": "sap-icon://delete",
                              "visible": true,
                              "editable": true,
                              "isTA": true,
                              "isDrpD": false,
                              "nodes": [
                                {
                                  "key": "KPI",
                                  "fieldVisible": "coFgKPI",
                                  "fieldEdit": "coFgKPIEdit",
                                  "title": "Key Performance Index",
                                  "value": "Key Performance Index value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "Target",
                                  "fieldVisible": "coFgTarget",
                                  "fieldEdit": "coFgTargetEdit",
                                  "title": "Annual Target",
                                  "value": "Target value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "FFMmilestone",
                                  "fieldVisible": "coFgTarget",
                                  "fieldEdit": "coFgTargetEdit",
                                  "title": "First Four Monthly Milestones",
                                  "value": "First Four Monthly Milestones value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": false,
                                  "isDrpD": false
                                },
                                {
                                  "key": "SFMmilestone",
                                  "fieldVisible": "coFgTarget",
                                  "fieldEdit": "coFgTargetEdit",
                                  "title": "Second Four Monthly Milestones",
                                  "value": "Second Four Monthly Milestones value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": false,
                                  "isDrpD": false
                                },
                                {
                                  "key": "FFMA:AE",
                                  "fieldVisible": "cofgffmaAE",
                                  "fieldEdit": "cofgffmaAEEdit",
                                  "title": "First Four Monthly Achievement: Appraisee",
                                  "value": "First Four Monthly Achievement: Appraisee Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "FFFedA:AE",
                                  "fieldVisible": "cofgffmaAR",
                                  "fieldEdit": "cofgffmaAREdit",
                                  "title": "First Four Monthly Feedback: Appraiser",
                                  "value": "First Four Monthly Feedback: Appraiser Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "SFMA:AE",
                                  "fieldVisible": "cofgsfmaAE",
                                  "fieldEdit": "cofgsfmaAEEdit",
                                  "title": "Second Four Monthly Achievement: Appraisee",
                                  "value": "Second Four Monthly Achievement: Appraisee Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "SFFedA:AE",
                                  "fieldVisible": "cofgsfmaAR",
                                  "fieldEdit": "cofgsfmaAREdit",
                                  "title": "Second Four Monthly Feedback: Appraiser",
                                  "value": "Second Four Monthly Feedback: Appraiser Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "AA:AE",
                                  "fieldVisible": "cofgaaAEE",
                                  "fieldEdit": "cofgaaAEEdit",
                                  "title": "Annual Achievement: Appraisee",
                                  "value": "Annual Achievement: Appraisee Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "AFedA:AE",
                                  "fieldVisible": "cofgafAER",
                                  "fieldEdit": "cofgafAEREdit",
                                  "title": "Annual Feedback: Appraiser",
                                  "value": "Annual Feedback: Appraiser Value",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": true,
                                  "isDrpD": false
                                },
                                {
                                  "key": "Weightage",
                                  "title": "Weightage (%)",
                                  "fieldVisible": "coFgWeightage",
                                  "fieldEdit": "coFgWeightageEdit",
                                  "value": "10",
                                  "visible": true,
                                  "editable": true,
                                  "isTA": false,
                                  "isDrpD": true,

                                  "key1": "Appraisee",
                                  "title1": "Appraisee Score",
                                  "fieldVisible1": "cofgaaAEE",
                                  "fieldEdit1": "cofgselfAEScore",
                                  "value1": "10",
                                  "visible1": true,
                                  "editable1": true,
                                  "isTA1": false,
                                  "isDrpD1": true,

                                  "key2": "Appraiser",
                                  "title2": "Appraiser Score",
                                  "fieldVisible2": "coFgARScore",
                                  "fieldEdit2": "coFgARScoreEdit",
                                  "value2": "10",
                                  "visible2": true,
                                  "editable2": true,
                                  "isTA2": false,
                                  "isDrpD2": true,

                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                }
                
               
          };
          return oData
         
      },
      formatter: {
            
        TAVisible: function(sField, oKey){
            if(this.getView().getModel("Config").getData()[sField]){
                if(oKey === 'Weightage'){
                    return false
                }
                if(oKey !== 'Weightage'){
                    return true
                }
                return true
            }

            return false
        }

    },
        
        onClickCancel: function(){

        },

        onClickPreviousYear: function (oEvent) {
            var oButton = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialog) {
                this._pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "apprisal.fragment.IgPreYear",
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
        onClickIGScoreInfo: function (oEvent) {
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