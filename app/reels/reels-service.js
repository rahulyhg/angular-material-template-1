(function(){
  'use strict';

  angular.module('reels')
         .service('reelsService', ['$q', ReelsService]);
// You can use aspect ratio tags here:  https://support.google.com/youtube/answer/146402?hl=en
  function ReelsService($q){
    var fictionReels = [
      {
        name: 'March Family Letters - Webseries Season 1 (2015)',
        director: 'M. MacKay & S. Litt',
        role: 'Cinematographer',
        equipment: 'Canon 5Dmk3',
        description: '50 episode season, ongoing',
        url: 'https://youtu.be/1GoGcG1vpcM'
      },
      {
        name: 'J & J (2014)',
        director: 'N. Cohen & H. Wan',
        role: 'Co-Director & Cinematographer ',
        equipment: 'Canon 60D',
        description: '',
        url: 'https://youtu.be/IpK8w8SxD5I'
      },
      {
        name: 'Rinse & Repeat (2013)',
        director: 'M. Moliterni',
        role: "Cinematographer",
        equipment: 'Canon 60D',
        description: 'OFFICIAL SELECTION - NSI ONLINE FILM FESTIVAL',
        url: 'https://youtu.be/Ci0iiS66uSc'
      }
    ];

    var nonFictionReels = [
      {
        name: 'Faculty of Nursing - Preceptor Promo (2014)',
        director: 'H. Wan',
        role: 'Director & Co-Cinematographer',
        equipment: 'Panasonic GH3/Canon 60D',
        description: '',
        url: 'https://youtu.be/XxuqCPDdiao'
      },
      {
        name: 'GLHF A Canadian "eSports" Story (2014)',
        director: '',
        role: 'Co-Cinematographer',
        equipment: 'Canon 60D/7D',
        description: 'PREMIERED AT 2014 CANNES COURT MÉTRAGE',
        url: 'https://youtu.be/49D9bI38K1U'
      },
      {
        name: 'Intel Canada @ Toronto Digifest (2014)',
        director: 'H. Wan',
        role: "Director & Co-Cinematographer",
        equipment: 'Panasonic GH3/Canon 60D',
        description: '',
        url: 'https://youtu.be/ypeuFt-l2Dk'
      }
    ];

    // Promise-based API
    return {
      loadFictionReels : function() {
        // Simulate async nature of real remote calls
        return $q.when(fictionReels);
      },
      loadNonfictionReels:function(){
        return $q.when(nonFictionReels);
      }
    };
  }

})();
