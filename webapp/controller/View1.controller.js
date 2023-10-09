sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel) {
        "use strict";

        return Controller.extend("comboboxnorthwind.controller.View1", {
            onInit: function () {
                
                this.oModel = new ODataModel("/V2/Northwind/Northwind.svc/");
                // this.getView().setModel(oModel);

                var that=this;
                // this.oModel=this.getOwnerComponent().getModel();
                this.oModel.read("/Customers", {
                    success: function(odata) { 
                      var oJson=new  sap.ui.model.json.JSONModel({tabdata:odata.results})
                      that.getView().byId("ID_CUST").setModel(oJson);
                     },
                    error: function(oError) { 
                        
                    }})
            },
            
            onComboBoxSelectionChange: function(oEvent) {
                var selectedKey = oEvent.getParameter("selectedItem").getKey();
            }
        });
    });