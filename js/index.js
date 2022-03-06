const Categories = [
  {
    name: "Cookware",
    items: [
      {
        id: 1,
        name: "Cookware set 1 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2.jpg"
      },
      {
        id: 2,
        name: "Cookware stainless steel",
        price: 250,
        url: "/assets/cookware/cooking-pots-2.jpg"
      },
      {
        id: 3,
        name: "Grill pan set  no stick",
        price: 250,
        url: "/assets/cookware/Grill pan 1.jpg"
      },
      {
        id: 4,
        name: "Egg poacher",
        price: 250,
        url: "/assets/cookware/Egg poacher 1.jpg"
      },
      {
        id: 5,
        name: "Cookware set 5 no stick",
        price: 250,
        url: "/assets/cookware/Group 16.jpg"
      },
      {
        id: 6,
        name: "Cookware set 6 no stick",
        price: 250,
        url: "/assets/cookware/Group 17.jpg"
      },
      {
        id: 7,
        name: "Cookware set 7 no stick",
        price: 250,
        url: "/assets/cookware/Group 18.jpg"
      },
      {
        id: 7,
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
        id: 1,
        name: "Cookware set 1 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 2,
        name: "Cookware set 2 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 3,
        name: "Cookware set 3 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 4,
        name: "Cookware set 4 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 5,
        name: "Cookware set 5 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 6,
        name: "Cookware set 6 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 7,
        name: "Cookware set 7 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      }
    ]
  },
  {
    name: "Appliances",
    items: [
      {
        id: 1,
        name: "Cookware set 1 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 2,
        name: "Cookware set 2 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 3,
        name: "Cookware set 3 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 4,
        name: "Cookware set 4 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 5,
        name: "Cookware set 5 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 6,
        name: "Cookware set 6 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 7,
        name: "Cookware set 7 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      }
    ]
  },
  {
    name: "Food storage",
    items: [
      {
        id: 1,
        name: "Cookware set 1 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 2,
        name: "Cookware set 2 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 3,
        name: "Cookware set 3 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 4,
        name: "Cookware set 4 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 5,
        name: "Cookware set 5 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 6,
        name: "Cookware set 6 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      },
      {
        id: 7,
        name: "Cookware set 7 no stick",
        price: 250,
        url: "/assets/cookware/cooking-pans-2"
      }
    ]
  }
];

const store = angular.module("store", []);
store.controller("storeCtr", function($scope) {
  $scope.categories = Categories;
});
