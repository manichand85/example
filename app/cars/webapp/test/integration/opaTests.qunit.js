sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/mani/chand/cars/test/integration/FirstJourney',
		'com/mani/chand/cars/test/integration/pages/carsList',
		'com/mani/chand/cars/test/integration/pages/carsObjectPage'
    ],
    function(JourneyRunner, opaJourney, carsList, carsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/mani/chand/cars') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecarsList: carsList,
					onThecarsObjectPage: carsObjectPage
                }
            },
            opaJourney.run
        );
    }
);