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
                arRating: true,
                reRating: false,
                hodRating: false
            });
            this.getView().setModel(vModel, "vModel");
        },

        onFilterSelect: function (oEvent) {
            var sKey = oEvent.getParameter("key");
            var model = this.getView().getModel("vModel");

             if (sKey === "RE") {
                console.log("RE selected");
                model.setProperty("/arRating", false);
                model.setProperty("/reRating", true);
                model.setProperty("/hodRating", false);
            } else if (sKey === "HOD") {
                console.log("HOD selected");
                model.setProperty("/arRating", false);
                model.setProperty("/reRating", false);
                model.setProperty("/hodRating", true);
            } else {
                console.log("AR selected");
                model.setProperty("/arRating", true);
                model.setProperty("/reRating", false);
                model.setProperty("/hodRating", false);
            }


        }
    });
});
