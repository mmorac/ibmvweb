import React from "react";

const Contacto: React.FC = () => {
    return (
        <div>
            <div className="titulo">
                <h2>Contacto</h2>
            </div>
            <div className="contacto_container">
                <div className="social_container">
                    <a href="https://www.facebook.com/IglesiaBautistaMasVida1" target="_blank" rel="noopener noreferrer">
                        <img className="social" src="/img/ibmv_fb.png" alt="Facebook" />
                        <span>Iglesia Bautista Más Vida</span>
                    </a>
                </div>
                <div className="social_container">
                    <a href="https://www.instagram.com/masvida.alcorcon" target="_blank" rel="noopener noreferrer">
                        <img className="social" src="/img/ibmv_ig.png" alt="Instagram" />
                        <span>Iglesia Bautista Más Vida</span>
                    </a>
                </div>
                <div className="social_container">
                    <a href="mailto:pastormeyermasvida@icloud.com">
                        <img className="social" src="/img/ibmv_email.png" alt="Email" />
                        <span>pastormeyermasvida@icloud.com</span>
                    </a>
                </div>
                <div className="social_container">
                    <a href="https://wa.me/34671125688" target="_blank" rel="noopener noreferrer">
                        <img className="social" src="/img/ibmv_wa.png" alt="WhatsApp" />
                        <span>+34 671 12 56 88</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacto;