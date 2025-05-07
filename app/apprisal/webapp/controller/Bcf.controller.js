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

        


    });
});