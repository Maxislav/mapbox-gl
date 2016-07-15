/**
 * Created by maxislav on 15.07.16.
 */
(function () {
  
  angular.module('iis-map')
    .directive('mapGl', mapGl);
  
  mapGl.$inject = ['$http'];
  
  function mapGl($http){
    return{
      restrict: 'AC',
      link: function (scope, el, attr) {
        $http.get('maptoken.json').then(function (d) {
          initMap(d.data.token)
        });
        function initMap(token) {
          mapboxgl.accessToken   = token;
          var map = new mapboxgl.Map({
            container: el[0],
            style: 'mapbox://styles/mapbox/streets-v9'
          });
        }
      }
    }
  }
}());