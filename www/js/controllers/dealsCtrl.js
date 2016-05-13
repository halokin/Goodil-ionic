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
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
      category:{
        name: "Ameublement",
        logo: "http://www.bassin-neufchateau.fr/images/Logo%20Mobilier.JPG",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
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
      name: "But La Loupe",
      type:"Grande surface",
      city: "28240 La Loupe",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
      category:{
        name: "Ameublement",
        logo: "http://www.bassin-neufchateau.fr/images/Logo%20Mobilier.JPG",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
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
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
      category:{
        name: "Ameublement",
        logo: "http://www.bassin-neufchateau.fr/images/Logo%20Mobilier.JPG",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
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
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
      category:{
        name: "Ameublement",
        logo: "http://www.bassin-neufchateau.fr/images/Logo%20Mobilier.JPG",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
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
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
      category:{
        name: "Ameublement",
        logo: "http://www.bassin-neufchateau.fr/images/Logo%20Mobilier.JPG",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
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
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
      category:{
        name: "Ameublement",
        logo: "http://www.bassin-neufchateau.fr/images/Logo%20Mobilier.JPG",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
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
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
      category:{
        name: "Ameublement",
        logo: "http://www.bassin-neufchateau.fr/images/Logo%20Mobilier.JPG",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
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
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
      category:{
        name: "Ameublement",
        logo: "http://www.bassin-neufchateau.fr/images/Logo%20Mobilier.JPG",
      },
      brand: {
        name: "But",
        description: " Magasin ameublement",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo-BUT.svg/1024px-Logo-BUT.svg.png",
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
