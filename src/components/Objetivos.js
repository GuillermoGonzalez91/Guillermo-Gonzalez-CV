import React from 'react'

export default function Objetivos(props) {
    const objetivos = (
      <div>
      {props.objetivos.map((obj) =>
        <div key={obj.name}>
          <li>{obj.name}</li>
        </div>
      )}
    </div>
      );
    return (
        <div className='title'>
        <i className='fa fa-graduation-cap'></i>
        <h2>Objetivos laborales</h2>
        {objetivos}
      </div>
    )
}
