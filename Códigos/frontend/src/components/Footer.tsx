// Footer.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

type FooterProps = {
    nextPage: string;
};

const Footer: React.FC<FooterProps> = ({ nextPage }) => {
    let navigate = useNavigate();

    return (
        <footer>
            <h4 onClick={() => navigate(nextPage)}>Próximo</h4>
        </footer>
    );
};

export default Footer;
