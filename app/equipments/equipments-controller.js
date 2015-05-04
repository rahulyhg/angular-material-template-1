(function(){

    angular
        .module('equipments')
        .controller('equipments.controller', [
            'equipments.service',
            EquipmentsController
        ]);

    function EquipmentsController( equipmentsService) {
        var self = this;
        self.equipments = [ ];

        self.calculateRowSpan = function(group){
            //console.log(group.items.length/4);
            var numberOfItems = group.items.length;
            return Math.ceil(numberOfItems + 2);
        };

        // Load all registered about

        equipmentsService.load()
            .then( function( equipments ) {
                self.equipments    = equipments;
            });

    }

})();
