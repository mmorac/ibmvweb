import React from "react";

const Visita: React.FC = () => {
    return (
        <div>
            <div className="titulo">
                <h1>Visítanos</h1>
            </div>
            <div className="visita-container">
                <div className="visita-section">
                    <div className="section-header">
                        <span className="section-icon">🕐</span>
                        <h2>¿Cuándo?</h2>
                    </div>
                    <div className="horario-grid">
                        <div className="horario-item">
                            <span className="horario-dia">Miércoles</span>
                            <span className="horario-hora">19:30</span>
                            <span className="horario-descripcion">Culto de oración</span>
                        </div>
                        <div className="horario-item">
                            <span className="horario-dia">Viernes</span>
                            <span className="horario-hora">19:30</span>
                            <span className="horario-descripcion">Reunión de jóvenes</span>
                        </div>
                        <div className="horario-item">
                            <span className="horario-dia">Domingo</span>
                            <span className="horario-hora">10:00 y 12:30</span>
                            <span className="horario-descripcion">Cultos generales</span>
                        </div>
                        <div className="horario-item">
                            <span className="horario-dia">Domingo</span>
                            <span className="horario-hora">11:15</span>
                            <span className="horario-descripcion">Escuela dominical</span>
                        </div>
                    </div>
                </div>

                <div className="visita-section">
                    <div className="section-header">
                        <span className="section-icon">📍</span>
                        <h2>¿Dónde?</h2>
                    </div>
                    <div className="ubicacion-info">
                        <p className="direccion-principal">
                            <strong>Calle Sahagún 28, Alcorcón</strong>
                        </p>
                        <div className="transporte-opciones">
                            <div className="transporte-item">
                                <span className="transporte-icon">🚆</span>
                                <p>Línea C-5 de Cercanías Madrid (estación San José de Valderas)</p>
                            </div>
                            <div className="transporte-item">
                                <span className="transporte-icon">🚌</span>
                                <p>Autobús interurbano 513 desde Príncipe Pío (parada Avenida de Lisboa - Centro de Salud)</p>
                            </div>
                            <div className="transporte-item">
                                <span className="transporte-icon">🚇</span>
                                <p>Estación Parque Lisboa del Metro Sur, línea 12</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="contenedorimagenvisita">
                    <img className="como_llegar" src="/img/ibmv_transporte.png" alt="Mapa de transporte a la iglesia" />
                </div>
            </div>
        </div>
    );
}

export default Visita;