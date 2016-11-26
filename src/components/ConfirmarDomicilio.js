import React, { Component } from 'react';
import Select from './Select';
import $ from 'jquery';
import Reflux from 'reflux';

import DomicilioStore from '../stores/DomicilioStore';
var ConfirmarDomicilio = React.createClass({

  getInitialState:function(){
    return{
      listaDomicilios:[{'id':1,'name':'pizza'},{'id':2,'name':'hamburguesa'}]
    }
  },

  render:function(){
    return(
      <div>
        <label>Elegir domicilio</label>
        <Select datos={this.state.listaDomicilios} handleChange={this.handleChangeDomicilios}/>
        <label>Calificar servicio</label>
        <input type="text" onChange={this.handleCalificacion}/>
        <input type="submit" value="Confirmar" onChange={this.handleConfirmar}/>
        <input type="submit" value="Pagar" onChange={this.pagar}/>
      </div>
    )
  },
  handleChangeDomicilios:function(){

  }
});
export default ConfirmarDomicilio;
