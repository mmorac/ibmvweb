import React from "react";

const Ministerios: React.FC = () => {
    return (
        <div>
            <div className="titulo">
                <h2>Ministerios</h2>
            </div>
            <div className="contenido">
                <div className="ministerio_ninos">
                    <p>Niños</p>
                </div>
                <div className="ministerio_jovenes">
                    <p>Jóvenes</p>
                </div>
                <div className="ministerio_hombres">
                    <p>Hombres</p>
                </div>
                <div className="ministerio_mujeres">
                    <p>Mujeres</p>
                </div>
                <div className="ministerio_misiones">
                    <p>Misiones</p>
                </div>
            </div>
        </div>
    );
}

export default Ministerios;