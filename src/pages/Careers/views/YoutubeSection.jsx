import React from 'react';
import { styled } from 'styled-components';

function YoutubeSection() {
    return (
        <Styled>
            <div className='!bg-black h-full h-fit md:min-h-screen font-poppins parent relative'>
                <iframe
                    src="https://www.youtube.com/embed/K7EaxTLfX_Q?si=NoEibiqn47BC7P7o?autoplay=1&vq=high&rel=0" 
                    title="Mezovest ad" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                >
                </iframe>
            </div>
        </Styled>
    )
}

export default YoutubeSection

const Styled = styled.div`

    .parent iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

`