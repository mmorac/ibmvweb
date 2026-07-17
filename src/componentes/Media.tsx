import React from "react";

const Media: React.FC = () => {
    return (
        <div>
            <div className="titulo">
                <h2>Enseñanzas</h2>
            </div>
            <div className="container">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/NNLKt2zs51k?si=ZS0r7aOEiKclI9n6" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    style={{borderRadius: '8px', maxWidth: '100%'}}
                />
            </div>
        </div>
    );
}

export default Media;