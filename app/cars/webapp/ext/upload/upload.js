sap.ui.define(
    ["sap/m/MessageToast", "sap/ui/core/mvc/View"],
    function (MessageToast, View) {
      "use strict";
  
      return {
        uploadFile: function () {
          var currentView = this.editFlow.getView();
          var fileDialog = currentView.byId("fileDialog");
  
          if (!fileDialog) {
            View.create({
              viewName: "weekendtask.view.Dialog",
              type: sap.ui.core.mvc.ViewType.XML,
            }).then(function (createdDialog) {
              currentView.addDependent(createdDialog);
              fileDialog = createdDialog.byId("fileDialog");
  
              if (fileDialog) {
                fileDialog.open();
              } else {
                console.error("Failed to open the dialog.");
              }
            });
          } else {
            fileDialog.open();
          }
        },
      };
    }
  );
  