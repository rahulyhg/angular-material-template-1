(function(){

  angular
  .module('about')
  .controller('AboutController', [
    'aboutService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
    AboutController
    ]);

   function AboutController( aboutService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
    self.about = [ ];

    // Load all registered about

    aboutService.load()
    .then( function( about ) {
      self.about    = about;
    });

  }

})();
