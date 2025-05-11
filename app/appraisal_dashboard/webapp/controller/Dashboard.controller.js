sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/json/JSONModel"
], function (Controller, Filter, JSONModel) {
    "use strict";

    return Controller.extend("appraisaldashboard.controller.Dashboard", {
        onInit: function () {
            // Create and set model with a name ("vModel")
            var vModel = new JSONModel({
                arRating: false,
                arValue: null,
                reRating: false,
                reValue: null,
                bCurve: false,
                attachVisible: false,
                uploadFile:false,
                attachEdit:false
                
            });
            this.getView().setModel(vModel, "vModel");
        },

        onFilterSelect: function (oEvent) {
            var sKey = oEvent.getParameter("key");
            var model = this.getView().getModel("vModel");

            if (sKey === "AE") {
                console.log("AE selected");
                model.setProperty("/arRating", false);
                model.setProperty("/reRating", false);
                model.setProperty("/bCurve", false);
                model.setProperty("/attachEdit", false);
                model.setProperty("/uploadFile", false);
                
                

            } else if (sKey === "AR") {
                console.log("AR selected");
                model.setProperty("/bCurve", true);
                model.setProperty("/arRating", true);
                model.setProperty("/reRating", false);
                model.setProperty("/attachEdit", true);
                model.setProperty("/uploadFile", false);
                
                
            } else if (sKey === "RE") {
                console.log("RE selected");
                model.setProperty("/bCurve", true);
                model.setProperty("/arRating", false);
                model.setProperty("/reRating", true);

                

            }



        },
        onSelectionChange: function(oEvent){
            let array = ['EEE', 'FEE']
            let model = this.getView().getModel("vModel");
            let oValidatedComboBox = oEvent.getSource()
			let	sSelectedKey = oValidatedComboBox.getSelectedKey()
			let	sValue = oValidatedComboBox.getValue();
            if(array.includes(sValue)){
                model.setProperty("/attachVisible", true);
                model.setProperty("/uploadFile", true);
                model.setProperty("/attachEdit", true);

            return
                
            } 
            model.setProperty("/attachVisible", false);
            model.setProperty("/uploadFile", false);
            model.setProperty("/attachEdit", false);
        }
    });
});
