function dealsCtrl($scope, $stateParams, $ionicSlideBoxDelegate) {

	$scope.toggleStar = function(deal) {
                    deal.star = !deal.star;
                };


  $scope.deals = [{
    id: "1",
    name: "Offre de Noel",
    start_date: "25/12/2016",
    end_date: "26/12/2016",
    img: "./img/pub/but1.jpg",
    description: "super promo Noel",
    shop: {
      name: "But La Loupe",
      type:"Grande surface",
      city: "28240 La Loupe",
      logo: "./img/shop-logo/But.png",
      category:{
        name: "Ameublement",
        logo: "./img/icons-categories/ameublement.jpg",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "./img/shop-logo/But.png",
        created_at: "12/05/2016",
      }
    },
  },
  {
    id: "2",
    name: "Offre Boulanger",
    start_date: "25/12/2016",
    end_date: "26/12/2016",
    img: "./img/pub/boulangerannonce1.jpg",
    description: "super promo paques",
    shop: {
      name: "Boulanger La Loupe",
      type:"Grande surface",
      city: "28240 La Loupe",
      logo: "./img/shop-logo/Boulanger.png",
      category:{
        name: "Ameublement",
        logo: "./img/icons-categories/culture.png",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "./img/shop-logo/Boulanger.png",
        created_at: "12/05/2016",
      }
    },
  },
  {
    id: "3",
    name: "Offre Bouygues immo",
    start_date: "25/12/2016",
    end_date: "26/12/2016",
    img: "./img/pub/bouyguesimmo1.jpg",
    description: "super promo Printemps",
    shop: {
      name: "But La Loupe",
      type:"Grande surface",
      city: "28240 La Loupe",
      logo: "./img/shop-logo/Carrefour.jpg",
      category:{
        name: "Ameublement",
        logo: "./img/icons-categories/culture.png",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "./img/shop-logo/Carrefour.jpg",
        created_at: "12/05/2016",
      }
    },
  },
  {
    id: "4",
    name: "Offre ciné pathé",
    start_date: "25/12/2016",
    end_date: "26/12/2016",
    img: "./img/pub/cinepathe.jpg",
    description: "super promo été",
    shop: {
      name: "But La Loupe",
      type:"Grande surface",
      city: "28240 La Loupe",
      logo: "./img/shop-logo/E-Leclerc.jpg",
      category:{
        name: "Ameublement",
        logo: "./img/icons-categories/artisan.jpg",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "./img/shop-logo/E-Leclerc.jpg",
        created_at: "12/05/2016",
      }
    },
  },
  {
    id: "5",
    name: "Offre de maintenant",
    start_date: "25/12/2016",
    end_date: "26/12/2016",
    img: "./img/pub/but1.jpg",
    description: "super promo maintenant",
    shop: {
      name: "But La Loupe",
      type:"Grande surface",
      city: "28240 La Loupe",
      logo: "./img/shop-logo/Fnac.jpg",
      category:{
        name: "Ameublement",
        logo: "./img/icons-categories/loisirs.png",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "./img/shop-logo/Fnac.jpg",
        created_at: "12/05/2016",
      }
    },
  },
  {
    id: "6",
    name: "Offre de demain",
    start_date: "25/12/2016",
    end_date: "26/12/2016",
    img: "./img/pub/but1.jpg",
    description: "super promo demain",
    shop: {
      name: "But La Loupe",
      type:"Grande surface",
      city: "28240 La Loupe",
      logo: "./img/shop-logo/Lidl_logo.png",
      category:{
        name: "Ameublement",
        logo: "./img/icons-categories/restauration.jpg",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "./img/shop-logo/Lidl_logo.png",
        created_at: "12/05/2016",
      }
    },
  },
  {
    id: "7",
    name: "Offre de apres-demain",
    start_date: "25/12/2016",
    end_date: "26/12/2016",
    img: "./img/pub/but1.jpg",
    description: "super promo apres-demain",
    shop: {
      name: "But La Loupe",
      type:"Grande surface",
      city: "28240 La Loupe",
      logo: "./img/shop-logo/McDonalds.png",
      category:{
        name: "Ameublement",
        logo: "./img/icons-categories/auto.png",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "./img/shop-logo/McDonalds.png",
        created_at: "12/05/2016",
      }
    },
  },
  {
    id: "8",
    name: "Offre de la veille",
    start_date: "25/12/2016",
    end_date: "26/12/2016",
    img: "./img/pub/but1.jpg",
    description: "super promo veille",
    shop: {
      name: "But La Loupe",
      type:"Grande surface",
      city: "28240 La Loupe",
      logo: "./img/shop-logo/Peugeot.jpg",
      category:{
        name: "Ameublement",
        logo: "./img/icons-categories/picto-supermarche.png",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "./img/shop-logo/Peugeot.jpg",
        created_at: "12/05/2016",
      }
    },
  }];


   	if ($stateParams.aId){
   		var count;
	   	for (count = 0; count < $scope.deals.length; count ++){
	   		if ($scope.deals[count].id == $stateParams.aId)
	   			break;
	   	}
	   	setTimeout(function() {
                $ionicSlideBoxDelegate.slide(count);
                $ionicSlideBoxDelegate.update();
                $scope.$apply();
         });
 	}

}
