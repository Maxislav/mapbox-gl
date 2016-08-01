'use strict';

/**
 * Created by maxislav on 15.07.16.
 */
(function () {

  angular.module('iis-map').factory('factoryMap', factoryMap);

  factoryMap.$inject = ['$q'];

  function factoryMap($q) {

    var map = null;
    var mapDefer = $q.defer();
    var mapPromise = mapDefer.promise;

    function getMap() {
      return mapPromise;
    }

    function setMap(_map) {
      map = _map;
      mapDefer = mapDefer || $q.defer();
      mapDefer.resolve(map);
    }

    return {
      map: map,
      getMap: getMap,
      setMap: setMap
    };
  }
})();
//# sourceMappingURL=service-mapgl.js.map
