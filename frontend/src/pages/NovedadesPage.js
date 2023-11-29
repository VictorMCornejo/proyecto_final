import '../styles/pages/TurnosPage.css'
import '../components/layout/Carousel'
import '../components/layout/Novedades'
import axios from 'axios';
import React, { useState,  useEffect } from 'react';
import NovedadItem from '../components/layout/Novedades';

const NovedadesPage=(prop)=>{
    const [loading,setLoading]=useState(false);
    const [novedades,setNovedades]=useState([]);

    useEffect(()=>{
        const cargarNovedades=async()=>{
            setLoading(true);
            const response=await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    },[]);

    return(
        <div class="main justify-content-center">
            {loading? (
                <p>Cargando...</p>
            ):(
                novedades.map(item=><NovedadItem 
                    key={item.id}
                    imagen={item.imagen}
                    titulo={item.titulo} 
                    subtitulo={item.subtitulo}
                    desc_corta={item.desc_corta}
                    desc_larga={item.desc_larga} />)
            )}
        </div>
    );
}
export default NovedadesPage;