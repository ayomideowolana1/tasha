const Categories = [
  {
    name: "Cookware",
    items: [
      {
        id: 1.1,
        name: "Cookware set 1 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2.jpg"
      },
      {
        id: 1.2,
        name: "Cookware stainless steel",
        price: 250,
        url: "/assets/cookware/cooking-pots-2.jpg"
      },
      {
        id: 1.3,
        name: "Grill pan set  no stick",
        price: 250,
        url: "/assets/cookware/Grill pan 1.jpg"
      },
      {
        id: 1.4,
        name: "Egg poacher",
        price: 250,
        url: "/assets/cookware/Egg poacher 1.jpg"
      },
      {
        id: 1.5,
        name: "Cookware set 5 no stick",
        price: 250,
        url: "/assets/cookware/Group 16.jpg"
      },
      {
        id: 1.6,
        name: "Cookware set 6 no stick",
        price: 250,
        url: "/assets/cookware/Group 17.jpg"
      },
      {
        id: 1.7,
        name: "Cookware set 7 no stick",
        price: 250,
        url: "/assets/cookware/Group 18.jpg"
      },
      {
        id: 1.8,
        name: "Steamer",
        price: 250,
        url: "/assets/cookware/Group 42.jpg"
      }
    ]
  },
  {
    name: "Refridgeration",
    items: [
      {
        id: 2.1,
        name: "Refridgerator 1",
        price: 250,
        url: "/assets/Refrigeration/freezer1.jpg"
      },
      {
        id: 2.2,
        name: "Cookware set 2 no stick",
        price: 250,
        url: "/assets/Refrigeration/freezer2.jpg"
      },
      {
        id: 2.3,
        name: "Cookware set 3 no stick",
        price: 250,
        url: "/assets/Refrigeration/freezer3.jpg"
      },
      {
        id: 2.4,
        name: "Cookware set 4 no stick",
        price: 250,
        url: "/assets/Refrigeration/freezer4.png"
      },
      {
        id: 2.5,
        name: "Cookware set 5 no stick",
        price: 250,
        url: "/assets/Refrigeration/Group19.jpg"
      },
      {
        id: 2.6,
        name: "Cookware set 6 no stick",
        price: 250,
        url: "/assets/Refrigeration/Group20.jpg"
      },
      {
        id: 2.7,
        name: "Cookware set 7 no stick",
        price: 250,
        url: "/assets/Refrigeration/Group21.jpg"
      },
      {
        id: 2.8,
        name: "Cookware set 7 no stick",
        price: 250,
        url: "/assets/Refrigeration/Group22.jpg"
      }
    ]
  },
  {
    name: "Appliances",
    items: [
      {
        id: 3.1,
        name: "Coofee maker",
        price: 250,
        url: "/assets/Appliances/coffee-maker-3.jpg"
      },
      {
        id: 3.2,
        name: "Toaster",
        price: 250,
        url: "/assets/Appliances/Group 12.jpg"
      },
      {
        id: 3.3,
        name: "Cookware set 3 no stick",
        price: 250,
        url: "/assets/Appliances/Group 3.jpg"
      },
      {
        id: 3.4,
        name: "Cookware set 4 no stick",
        price: 250,
        url: "/assets/Appliances/Group 4.jpg"
      },
      {
        id: 3.5,
        name: "Cookware set 5 no stick",
        price: 250,
        url: "/assets/Appliances/Group 5.jpg"
      },
      {
        id: 3.6,
        name: "Cookware set 6 no stick",
        price: 250,
        url: "/assets/Appliances/Group 6.jpg"
      },
      {
        id: 3.7,
        name: "Cookware set 7 no stick",
        price: 250,
        url: "/assets/Appliances/Group 11.jpg"
      },
      {
        id: 3.8,
        name: "Electric Kettle",
        price: 250,
        url: "/assets/Appliances/Group 26.jpg"
      }
    ]
  },
  {
    name: "Food storage",
    items: [
      {
        id: 4.1,
        name: "Cookware set 1 no stick",
        price: 250,
        url: "/assets/food-storage/flask 2.jpg"
      },
      {
        id: 4.2,
        name: "Cookware set 2 no stick",
        price: 250,
        url: "/assets/food-storage/Group 31.jpg"
      },
      {
        id: 4.3,
        name: "Cookware set 3 no stick",
        price: 250,
        url: "/assets/food-storage/Group 29.jpg"
      },
      {
        id: 4.4,
        name: "Cookware set 4 no stick",
        price: 250,
        url: "/assets/food-storage/Group 30.jpg"
      },
      {
        id: 4.5,
        name: "Cookware set 5 no stick",
        price: 250,
        url: "/assets/food-storage/Group 32.jpg"
      },
      {
        id: 4.6,
        name: "Cookware set 6 no stick",
        price: 250,
        url: "/assets/food-storage/Group 33.jpg"
      },
      {
        id: 4.7,
        name: "Cookware set 7 no stick",
        price: 250,
        url: "/assets/food-storage/Group 34.jpg"
      }
    ]
  }
];

const store = angular.module("store", []);

store.controller("storeCtr", function($scope) {
  $scope.categories = Categories;
  $scope.cart = [];
  $scope.length = 0;
  $scope.total = 0;
  

  $scope.showCart = () => {
    let products = document.getElementById("products");
    let cart = document.getElementById("cart");
    cart.style.display = "block";
    products.style.display = "none";
    console.log(cart);
  };
  $scope.showProducts = () => {
    let products = document.getElementById("products");
    let cart = document.getElementById("cart");
    cart.style.display = "none";
    products.style.display = "block";
    console.log(products);
  };

  $scope.addToCart = item => {
    let cartArray = $scope.cart;
    // console.log(cartArray.indexOf(item));
    if (cartArray.indexOf(item) == -1) {
      $scope.cart = [...cartArray, item];
      $scope.length = $scope.cart.length;
      $scope.total = $scope.total + item.price;
    } else {
      alert("item already in cart");
    }
    console.log($scope.total);
  };

  $scope.removeFromCart = item => {
    console.log($scope.cart.indexOf(item));
    let newCart = $scope.cart.filter(cartitem => {
      return cartitem != item;
    });
    $scope.cart = newCart;
  };

  $scope.load = ()=>{
    console.log("loaded")
  }
});


function load(){
  
  
}


var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll(
    `#${slideshow.id} [role="list"] .slide`
  );

  var index = 0,
    time = 5000;
  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");

    index++;
    if (index === slides.length) index = 0;

    slides[index].classList.add("active");
  }, time);
}