function routes ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.deals', {
    url: '/deals',
    views: {
      'tab-deals': {
        templateUrl: 'templates/tab-deals.html',
        controller: 'dealsCtrl'
      }
    }
  })


  .state('tab.deal', {
    url: '/deals/:aId',
    views: {
      'tab-deals' : {
        templateUrl: 'templates/tab-deal.html', 
        controller: 'dealsCtrl'
      }
    }
  })

  .state('tab.deal', {
    url: '/deals/:aId/map',
    views: {
      'tab-deals' : {
        templateUrl: 'templates/tab-deal-map.html', 
        controller: 'dealsCtrl'
      }
    }
  })


     .state('tab.categories', {
    url: '/categories',
    views: {
      'tab-categories': {
        templateUrl: 'templates/tab-categories.html',
        controller: 'categoriesCtrl'
      }
    }
  })


.state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/deals');

};
