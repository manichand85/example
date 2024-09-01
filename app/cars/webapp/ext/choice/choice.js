sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        yours: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
