(function(){
  'use strict';

  angular.module('reels')
         .service('aboutService', ['$q', ReelsService]);
  function ReelsService($q){
    var about = {
      abilities: {
        camera: 'Skilled in Operating/Assisting Camera, Editing, and performing Grip & Electric duties',
        language: 'Fluent in English, French, Cantonese and Mandarin'
      },
      education: [
        {
          program: 'Bachelor of Arts, Radio and Television Arts',
          duration: '2007 - 2012',
          institution: 'Ryerson University'
        },
        {
          program: 'I.A.T.S.E. 667 Motion Picture Camera Assistant Workshop 1',
          duration: '2011 ',
          institution: 'Sheridan College'
        }
      ],
      awards:[
        {
          name: 'Winner',
          work: 'Fashion in Motion',
          competition: 'Whistler Film Festival / ELLE Canada 2014',
          role: 'Cinematographer'
        },
        {
          name: 'Best Film',
          work: 'Femme Brûlée',
          competition: 'Toronto 48 Hour Film Project 2014',
          role: 'Cinematographer'
        },
        {
          name: 'Best Cinatography',
          work: 'Desti-Nation',
          competition: 'Ryerson TARA Awards 2011',
          role: 'Cinematographer'
        }
      ],
      credits:[
        {
          name: 'MARCH FAMILY LETTERS',
          caption: 'Webseries',
          role: 'Operator/DP',
          director: 'Dir. M. MacKay & S. Litt'
        },
        {
          name: 'MOVIEPOSTERS.COM - "Break Up"',
          caption: 'Theatrical Spot',
          role: 'Operator/DP',
          director: 'Dir. M. Gorman'
        },
        {
          name: 'OUTtv SNOW QUEEN',
          caption: 'Broadcast Spot',
          role: 'Operator/DP',
          director: 'Dir. S. Patel'
        },
        {
          name: 'FEMME BRULEE ',
          caption: 'Short Film',
          role: 'Operator/DP',
          director: 'Dir. D. Reale'
        },
        {
          name: 'PARALLELS - "Civilization"',
          caption: 'MV',
          role: 'Operator/DP',
          director: 'Dir. M. Moliterni'
        },
        {
          name: 'TWO SOFT VOICES',
          caption: 'Short',
          role: 'Operator/DP',
          director: 'Dir. M. Patricio'
        },
      ]
    };

    // Promise-based API
    return {
      load : function() {
        return $q.when(about);
      }
    };
  }

})();
