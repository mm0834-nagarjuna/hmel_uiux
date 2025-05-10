sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",    
    "sap/ui/model/json/JSONModel"
    
], (Controller,Fragment,JSONModel) => {
    "use strict";

    return Controller.extend("apprisal.controller.Idp", {
        onInit() {
            // HTML string bound to the formatted text control
             var oModel = new JSONModel({
                 HTML : 
                 "<p>Use the following pointers while filling your Individual Development Plan:</p>" +
                 "<ul><li><h5>Purpose</h5>IDP helps align your career goals with organizational growth. Focus on both short- and long-term development.</li>"+
                 "<li><h5>Areas to Cover</h5>Technical skills, behavioral competencies, leadership, certifications</li>" +
                 "<li><h5>Development Actions</h5>Specific, Measurable, Achievable, Relevant, Time-bound</li>" +
                 "<li><h5>Discuss with Manager</h5>Attend training, take up new projects, seek mentorship, self-study.</li>" +
                 "<li><h5>Set SMART Goals</h5>Align your plan with team goals and get feedback/support</li>" +
                 "<li><h5>Track Progress</h5>Review regularly and update based on your growth</li>" +
                 "<li><h5>Dos & Don’ts</h5>Be honest & proactive avoid vague or copy-pasted goals</li></ul>"}); 
             this.getView().setModel(oModel);
     },
     onClickGuideline: function (oEvent) {

        var oButton = oEvent.getSource(),
        oView = this.getView();

        if (!this._pDialog1) {
            this._pDialog1 = Fragment.load({
                id: oView.getId(),
                name: "apprisal.fragment.Guideline",
                controller: this
            }).then(function(oDialog){
                oView.addDependent(oDialog);
                return oDialog;
            });
        }

        this._pDialog1.then(function(oDialog){
            oDialog.open();
        }.bind(this));
    },
    onClickGuidelineCancel: function () {
        if (this._pDialog1) {
           this._pDialog1.then(function(oDialog){
                oDialog.close();
            }.bind(this));
        }
    },
    onClickScoreInfo: function (oEvent) {

        var oButton = oEvent.getSource(),
        oView = this.getView();

        if (!this._pDialog) {
            this._pDialog = Fragment.load({
                id: oView.getId(),
                name: "apprisal.fragment.Bce_score",
                controller: this
            }).then(function(oDialog){
                oView.addDependent(oDialog);
                return oDialog;
            });
        }

        this._pDialog.then(function(oDialog){
            // oDialog.setMultiSelect(true);
            oDialog.open();
        }.bind(this));
    },
    onClickCancelScoreInfo: function () {
        var oView = this.getView();
        var oDialog = oView.byId("idBceScoreInfoDialog");
        if (oDialog) {
            oDialog.close();
        }
    },
        


    });
});