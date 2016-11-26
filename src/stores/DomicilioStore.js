import Reflux from 'reflux';
import $ from 'jquery';
import DomicilioActions from '../actions/DomicilioActions';

var DomicilioStore = Reflux.createStore({
  listenables:[DomicilioActions],
  init: function() {
    this.ObtenerDomicilios();
  },
  ObtenerDomicilios:function(){
    var lista = [
      {'id':1,'detalle':'pizza'},
      {'id':2,'detalle':'hamburguesa'}
    ];

    this.trigger(lista);
  }

});
export default DomicilioStore;
