import '../styles/pages/ContactoPage.css';
import React, {useState} from 'react';
import axios from 'axios'

const ContactoPage=(prop)=>{
    const initialForm={
        nombre:'',apellido:'',telefono:'',email:'',comentarios:''
    }
    const[sending,setSending]=useState(false);
    const[mensaje,setMensaje]=useState('');
    const[formData,setFormData]=useState(initialForm);

    const handleChange=e=>{
        const {name,value}=e.target;
        setFormData(oldData=>({
            ...oldData,
            [name]:value            
        }));
    }
    const handleSubmit=async e=>{
        e.preventDefault();
        setMensaje('');
        setSending(true);
        const response=await axios.post('http://localhost:3000/api/contacto',formData);
        console.log(response);
        setSending(false);
        setMensaje(response.data.message);
        if(response.data.error===false){
            setFormData(initialForm)
        }
    }

    return(
        
        <main className="main">
            
            <section className="contenedor-contacto">
                <div className="datos-empresa">
                    <ul>
                        <li>Mi Empresa</li>
                        <li>Direccion 123</li>
                        <li>Ciudad - Provincia</li>
                        <li>Telefono: 1234-5678</li>
                        <li>Email: miempresa@hotmail.com</li>
                    </ul>
                </div>

                <form className="formulario" onSubmit={handleSubmit}>

                        <h2 className="anchoCompleto">CONTACTESE CON NOSOTROS</h2>
                        <p>
                            <label for="">Nombre:</label>
                            <input type="text" name="nombre" onChange={handleChange} value={formData.nombre} required></input>
                        </p>
                        <p>
                            <label for="">Apellido:</label>
                        <input type="text" name="apellido" onChange={handleChange} value={formData.apellido} required></input>
                        </p>
                        <p>
                            <label for="">Email:</label>
                            <input type="email" name="email" onChange={handleChange} value={formData.email} required></input>
                        </p>
                        <p>
                            <label for="">Telefono (opcional):</label>
                            <input type="number" name="telefono" onChange={handleChange} value={formData.telefono}></input>
                        </p>
                        <p className="anchoCompleto">
                            <label for="">Comentarios:</label>
                            <textarea name="comentarios" id="comentarios" onChange={handleChange} value={formData.comentarios} rows="5"></textarea>
                        </p>
                        <p className="anchoCompleto">
                            <input type="submit" value="enviar"></input>
                        </p>

                        {sending?<p>Enviando...</p>:null}
                        {mensaje?<h5 className="anchoCompleto">{mensaje}<i class="bi bi-envelope-check-fill"></i></h5>:null}
                 </form>


            </section>
        </main>
    )
}
export default ContactoPage;