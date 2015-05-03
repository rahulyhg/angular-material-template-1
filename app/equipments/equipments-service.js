(function () {
    'use strict';

    angular.module('equipments')
        .service('equipments.service', ['$q', equipmentsService]);
    function equipmentsService($q) {
        var equipments =
            [
                {
                    group: {
                        name: 'High Definition Video Camera',
                        items: [
                            'Sony EX1 Solid State Camcorder 1/2" CMOS',
                            'Canon XH-A1 HDV Tape Camcorder 1/3" CCD'
                        ]
                    }
                },
                {
                    group: {
                        name: 'Digital Slr/Mirrorless',
                        items: [
                            'Canon 60D Body',
                            'Panasonic GH2 Mirrorless Body',
                            'Panasonic GH3 Mirrorless Body (with Metabones EF>M43 Active Speedbooster)'
                        ]
                    }
                },
                {
                    group: {
                        name: 'Assorted Dslr Glass',
                        items: [
                            '(F) Nikkor 35mm f/2.0 Full Manual',
                            '(F) Nikkor 50mm f/1.4 Full Manual',
                            '(F) Nikkor 85mm f/1.8 Full Manual',
                            '(F) Nikkor 105mm f/2.5 Full Manual',
                            '(EF) Rokinon 24mm T1.5 Cine Full Manual',
                            '(EF-S) Tamron 17-50mm f/2.8 with VC',
                            '(EF) Canon 50mm f/1.8',
                            '(EF) Canon 70-200mm f/4.0 L with IS',
                            '(M43) Panasonic 14-42mm f/3.5-5.6 OIS',
                            '(M43) Sigma 19mm f/2.8',
                            'Assorted mount adapters'
                        ]
                    }
                },
                {
                    group: {
                        name: 'Lens Filtration',
                        items: [
                            '77mm Tiffen Variable Neutral Density',
                            '77mm Tiffen Circular Polarizer',
                            '77mm Tiffen 1/8 Black Pro Mist',
                            'Assorted 77mm step-up rings'
                        ]
                    }
                }

            ];

        // Promise-based API
        return {
            load: function () {
                return $q.when(equipments);
            }
        };
    }

})
();
