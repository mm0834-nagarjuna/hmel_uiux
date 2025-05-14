sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox",
    
], (Controller,Fragment,MessageBox) => {
    "use strict";

    return Controller.extend("apprisal.controller.OverallRemarks", {
        onInit() {
              let oData = {
                "Other_Remarks": {
                  "CO": {
                    "nodes": [
                      {
                        "key": "KRA",
                        "text": "Key Result Area",
                        "value": "Key Result Area Value",
                        "nodes": [
                          {
                            "key": "V1",
                            "text": "Vivek",
                            "value": "Appraiser Remark 1"
                          },
                          {
                            "key": "V2",
                            "text": "Vivek",
                            "value": "Appraiser Remark 2"
                          },
                          {
                            "key": "AB",
                            "text": "Abhishek",
                            "value": "Appraiser Remark 2"
                          }
                        ]
                      },
                      {
                        "key": "KRA",
                        "text": "Key Result Area",
                        "value": "Key Result Area Value",
                        "nodes": [
                          {
                            "key": "V1",
                            "text": "Vivek",
                            "value": "Appraiser Remark 1"
                          },
                          {
                            "key": "V2",
                            "text": "Vivek",
                            "value": "Appraiser Remark 2"
                          },
                          {
                            "key": "AB",
                            "text": "Abhishek",
                            "value": "Appraiser Remark 2"
                          }
                        ]
                      }
                    ]
                  }
                }
              }
              
              var oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel, "oRemarks");
        },

        onInfoTimeSpentPress: function () {
			MessageBox.information("Targets, Behavioural Competency, Individual Development Plan, Accomplishments");
		},   

    });
});