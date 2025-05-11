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
                var _aData = that._aData;

                if (oData.ackTSC)
                {   
                    _aData[0].Editable =  oData.ackTSCEdit;  
                    aAck.push(_aData[0]);
                }   
                if (oData.ackFFMC)
                {   
                    _aData[1].Editable =  oData.ackFFMCEdit;  
                    aAck.push(_aData[1]);
                } 
                if (oData.ackSFMC)
                {   
                    _aData[2].Editable =  oData.ackSFMCEdit;  
                    aAck.push(_aData[2]);
                } 
                if (oData.ackANC)
                {   
                    _aData[3].Editable =  oData.ackANCEdit;  
                    aAck.push(_aData[3]);
                } 

                that.getView().getModel("PreDefineGoal").setProperty("/Acknowledgements",aAck);

              }).catch(function (oError) {
                console.error("Failed to load product:", oError);
              });
		}
    });
});