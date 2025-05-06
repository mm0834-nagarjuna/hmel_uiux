sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/GroupHeaderListItem"
    
], (Controller,GroupHeaderListItem) => {
    "use strict";

    return Controller.extend("apprisal.controller.Cof", {
        onInit() {
           
        },
        
        getGroup: function(oContext){
            return oContext.getProperty('COMP_DESC');
        },

        getGroupHeader: function (oGroup) {
            return new GroupHeaderListItem({
				title : oGroup.key
			});
        },

        onBeforeRendering : function(){
            this.byId("BcfTable").setSticky(["ColumnHeaders"]);
        }
        

        //2nd trail for dialog binding
        // onPreviousYearIG2: function (oEvent) {
        //     oView = this.getView();
        //     if (!this._pDialog) {
		// 		this._pDialog = Fragment.load({
		// 			id: "dialog",
		// 			name: "apprisal.view.IgDialog",
		// 			controller: this
		// 		}).then(function(oDialog){
        //             oDialog.setModel(oView.getModel("CustomData"));
        //             oDialog.open();
        //         }.bind(this));
		// 	}
        // },
        // Bttest:function(){
        //     console.log("Hi");
        // }
        // ,

// Select Dialog
        // onSelectDialogPress: function (oEvent) {
		// 	var oButton = oEvent.getSource(),
		// 		oView = this.getView();
		// 	if (!this._pDialog) {
		// 		this._pDialog = Fragment.load({
		// 			id: oView.getId(),
		// 			name: "apprisal.view.IgDialog",
		// 			controller: this
		// 		}).then(function(oDialog){
        //             oDialog.setModel(oView.getModel("PreDefineGoals"));
        //             oDialog.open();
        //         }.bind(this));
		// 	}


		// },

		// _configDialog: function (oButton, oDialog) {
		// 	// Multi-select if required
		// 	var bMultiSelect = !!oButton.data("multi");
		// 	oDialog.setMultiSelect(bMultiSelect);

		// 	var sCustomConfirmButtonText = oButton.data("confirmButtonText");
		// 	oDialog.setConfirmButtonText(sCustomConfirmButtonText);
		// },

        


    });
});