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

    onClickOtherAppriasersRemarks: function (oEvent) {
      // let oControl = oEvent.getSource(); 
      // let oText = oControl.getText();   
      let oView = this.getView();
  
     
      // if (oText && oText.includes("Goals")) {
          if (!this._pDialog) {
              this._pDialog = Fragment.load({
                  id: oView.getId(),
                  name: "apprisal.fragment.OtherAppraiserRemarks",
                  controller: this
              }).then(function(oDialog) {
                  oView.addDependent(oDialog);
                  return oDialog;
              });
          }
  
          this._pDialog.then(function(oDialog) {
              oDialog.open();
          }.bind(this));
      // } else {
          
      //     console.log("Link does not contain 'Goals'. Dialog not opened.");
      // }
  },
  onCloseOtherRemarksDialog : function () {
    this.byId('OthersremarksDialog').close()
},

    });
});