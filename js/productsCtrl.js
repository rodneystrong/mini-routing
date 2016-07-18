angular
  .module('miniRouting')
  .controller('productsCtrl', function($stateParams, productService) {
    //in the code below, the 'id' is arbitrary.
    //it coincides with the id in our index.html
    if($stateParams.id === "shoes") {
      //the .productData is just an arbitrary word we created
      //right now to hold the value of .shoeData
      $scope.productData = productService.shoeData;
    }
    else if($stateParams.id === "socks") {
      $scope.productData = productService.sockData;
    }
  });
