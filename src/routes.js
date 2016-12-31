routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'stores',
    url: '/stores',
    resolve: {
      stores: ['storesService', (storesService) => storesService.getStores()]
    }, 
    
    component: 'stores'
    
  });

  $stateProvider.state({
    name: 'stores.store',
    url: '/detail/:id',
    resolve: {
      id: ['$transition$', t => t.params().id],
      store: ['$transition$', 'storesService', (t, stores) => stores.get(t.params().id)],
      pets: [ 'petService', (petService) => petService.getPets() ]
    }, 
    
    // views: {
    //   addpet: {
    //     component: 'storesStoreAddpet'
    //   }
    // },
    
    component: 'storesStore'
    
  });


  $stateProvider.state({
    name: 'stores.store.addpet',
    url: '/addpet',
    component: 'storesStoreAddpet'
    
  });

  $stateProvider.state({
    name: 'stores.add',
    url: '/add',
    component: 'storesAdd'
    
  });

  $urlRouterProvider.otherwise( '/stores' );

}

