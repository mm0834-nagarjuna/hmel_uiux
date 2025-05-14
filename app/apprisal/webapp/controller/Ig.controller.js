sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment",
], (Controller,MessageBox,Fragment) => {
    "use strict";

    return Controller.extend("apprisal.controller.Ig", {
        onInit() {
          var oData = {
            "COF": {
                "KSP002": {
                  "nodes": [
                    {
                      "key": "KSP",
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
                              "title": "Key Performance Index",
                              "value": "Key Performance Index value",
                              "visible": true,
                              "editable": true,
                              "isTA": true,
                              "isDrpD": false
                            },
                            {
                              "key": "Target",
                              "title": "Annual Target",
                              "value": "Target value",
                              "visible": true,
                              "editable": true,
                              "isTA": true,
                              "isDrpD": false
                            },
                            {
                              "key": "FFMmilestone",
                              "title": "First Four Monthly Milestones",
                              "value": "First Four Monthly Milestones value",
                              "visible": true,
                              "editable": true,
                              "isTA": false,
                              "isDrpD": false
                            },
                            {
                              "key": "SFMmilestone",
                              "title": "Second Four Monthly Milestones",
                              "value": "Second Four Monthly Milestones value",
                              "visible": true,
                              "editable": true,
                              "isTA": false,
                              "isDrpD": false
                            },
                            {
                              "key": "FFMA:AE",
                              "title": "First Four Monthly Achievement: Appraisee",
                              "value": "First Four Monthly Achievement: Appraisee Value",
                              "visible": true,
                              "editable": true,
                              "isTA": true,
                              "isDrpD": false
                            },
                            {
                              "key": "FFFedA:AE",
                              "title": "First Four Monthly Feedback: Appraiser",
                              "value": "First Four Monthly Feedback: Appraiser Value",
                              "visible": true,
                              "editable": true,
                              "isTA": true,
                              "isDrpD": false
                            },
                            {
                              "key": "Weightage",
                              "title": "Weightage (%)",
                              "value": "10",
                              "visible": true,
                              "editable": true,
                              "isTA": false,
                              "isDrpD": true,
                            }
                          ]
                        },
                        {
                            "key": "KRA",
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
                                "title": "Key Performance Index",
                                "value": "Key Performance Index value",
                                "visible": true,
                                "editable": true,
                                "isTA": true,
                                "isDrpD": false
                              },
                              {
                                "key": "Target",
                                "title": "Annual Target",
                                "value": "Target value",
                                "visible": true,
                                "editable": true,
                                "isTA": true,
                                "isDrpD": false
                              },
                              {
                                "key": "FFMmilestone",
                                "title": "First Four Monthly Milestones",
                                "value": "First Four Monthly Milestones value",
                                "visible": true,
                                "editable": true,
                                "isTA": false,
                                "isDrpD": false
                              },
                              {
                                "key": "SFMmilestone",
                                "title": "Second Four Monthly Milestones",
                                "value": "Second Four Monthly Milestones value",
                                "visible": true,
                                "editable": true,
                                "isTA": false,
                                "isDrpD": false
                              },
                              {
                                "key": "FFMA:AE",
                                "title": "First Four Monthly Achievement: Appraisee",
                                "value": "First Four Monthly Achievement: Appraisee Value",
                                "visible": true,
                                "editable": true,
                                "isTA": true,
                                "isDrpD": false
                              },
                              {
                                "key": "FFFedA:AE",
                                "title": "First Four Monthly Feedback: Appraiser",
                                "value": "First Four Monthly Feedback: Appraiser Value",
                                "visible": true,
                                "editable": true,
                                "isTA": true,
                                "isDrpD": false
                              },
                              {
                                "key": "Weightage",
                                "title": "Weightage (%)",
                                "value": "10",
                                "visible": true,
                                "editable": true,
                                "isTA": false,
                                "isDrpD": true,
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
              }
              
              
        };
            var oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel, "myGoal");
           
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