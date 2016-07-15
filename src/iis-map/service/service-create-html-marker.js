/**
 * Created by maxislav on 15.07.16.
 */
(function () {
  angular.module('iis-map')
    .factory('factoryMarkerHtml', factoryMarkerHtml)


  function factoryMarkerHtml() {

    function setSize100(el) {
      el.style.width = '100%';
      el.style.height = '100%';
    }

    return {
      getHtmlElement: function (property) {
        var div = document.createElement('div');
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        setSize100(table);
        setSize100(tr);
        setSize100(td);
        td.style.verticalAlign = 'middle';
        div.style.width = property.width+'px';
        div.style.height = property.height+'px';
        div.appendChild(table);
        table.appendChild(tr);
        tr.appendChild(td);
        if(property.content){
          td.innerHTML = property.content
        }
        return div
      }
    }
  }

}());