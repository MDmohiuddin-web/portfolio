import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const Whatsapp = () => {
    return (
        <div className='text-black'>
            <FloatingWhatsApp
                phoneNumber="01865540885" // Replace with your WhatsApp number
                accountName="Mohi Uddin " // Your company name
                statusMessage="online" // Optional
                allowClickAway={true} // Optional: To allow the widget to be closed when clicking outside
                allowEsc={true} // Optional: To allow the widget to be closed when pressing "Esc"
                
                avatar="../../src/Components/assets/profile-pic for web.png" // Optional: Path to your avatar image
             chatMessage="Hi there! I'm available to chat about my web development services. Feel free to ask me anything."
                darkMode={false} // Optional: Enable dark mode
            />


        </div>
    );
};

export default Whatsapp;