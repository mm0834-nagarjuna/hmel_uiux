sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("apprisal.controller.Scorecard", {
        onInit() {
           	// HTML string bound to the formatted text control
               var oModel = new sap.ui.model.json.JSONModel({
                HTML: "Scorecard of <span style='font-weight: bold;'>Girish Chandra Ghildiyal ( 100682 )</span>"
            });
            this.getView().setModel(oModel, "scoreModel"); 
        }
    });
});