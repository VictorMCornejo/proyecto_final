import React from 'react'

const NovedadItem=(props)=>{
    const {id,imagen,titulo,subtitulo,desc_corta,desc_larga}=props;
    return(
        <div className="container mt-5">
            <div class="row text-white bg-dark mb-5">
                <div className="col-4 p-3 align-self-center">
                    <img src={imagen} />
                </div>

                <div class="col p-3">
                    <h3>{titulo}</h3>
                    <h6>{subtitulo}</h6>
                    <p>{desc_larga}</p>
                </div>    
            </div>           
        </div>
    );
}
export default NovedadItem;