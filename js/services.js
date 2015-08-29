module.service('Book', ['$rootScope', function( $rootScope) {
  var service = {
    books: [
      { title: "Leaves of Grass", author: "Walt Whitman"},
      { title: "East of Eden", author: "John Steinbeck"}
    ],

    addBook: function ( book ) {
      service.books.push( book );
      $rootScope.$broadcast( 'books.update');
    }
  }
  return service;
}]);
