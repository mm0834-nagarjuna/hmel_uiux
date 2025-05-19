

sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageBox",
  "sap/ui/core/Fragment",
], (Controller, MessageBox, Fragment) => {
  "use strict";

  return Controller.extend("apprisal.controller.Cof", {
    onInit() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("apprisalDetail").attachPatternMatched(this.onObjectMatched, this);

      this._addDropDownList()
    },
    onObjectMatched(oEvent) {

      var that = this;
      const oModel = this.getView().getModel("apprisalData");
      const oContextBinding = oModel.bindContext("/appraisal(index=" + oEvent.getParameter("arguments").index + ",appraisalId=" + oEvent.getParameter("arguments").appId + ")");

      console.log(oContextBinding)
      oContextBinding.requestObject().then(function (oData) {


        // console.log(oData)
        var oModel = new sap.ui.model.json.JSONModel(oData);
        that.getView().setModel(oModel, "Config");

        let _aData = that.UXData()

        console.log(_aData)
        var _aModel = new sap.ui.model.json.JSONModel(_aData);
        that.getView().setModel(_aModel, "myGoal");



      }).catch(function (oError) {
        console.error("Failed to load product:", oError);
      });
    },
    UXData: function () {
      var oData = {
        "COF": {
          "KSP002": {
            "nodes": [
              {
                "key": "KSP",
                "fieldVisible": "coFgKSP",
                "fieldEdit": "coFgKSPEdit",
                "title": "Key Strategic Priority",
                "value": "Key Strategic Priority value",
                "fieldIconVisible":' ',
                "visible": true,
                "editable": true,
                "isTA": false,
                "isDrpD": false,
                "addIcon": "sap-icon://add",
                "addText": "Add KRA",
                "addVisible": "addKRA",
                "deleteVisible": "deleteKRA",

                "nodes": [
                  {
                    "key": "KRA",
                    "fieldVisible": "coFgKSP",
                    "fieldEdit": "coFgKSPEdit",
                    "num": "1.1.1",
                    "title": "Key Result Area",
                    "value": "Key Result Area value",
                    "fieldIconVisible":' ',
                    "deleteIcon": "sap-icon://delete",
                    "addOtherAR": "addAppraiser",
                    "addVisible": "addKRA",
                   "deleteVisible": "deleteKRA",
                    "visible": true,
                    "editable": true,
                    "isTA": true,
                    "isDrpD": false,
                    "nodes": [
                      {
                        "key": "KPI",
                        "fieldVisible": "coFgKPI",
                        "fieldEdit": "coFgKPIEdit",
                        "title": "Key Performance Index",
                        "value": "Key Performance Index value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "Target",
                        "fieldVisible": "coFgTarget",
                        "fieldEdit": "coFgTargetEdit",
                        "title": "Annual Target",
                        "value": "Target value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "milestones",
                        "fieldVisible": "coFgTarget",
                        "fieldEdit": "coFgTargetEdit",
                        "title": "First Four Monthly Milestones",
                        "value": "First Four Monthly Milestones value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": false,
                        "isDrpD": false

                       
                      },
                      {
                        "key": "FFMA:AE",
                        "fieldVisible": "cofgffmaAE",
                        "fieldEdit": "cofgffmaAEEdit",
                        "title": "First Four Monthly Achievement: Appraisee",
                        "value": "First Four Monthly Achievement: Appraisee Value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "FFFedA:AE",
                        "fieldVisible": "cofgffmaAR",
                        "fieldEdit": "cofgffmaAREdit",
                        "title": "First Four Monthly Feedback: Appraiser",
                        "value": "First Four Monthly Feedback: Appraiser Value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "SFMA:AE",
                        "fieldVisible": "cofgsfmaAE",
                        "fieldEdit": "cofgsfmaAEEdit",
                        "title": "Second Four Monthly Achievement: Appraisee",
                        "value": "Second Four Monthly Achievement: Appraisee Value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "SFFedA:AE",
                        "fieldVisible": "cofgsfmaAR",
                        "fieldEdit": "cofgsfmaAREdit",
                        "title": "Second Four Monthly Feedback: Appraiser",
                        "value": "Second Four Monthly Feedback: Appraiser Value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "AA:AE",
                        "fieldVisible": "cofgaaAEE",

                        "fieldEdit": "cofgaaAEEdit",
                        "title": "Annual Achievement: Appraisee",
                        "value": "Annual Achievement: Appraisee Value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "AFedA:AE",
                        "fieldVisible": "cofgafAER",
                        "fieldEdit": "cofgafAEREdit",
                        "title": "Annual Feedback: Appraiser",
                        "value": "Annual Feedback: Appraiser Value",
                        "fieldIconVisible":' ',
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "Weightage",
                        "title": "Weightage (%)",
                        "fieldVisible": "coFgWeightage",
                        "fieldEdit": "coFgWeightageEdit",
                        "fieldIconVisible":' ',
                        "value": "10",
                        "visible": true,
                        "editable": true,
                        "isTA": false,
                        "isDrpD": true,

                        "key1": "Appraisee",
                        "title1": "Appraisee Score",
                        "fieldVisible1": "cofgaaAEE",
                        "fieldEdit1": "cofgselfAEScore",
                        "fieldIconVisible1": "cofgaaAEEIcon",
                        "value1": "10",
                        "visible1": true,
                        "editable1": true,
                        "isTA1": false,
                        "isDrpD1": true,

                        "key2": "Appraiser",
                        "title2": "Appraiser Score",
                        "fieldVisible2": "coFgARScore",
                        "fieldEdit2": "coFgARScoreEdit",
                        "fieldIconVisible2": "cofgafAERIcon",
                        "value2": "10",
                        "visible2": true,
                        "editable2": true,
                        "isTA2": false,
                        "isDrpD2": true,

                      }
                    ]
                  },
                  {
                    "key": "KRA",
                    "fieldVisible": "coFgKSP",
                    "fieldEdit": "coFgKSPEdit",
                    "num": "1.1.2",
                    "title": "Key Result Area",
                    "value": "Key Result Area value",
                    "deleteIcon": "sap-icon://delete",
                    "addOtherAR": "addAppraiser",
                    "addVisible": "addKRA",
                "deleteVisible": "deleteKRA",
                    "visible": true,
                    "editable": true,
                    "isTA": true,
                    "isDrpD": false,
                  }
                ]
              }
            ]
          },
          "KSP001": {
            "nodes": [
              {
                "key": "KSP",
                "fieldVisible": "coFgKSP",
                "fieldEdit": "coFgKSPEdit",
                "title": "Key Strategic Priority",
                "value": "Key Strategic Priority value",
                "fieldIconVisible":' ',
                "visible": true,
                "editable": true,
                "isTA": false,
                "isDrpD": false,
                "addIcon": "sap-icon://add",
                "addText": "Add KRA",
                "addVisible": "addKRA",
                "deleteVisible": "deleteKRA",

                "nodes": [
                  {
                    "key": "KRA",
                    "fieldVisible": "coFgKSP",
                    "fieldEdit": "coFgKSPEdit",
                    "num": "1.2.1",
                    "title": "Key Result Area",
                    "value": "Key Result Area value",
                    "fieldIconVisible":' ',
                    "deleteIcon": "sap-icon://delete",
                    "addOtherAR": "addAppraiser",
                    "addVisible": "addKRA",
                    "deleteVisible": "deleteKRA",
                    "visible": true,
                    "editable": true,
                    "isTA": true,
                    "isDrpD": false,
                    "nodes": [
                      {
                        "key": "KPI",
                        "fieldVisible": "coFgKPI",
                        "fieldEdit": "coFgKPIEdit",
                        "title": "Key Performance Index",
                        "value": "Key Performance Index value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "Target",
                        "fieldVisible": "coFgTarget",
                        "fieldEdit": "coFgTargetEdit",
                        "title": "Annual Target",
                        "value": "Target value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "FFMmilestone",
                        "fieldVisible": "coFgTarget",
                        "fieldEdit": "coFgTargetEdit",
                        "title": "First Four Monthly Milestones",
                        "value": "First Four Monthly Milestones value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": false,
                        "isDrpD": false
                      },
                      {
                        "key": "SFMmilestone",
                        "fieldVisible": "coFgTarget",
                        "fieldEdit": "coFgTargetEdit",
                        "title": "Second Four Monthly Milestones",
                        "value": "Second Four Monthly Milestones value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": false,
                        "isDrpD": false
                      },
                      {
                        "key": "FFMA:AE",
                        "fieldVisible": "cofgffmaAE",
                        "fieldEdit": "cofgffmaAEEdit",
                        "title": "First Four Monthly Achievement: Appraisee",
                        "value": "First Four Monthly Achievement: Appraisee Value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "FFFedA:AE",
                        "fieldVisible": "cofgffmaAR",
                        "fieldEdit": "cofgffmaAREdit",
                        "title": "First Four Monthly Feedback: Appraiser",
                        "value": "First Four Monthly Feedback: Appraiser Value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "SFMA:AE",
                        "fieldVisible": "cofgsfmaAE",
                        "fieldEdit": "cofgsfmaAEEdit",
                        "title": "Second Four Monthly Achievement: Appraisee",
                        "value": "Second Four Monthly Achievement: Appraisee Value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "SFFedA:AE",
                        "fieldVisible": "cofgsfmaAR",
                        "fieldEdit": "cofgsfmaAREdit",
                        "title": "Second Four Monthly Feedback: Appraiser",
                        "value": "Second Four Monthly Feedback: Appraiser Value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "AA:AE",
                        "fieldVisible": "cofgaaAEE",

                        "fieldEdit": "cofgaaAEEdit",
                        "title": "Annual Achievement: Appraisee",
                        "value": "Annual Achievement: Appraisee Value",
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "AFedA:AE",
                        "fieldVisible": "cofgafAER",
                        "fieldEdit": "cofgafAEREdit",
                        "title": "Annual Feedback: Appraiser",
                        "value": "Annual Feedback: Appraiser Value",
                        "fieldIconVisible":' ',
                        "fieldIconVisible":' ',
                        "visible": true,
                        "editable": true,
                        "isTA": true,
                        "isDrpD": false
                      },
                      {
                        "key": "Weightage",
                        "title": "Weightage (%)",
                        "fieldVisible": "coFgWeightage",
                        "fieldEdit": "coFgWeightageEdit",
                        "fieldIconVisible":' ',
                        "value": "10",
                        "visible": true,
                        "editable": true,
                        "isTA": false,
                        "isDrpD": true,

                        "key1": "Appraisee",
                        "title1": "Appraisee Score",
                        "fieldVisible1": "cofgaaAEE",
                        "fieldEdit1": "cofgselfAEScore",
                        "fieldIconVisible1": "cofgaaAEEIcon",
                        "value1": "10",
                        "visible1": true,
                        "editable1": true,
                        "isTA1": false,
                        "isDrpD1": true,

                        "key2": "Appraiser",
                        "title2": "Appraiser Score",
                        "fieldVisible2": "coFgARScore",
                        "fieldEdit2": "coFgARScoreEdit",
                        "fieldIconVisible2": "cofgafAERIcon",
                        "value2": "10",
                        "visible2": true,
                        "editable2": true,
                        "isTA2": false,
                        "isDrpD2": true,

                      }
                    ]
                  },
                  {
                    "key": "KRA",
                    "fieldVisible": "coFgKSP",
                    "fieldEdit": "coFgKSPEdit",
                    "num": "1.2.2",
                    "title": "Key Result Area",
                    "value": "Key Result Area value",
                    "deleteIcon": "sap-icon://delete",
                    "addOtherAR": "addAppraiser",
                    "addVisible": "addKRA",
                    "deleteVisible": "deleteKRA",
                    "visible": true,
                    "editable": true,
                    "isTA": true,
                    "isDrpD": false,
                  }
                ]
              }
            ]
          },
        }


      };
      return oData

    },
    _addDropDownList: function () {
      var weightComboBox = this.byId("weight");
      var AESCRComboBox = this.byId("AESCR");
      var ARSCRComboBox = this.byId("ARSCR");
      // var mweightComboBox = this.byId("mweight");
      // var mAESCRComboBox = this.byId("mAESCR");
      // var mARSCRComboBox = this.byId("mARSCR");

      for (var i = 3; i <= 50; i++) {
        var oItem = new sap.ui.core.Item({
          key: i.toString(),
          text: i
        });
        weightComboBox.addItem(oItem);
      }

      for (var i = 1; i <= 6; i++) {
        var oItem = new sap.ui.core.Item({
          key: i.toString(),
          text: i
        });
        AESCRComboBox.addItem(oItem);
      }

      for (var i = 1; i <= 6; i++) {
        var oItem = new sap.ui.core.Item({
          key: i.toString(),
          text: i
        });
        ARSCRComboBox.addItem(oItem);
      }

      // for (var i = 3; i <= 50; i++) {
      //     var oItem = new sap.ui.core.Item({
      //         key: i.toString(),
      //         text: i 
      //     });
      //     mweightComboBox.addItem(oItem);
      // }

      // for (var i = 1; i <= 6; i++) {
      //     var oItem = new sap.ui.core.Item({
      //         key: i.toString(),
      //         text: i 
      //     });
      //     mAESCRComboBox.addItem(oItem);
      // }

      // for (var i = 1; i <= 6; i++) {
      //     var oItem = new sap.ui.core.Item({
      //         key: i.toString(),
      //         text: i 
      //     });
      //     mARSCRComboBox.addItem(oItem);
      // }
    },

    // onClickCancel: function(){

    // },

    onClickPredefined: function (oEvent) {
      var oButton = oEvent.getSource(),
        oView = this.getView();

      if (!this._pDialog) {
        this._pDialog = Fragment.load({
          id: oView.getId(),
          name: "apprisal.fragment.CofPredefined",
          controller: this
        }).then(function (oDialog) {
          oView.addDependent(oDialog);
          return oDialog;
        });
      }

      this._pDialog.then(function (oDialog) {
        oDialog.setMultiSelect(true);
        oDialog.open();
      }.bind(this));
    },

    onClickNew: function (oEvent) {

    },

    // ----Function for calling Score Infor Dialog--------

    onClickScoreInfo: function (oEvent) {
      var oButton = oEvent.getSource(),
        oView = this.getView();

      if (!this._pDialog) {
        this._pDialog = Fragment.load({
          id: oView.getId(),
          name: "apprisal.fragment.Ig_Cof_score",
          controller: this
        }).then(function (oDialog) {
          oView.addDependent(oDialog);
          return oDialog;
        });
      }

      this._pDialog.then(function (oDialog) {
        // oDialog.setMultiSelect(true);
        oDialog.open();
      }.bind(this));
    },
    onClickCancelScoreInfo: function () {
      var oView = this.getView();
      var oDialog = oView.byId("idScoreInfoDialog");
      if (oDialog) {
        oDialog.close();
      }
    },
    onClickAddAppraiser: function () {
      var oView = this.getView();

      if (!this._pDialog3) {
        this._pDialog3 = Fragment.load({
          name: "apprisal.fragment.AddApprasier",
          controller: this
        }).then(function (oDialog) {
          oView.addDependent(oDialog);
          return oDialog;
        });
      }

      this._pDialog3.then(function (oDialog) {
        oDialog.open();
      }.bind(this));
    },
    onClickAddAppraiserCancel: function () {
      this._pDialog3.then(function (oDialog) {
        oDialog.close();
      }.bind(this));
    },
    formatter: {

      TAVisible: function (sField, oKey) {
        // console.log(oKey)
        // debugger

        if (this.getView().getModel("Config").getData()[sField]) {
          if (oKey) {
            if (oKey === 'Weightage' || oKey === 'milestones') {
              return false
            }
            if (oKey !== 'Weightage'  || oKey !== 'milestones') {
              return true
            }
           
            
            
            
            
          }
          return true
        } 
        
        return false
        // return this.getView().getModel("Config").getData()[sField]
      }

    },

    onBtnPress: function (oEvent) {
      var oButton = oEvent.getSource(),
        oView = this.getView();

      var sField = oButton.data("field");
      switch (sField) {
        case 'Appraiser_Score':
          this.onClickScoreInfo()
          break;

        default:
          break;
      }
    }

  });
});