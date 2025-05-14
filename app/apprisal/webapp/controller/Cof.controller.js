

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment",
], (Controller, MessageBox, Fragment) => {
    "use strict";

    return Controller.extend("apprisal.controller.Cof", {
        onInit() {
            var oData = {
                "COF": {
                    "KSP001": {

                        "nodes":
                            [
                                {
                                    "Key": "KSP",
                                    "value": "Key stratagic Priority value",
                                    "text": "Key stratagic Priority",
                                    "add": "sap-icon://add",
                                    "addText": 'Add KRA',

                                    "delete": "sap-icon://delete",
                                    "visible": true,
                                    "editable": true,
                                    "isTA": true,
                                    "isDrpD": false,
                                    "nodes": [
                                        {
                                            "Key": "KRA",
                                            "value": "Key Result Area value",
                                            "text": "Key Result Area",
                                            "add": null,
                                            "addText": null,

                                            "delete": null,
                                            "delete": null,
                                            "visible": true,
                                            "editable": true,
                                            "isTA": true,
                                            "isDrpD": false
                                        },
                                        {
                                            "Key": "KPI",
                                            "value": "Key Performance Index value",
                                            "text": "Key Performance Index",
                                            "add": null,
                                            "addText": null,

                                            "delete": null,
                                            "delete": null,
                                            "visible": true,
                                            "editable": true,
                                            "isTA": true,
                                            "isDrpD": false
                                        },
                                        {
                                            "Key": "Target",
                                            "value": "Target value",
                                            "text": "Annual Target",
                                            "add": null,
                                            "addText": null,

                                            "delete": null,
                                            "delete": null,
                                            "visible": true,
                                            "editable": true,
                                            "isTA": true,
                                            "isDrpD": false
                                        },
                                        {
                                            "Key": "FFMmilestone",
                                            "value": "First Four Monthly Milestones value",
                                            "text": "First Four Monthly Milestones",
                                            "add": null,
                                            "addText": null,
                                            "delete": null,
                                            "delete": null,
                                            "visible": true,
                                            "editable": true
                                        },
                                        {
                                            "Key": "SFMmilestone",
                                            "value": "Second Four Monthly Milestones value",
                                            "text": "Second Four Monthly Milestones",
                                            "add": null,
                                            "addText": null,
                                            "delete": null,
                                            "delete": null,
                                            "visible": true,
                                            "editable": true
                                        },


                                        {
                                            "Key": "FFMA:AE",
                                            "value": "First Four Monthly Achievement: Appraisee Value",
                                            "text": "First Four Monthly Achievement: Appraisee",
                                            "add": null,
                                            "addText": null,
                                            "delete": null,
                                            "delete": null,
                                            "visible": true,
                                            "editable": true,
                                            "isTA": true,
                                            "isDrpD": false
                                        }
                                        ,

                                        {
                                            "Key": "FFFedA:AE",
                                            "value": "First Four Monthly Feedback: Appraiser Value",
                                            "text": "First Four Monthly Feedback: Appraiser",
                                            "add": null,
                                            "addText": null,
                                            "delete": null,
                                            "delete": null,
                                            "visible": true,
                                            "editable": true,
                                            "isTA": true,
                                            "isDrpD": false
                                        },
                                        {
                                            "Key": "Weightage",
                                            "value": "5",
                                            "text": "Weightage  (%)",
                                            "add": null,
                                            "addText": null,
                                            "delete": null,
                                            "delete": null,
                                            "visible": true,
                                            "editable": true,
                                            "isTA": false,
                                            "isDrpD": true
                                        },
                                        {
                                            "field": "Appraiser_Score",
                                            "Key": "AS",
                                            "value": "5",
                                            "text": "Appraisee Score",
                                            "add": 'sap-icon://information',
                                            "addText": null,
                                            "addPress": 'onClickScoreInfo',
                                            "delete": null,
                                            "visible": true,
                                            "editable": true,
                                            "isTA": false,
                                            "isDrpD": true
                                        },
                                        {
                                            "field": "Appraiser_Score",
                                            "Key": "AS",
                                            "value": "5",
                                            "text": "Appraiser Score",
                                            "add": 'sap-icon://information',
                                            "addText": null,
                                            "addPress": 'onClickScoreInfo',
                                            "delete": null,
                                            "visible": true,
                                            "editable": true,
                                            "isTA": false,
                                            "isDrpD": true
                                        },

                                    ]
                                }

                            ]
                    },
                    "KSP002": {
                        "nodes": [
                            {
                                "Key": "KSP",
                                "value": "Key stratagic Priority value",
                                "text": "Key stratagic Priority",
                                "add": "sap-icon://add",
                                "delete": "sap-icon://delete",
                                "visible": true,
                                "editable": true,
                                "nodes": []
                            }
                        ]
                    }

                }
            };
            var oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel, "myGoal");

            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("apprisalDetail").attachPatternMatched(this.onObjectMatched, this);

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
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pDialog.then(function (oDialog) {
                oDialog.setMultiSelect(true);
                oDialog.open();
            }.bind(this));
        },

        onClickNew: function (oEvent) {

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
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pDialog.then(function (oDialog) {
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
        },
        onClickAddAppraiser: function () {
            var oView = this.getView();

            if (!this._pDialog3) {
                this._pDialog3 = Fragment.load({
                    name: "apprisal.fragment.AddApprasier",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pDialog3.then(function (oDialog) {
                oDialog.open();
            }.bind(this));
        },
        onClickAddAppraiserCancel: function () {
            this._pDialog3.then(function (oDialog) {
                oDialog.close();
            }.bind(this));
        },
        formatter: {
            isWght: function (oText) {
                if (oText === 'Weightage') {
                    return true
                }
                return false

            },
            isAS: function (oText) {
                if (oText === 'Weightage') {
                    return false
                }
                if (oText === 'AS') {
                    return true
                }

                return false
            },
            isTA: function (oText) {
                console.log(oText, 'Yes')
                if (oText === 'Weightage') {
                    return false
                }
                return true
            },
            btnvisiblitiy: function (oText) {
                if (oText === null) {
                    return false
                }
                return true
            },
            functionPress: function (oText) {
                console.log(oText)
            }

        },
        onObjectMatched(oEvent) {

            var that = this;
            const oModel = this.getView().getModel("apprisalData"); // default OData V4 model
            const oContextBinding = oModel.bindContext("/appraisal(index=" + oEvent.getParameter("arguments").index + ",appraisalId=" + oEvent.getParameter("arguments").appId + ")");

            console.log(oContextBinding)
            oContextBinding.requestObject().then(function (oData) {
                var aAck = [];
                var _aData = that._aData;
                console.log(_aData)
                if (oData.ackTSC) {
                    _aData[0].Editable = oData.ackTSCEdit;
                    aAck.push(_aData[0]);
                }
                if (oData.ackFFMC) {
                    _aData[1].Editable = oData.ackFFMCEdit;
                    aAck.push(_aData[1]);
                }
                if (oData.ackSFMC) {
                    _aData[2].Editable = oData.ackSFMCEdit;
                    aAck.push(_aData[2]);
                }
                if (oData.ackANC) {
                    _aData[3].Editable = oData.ackANCEdit;
                    aAck.push(_aData[3]);
                }

                that.getView().getModel("PreDefineGoal").setProperty("/Acknowledgements", aAck);

            }).catch(function (oError) {
                console.error("Failed to load product:", oError);
            });
        },
        onBtnPress: function (oEvent){
            var oButton = oEvent.getSource(),
                oView = this.getView();

            var sField = oButton.data("field");  
            switch (sField) {
                case 'Appraiser_Score':
                    this.onClickScoreInfo()
                    break;
            
                default:
                    break;
            }
        }

    });
});