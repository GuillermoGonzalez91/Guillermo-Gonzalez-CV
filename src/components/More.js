import React from 'react'

export default function More(props) {
    const MasInformacion = (
        <div>
            <div className='item'>
              <p>{props.masinformacion}</p>
            </div>
        </div>
      );
    return (
        <div className='title'>
        <i className='fa fa-graduation-cap'></i>
        <h2>Mas Sobre mi...</h2>
        {MasInformacion}
      </div>
    )
}
