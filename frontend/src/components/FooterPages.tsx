// Footer.tsx
import React from 'react';
import '../styles/FooterPages.css'
import { useNavigate } from 'react-router-dom';

type FooterProps = {
    nextPage: string;
    className?: string;
};

const Footer: React.FC<FooterProps> = ({ className = '', nextPage }) => {
    let navigate = useNavigate();

    return (
        <footer className={className}>
            <h4 onClick={() => navigate(nextPage)}>Próximo</h4>
        </footer>
    );
};

export default Footer;
