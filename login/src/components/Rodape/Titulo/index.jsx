
import React, { Component } from 'react';
import './index.css';

//Extends(mesma coisa de herança :)
class Titulo extends Component{
    render(){
            return(
                <div className='background'>
                    <h1>{this.props.texto}</h1>
                    {/* // o || representa uma condição */}
                    <h4>{this.props.descricao || 'Descrição não informada'}</h4>
                </div>
            )
    }
    
}

export default Titulo;
