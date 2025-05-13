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
                textVisible:false,
                filterVisible:false,
                inputEnable: false,
                
            });
            this.getView().setModel(vModel, "vModel");
        },

        onFilterSelect: function (oEvent) {
            var sKey = oEvent.getParameter("key");
            var model = this.getView().getModel("vModel");

            if (sKey === "AE") {
                console.log("AE selected");
                model.setProperty("/arRating", false);
                model.setProperty("/inputEnable", false);
                model.setProperty("/reRating", false);
                model.setProperty("/filterVisible", false);
                model.setProperty("/attachEdit", false);
                console.log(this.getView().byId('selectYear').getProperty("selectedKey"))

                if ( !this.getView().byId('selectYear').getProperty("selectedKey")){
                    model.setProperty("/bCurve", true);
                } else {
                    model.setProperty("/bCurve", false);
                }
                
                

            } else if (sKey === "AR") {
                console.log("AR selected");
                model.setProperty("/inputEnable", true);
                model.setProperty("/arRating", true);
                model.setProperty("/reRating", false);
                model.setProperty("/attachEdit", true);
                model.setProperty("/filterVisible", true);
                
                if (this.getView().byId('selectYear').getProperty("selectedKey") === 'TS'){
                    model.setProperty("/bCurve", true);
                } else {
                    model.setProperty("/bCurve", false);
                }
                
                

                
                
            } else if (sKey === "RE") {
                console.log("RE selected");
                model.setProperty("/bCurve", true);
                model.setProperty("/inputEnable", true);
                model.setProperty("/arRating", false);
                model.setProperty("/reRating", true);
                model.setProperty("/attachEdit", false);
                model.setProperty("/filterVisible", true);

                if (this.getView().byId('selectYear').getProperty("selectedKey") === 'TS'){
                    model.setProperty("/bCurve", true);
                } else {
                    model.setProperty("/bCurve", false);
                }
                

                

            }



        },
        
        formatter: {
            checkText : function(oARText, oREText){
               if(oARText || oREText ){
                console.log(oARText, oREText)
                let distArray = ["EE", "FEE"]
                if((distArray.includes(oARText) && distArray.includes(oREText)) || (distArray.includes(oARText)) || (distArray.includes(oREText)) ){
                    return true
                }
                return false
                
               } 
               return false
            },
            checkText2:function(oARText, oREText){
                if(oARText || oREText ){
                    console.log(oARText, oREText)
                    let distArray = ["EE", "FEE"]
                    if((distArray.includes(oARText) && distArray.includes(oREText)) || (distArray.includes(oARText)) || (distArray.includes(oREText)) ){
                        model.setProperty("/attachEdit", true);
                        return true
                    }
                    model.setProperty("/attachEdit", false);
                return false
                    
                   } 
                   return true
            },
            visiblitiy: function(oText){
                console.log(oText)
                var model = this.getView().getModel("vModel");
                if(oText === 'EEE' || oText === 'FEE'){
                    
                    model.setProperty("/attachEdit", true);
                    return true
                }
                
                    model.setProperty("/attachEdit", false);
                return false
                
            }
        },
        onSelectChange: function(oEvent){
            console.log(oEvent)
            if (oEvent.getSource().getProperty("selectedKey") === 'TF' || oEvent.getSource().getProperty("selectedKey") === 'TT') {
                var model = this.getView().getModel("vModel");
                model.setProperty("/bCurve", false);
            } else {
                var model = this.getView().getModel("vModel");
                model.setProperty("/bCurve", true);
            }
            
        }
    });
});
