sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox",
    
], (Controller,Fragment,MessageBox) => {
    "use strict";

    return Controller.extend("apprisal.controller.OverallRemarks", {
        onInit() {
           
        },

        onInfoTimeSpentPress: function () {
			MessageBox.information("Targets, Behavioural Competency, Individual Development Plan, Accomplishments");
		},   

    });
});