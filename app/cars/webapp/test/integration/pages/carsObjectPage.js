sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.mani.chand.cars',
            componentId: 'carsObjectPage',
            contextPath: '/cars'
        },
        CustomPageDefinitions
    );
});