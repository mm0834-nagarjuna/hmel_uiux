sap.ui.define([
    "sap/ui/core/mvc/Controller",

], (Controller) => {
    "use strict";

    return Controller.extend("apprisal.controller.Ack", {

        _aData : [{
            "Sno": 1,
            "Stage": "Target Setting Confirmation By Appraisee",
            "Status": "Yes",
            "Editable": "false"
          },
          {
            "Sno": 2,
            "Stage": "First Four Monthly Confirmation By Appraisee",
            "Status": "Yes",
            "Editable": "false"
          },
          {
            "Sno": 3,
            "Stage": "Second Four Monthly Confirmation By Appraisee",
            "Status": "Yes",
            "Editable": "false"
          },
          {
            "Sno": 4,
            "Stage": "Annual Confirmation By Appraisee",
            "Status": "No",
            "Editable": "false"
          }],

        onInit() {
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("apprisalDetail").attachPatternMatched(this.onObjectMatched, this);
		},

		onObjectMatched(oEvent) {

            var that = this;
            const oModel = this.getView().getModel("apprisalData"); // default OData V4 model
            const oContextBinding = oModel.bindContext("/appraisal(index="+oEvent.getParameter("arguments").index+",appraisalId="+oEvent.getParameter("arguments").appId+")");


			oContextBinding.requestObject().then(function (oData) {
                var aAck  = [];

                // if (oData.)
                // {   
                //     _aData[0].Editable =  oData.;  
                //     aAck.push(_aData[0]);
                // }   
                // if (oData.)
                // {   
                //     _aData[0].Editable =  oData.;  
                //     aAck.push(_aData[0]);
                // } 

                that.getView().getModel("PreDefineGoal").setProperty("/Acknowledgements",aAck);

              }).catch(function (oError) {
                console.error("Failed to load product:", oError);
              });
		}
    });
});