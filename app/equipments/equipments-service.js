(function () {
    'use strict';

    angular.module('equipments')
        .service('equipments.service', ['$q', equipmentsService]);
    function equipmentsService($q) {
        var equipments =
            [
                {

                    name: 'High Definition Video Camera',
                    items: [
                        'Sony EX1 Solid State Camcorder 1/2" CMOS',
                        'Canon XH-A1 HDV Tape Camcorder 1/3" CCD'
                    ]

                },
                {

                    name: 'Digital Slr/Mirrorless',
                    items: [
                        'Canon 60D Body',
                        'Panasonic GH2 Mirrorless Body',
                        'Panasonic GH3 Mirrorless Body (with Metabones EF>M43 Active Speedbooster)'
                    ]

                },
                {

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

                },
                {

                    name: 'Lens Filtration',
                    items: [
                        '77mm Tiffen Variable Neutral Density',
                        '77mm Tiffen Circular Polarizer',
                        '77mm Tiffen 1/8 Black Pro Mist',
                        'Assorted 77mm step-up rings'
                    ]

                },
                {
                    name: 'Camera Support',
                    items: [
                        'Cartoni FocusHD Tripod Head with Aluminium "Smart Stop" Legs',
                        'Cinevate DSLR Handheld Rig with Shoulder Pad',
                        'Trusmt NF4 Follow Focus (with whip)',
                        '15mm Cinevate Carbon Fiber Rod support'
                    ]
                },
                {
                    name: 'Audio',
                    items: [
                        'Sennheiser G2 Wireless Lavalier (Omnidirectional)',
                        'Rode NTG-2 Shotgun Mic',
                        'Rode Video Mic',
                        'JuicedLink CX211 Audio Mixer/Preamp for DSLR',
                        'Tascam DR-40 Handheld Recorder'

                    ]
                },
                {
                    name: 'Lighting',
                    items: [
                        '2\' 4Bank Kino Flo',
                        '(2x) 200w LTW Fresnel',
                        '650w Mole-Richardson Fresnel',
                        '(1x) Lowel DP (up to 1000w)',
                        '(1x) Lowel Tota (up to 750w)',
                        'Small Chimera Softbox',
                        'Litepanels Micro LED Sungun'
                    ]
                },
                {
                    name: 'Grip',
                    items: [
                        '(1x) Matthews Grip Stand (with removable turtle base)',
                        'Assorted Lighting Stands',
                        '(3x) Grip Heads',
                        '(2x) Long 40" Grip Arms',
                        'Short 20" Grip Arm',
                        '(2x) Full Apple Boxes',
                        '(3x) Sandbags',
                        '(2x) Scissor Clamps for drop ceilings',
                        '(2x) Mafer Clamps',
                        'Matthews Road Rags 24x36" Flag Kit',
                        'Chimera 4x4 Collapsible Frame (with Silver/Black & Silk fabric)',
                        'Nori SquareBounce (Silver & White)',
                        'Lastolite 48" Circular Reflector (Silver/White)'
                    ]
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
