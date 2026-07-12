import React from "react";
import { Link } from "react-router-dom";

const Inicio: React.FC = () => {
    return (
        <div>
            {/* <video 
                className="video-background" 
                autoPlay 
                muted 
                loop 
                playsInline
            >
                <source src="/videos/background.mp4" type="video/mp4" />
            </video>             */}
            <div className="titulo-video-wrapper">
                <div className="titulo">
                    <h2>Somos la Iglesia Bautista Más Vida</h2>
                </div>
            </div>
            <div className="container">
                <p className="descripcion">
                    Somos una congregación que busca ser bíblica en todo lo que hace, ofreciendo una claridad teológica para conocer mejor a Dios. Nos esmeramos en vivir el modelo del Nuevo Testamento, de una iglesia que no solo es definida por su claridad teológica, sino también por su amor, calidez, amabilidad, y estar verdaderamente preocupados los unos por los otros. En esta iglesia encontrarás una congregación amorosa, donde buscamos amar a Dios y a los demás.
                </p>
            </div>
            <div className="accesosRapidos">
                <Link to="/visita" className="botonInicio">¿Primera visita?</Link>
                <a href="/docs/Declaracion_de_fe.pdf" className="botonInicio">¿En qué creemos?</a>
            </div>
        </div>
    );
}

export default Inicio;