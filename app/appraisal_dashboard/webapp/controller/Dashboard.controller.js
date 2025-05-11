sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/json/JSONModel"
], function (Controller, Filter, JSONModel) {
    "use strict";

    return Controller.extend("appraisaldashboard.controller.Dashboard", {
        onInit: function () {
          
            var vModel = new JSONModel({
                arRating: false,
                reRating: false,
                bCurve: false,
                attachVisible: false,
                attachEdit:false,
                textVisible:false
                
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

                
                

            } else if (sKey === "AR") {
                console.log("AR selected");
                model.setProperty("/bCurve", true);
                model.setProperty("/arRating", true);
                model.setProperty("/reRating", false);
                model.setProperty("/attachEdit", true);

                
                
            } else if (sKey === "RE") {
                console.log("RE selected");
                model.setProperty("/bCurve", true);
                model.setProperty("/arRating", false);
                model.setProperty("/reRating", true);
                model.setProperty("/attachEdit", false);
                

                

            }



        },
        
        formatter: {
            checkText : function(oText){
                if(oText === 'EEE' || oText === 'FEE'){
                    return false
                }
                return true
                
            },
            visiblitiy: function(oText){
                if(oText === 'EEE' || oText === 'FEE'){
                    return true
                }
                console.log(oText)
                return false
                
            }
        }
    });
});
