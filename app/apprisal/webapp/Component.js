sap.ui.define([
    "sap/ui/core/UIComponent",
    "apprisal/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("apprisal.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
            var static_data= {
                "key":"Hii tytttttttttttttttttttttt",
                "ig_goals": [
                  {
                    "ig_ksp_value": "Improve Technical Skills",
                    "ig_ksp_visible": true,
                    "ig_ksp_edit": true,
                    "ig_kpi_value": "Number of Certifications Completed",
                    "ig_kpi_visible": true,
                    "ig_kpi_edit": true,
                    "ig_target_value": "3 Certifications",
                    "ig_target_visible": true,
                    "ig_target_edit": true
                  },
                  {
                    "ig_ksp_value": "Enhance Client Communication",
                    "ig_ksp_visible": true,
                    "ig_ksp_edit": false,
                    "ig_kpi_value": "Client Feedback Score",
                    "ig_kpi_visible": true,
                    "ig_kpi_edit": false,
                    "ig_target_value": "≥ 4.5/5",
                    "ig_target_visible": true,
                    "ig_target_edit": false
                  },
                  {
                    "ig_ksp_value": "Contribute to Knowledge Base",
                    "ig_ksp_visible": true,
                    "ig_ksp_edit": true,
                    "ig_kpi_value": "Number of Articles Published",
                    "ig_kpi_visible": true,
                    "ig_kpi_edit": true,
                    "ig_target_value": "At least 5 Articles",
                    "ig_target_visible": true,
                    "ig_target_edit": true
                  },
                  {
                    "ig_ksp_value": "Mentor Juniors",
                    "ig_ksp_visible": true,
                    "ig_ksp_edit": false,
                    "ig_kpi_value": "Number of Mentees & Sessions",
                    "ig_kpi_visible": true,
                    "ig_kpi_edit": true,
                    "ig_target_value": "2 Mentees, 10 Sessions",
                    "ig_target_visible": true,
                    "ig_target_edit": true
                  },
                  {
                    "ig_ksp_value": "Optimize Personal Productivity",
                    "ig_ksp_visible": true,
                    "ig_ksp_edit": true,
                    "ig_kpi_value": "Task Completion Rate",
                    "ig_kpi_visible": true,
                    "ig_kpi_edit": false,
                    "ig_target_value": "≥ 95% Monthly",
                    "ig_target_visible": true,
                    "ig_target_edit": false
                  }
                ]
              };
              this.getModel("CustomData").setData(static_data);           
        }
    });
});