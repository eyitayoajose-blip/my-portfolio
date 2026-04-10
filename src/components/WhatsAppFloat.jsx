import React from "react";
import { FaWhatsapp } from "react-icons/fa";
export default function WhatsAppFloat(){
    return (
        <a
        href="https://wa.me/2347036786121"
        target='_blank'
        className='whatsapp-float'
        rel='noopener noreferrer'>
            <FaWhatsapp/>
        </a>
    );
}