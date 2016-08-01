/**
 * Created by maxislav on 15.07.16.
 */
(function () {

  angular.module('iis-map')
    .directive('mapGl', mapGl);
  mapGl.$inject = ['$http', 'factoryMap', 'factoryMarkerHtml'];

  function mapGl($http, factoryMap, factoryMarkerHtml) {
    return {
      restrict: 'AC',
      link: function (scope, el, attr) {
        $http.get('maptoken.json').then(function (d) {
          initMap(d.data.token)
        });

        var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          x = w.innerWidth || e.clientWidth || g.clientWidth,
          y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        

        el[0].style.width = x +'px';
        el[0].style.height = y +'px';


        function initMap(token) {
          mapboxgl.accessToken = token;
          var map = new mapboxgl.Map({
            container: el[0],
            center: [30.40, 50.40],
            zoom: 11,
            style: 'mapbox://styles/mapbox/dark-v9'
            //style: 'myCustomStyle.json'
          });

          var popup = new mapboxgl.Popup(
            {
              closeOnClick: false,
              closeButton: false
            })
            .setLngLat([30.40, 50.40])
            .setHTML('<h1>Popup</h1>');
           // .addTo(map);

          var div  =factoryMarkerHtml.getHtmlElement({
            width: 40,
            height: 40,
            content: 'Hello'
          });
          div.className = 'marker-html';


          var marker = new mapboxgl.Marker(div)
            .setLngLat([30.40, 50.40])
            .addTo(map);

          factoryMap.setMap(map)
        }
      }
    }
  }
}());