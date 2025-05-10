sap.ui.define([
    "sap/ui/core/mvc/Controller",

], (Controller) => {
    "use strict";

    return Controller.extend("apprisal.controller.Scorecard", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel({
                Girish: "Scorecard of <span style='font-weight: bold;'>Girish Chandra Ghildiyal ( 100682 )</span>",
                Partha:  "Scorecard of <span style='font-weight: bold;'>Partha Chakraborty ( 100785 )</span>",
                Kushagra:   "Scorecard of <span style='font-weight: bold;'>Kushagra Verma ( 100056 )</span>"
            });
            this.getView().setModel(oModel, "scoreModel"); 
        }
    });
});