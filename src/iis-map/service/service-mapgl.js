/**
 * Created by maxislav on 15.07.16.
 */
(function () {

  angular
    .module('iis-map')
    .factory('factoryMap', factoryMap);

  factoryMap.$inject = ['$q'];


  function factoryMap($q) {

    let map = null;
    let mapDefer = $q.defer();
    let mapPromise = mapDefer.promise;

    function getMap() {
      return mapPromise;
    }

    function setMap(_map) {
      map = _map;
      mapDefer = mapDefer || $q.defer();
      mapDefer.resolve(map)
    }

    return{
      map: map,
      getMap: getMap,
      setMap: setMap
    }
  }


}());