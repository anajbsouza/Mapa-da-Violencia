import React from 'react';
import { useState } from 'react';
import '../styles/LegendMapFilter.css';
import { FaMap } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const LegendMapFilter: React.FC = () => {
    const legends = [
      { color: '#0777D9', label: 'Violência Física' },
      { color: '#EE05F2', label: 'Violência Moral' },
      { color: '#F28705', label: 'Violência Psicológica' },
      { color: '#09A603', label: 'Violência Patrimonial' },
      { color: '#F20505', label: 'Violência Sexual' },
      { color: '#14120f', label: 'Múltiplos Tipos'}
    ];

    const [isLegendVisible, setIsLegendVisible] = useState(false);

  
    return (
      <section className='legend-container'>
          <p className="legend-list p" onClick={() => setIsLegendVisible(!isLegendVisible)}>
            {isLegendVisible ? <IoClose className='legend-icon-close'/> : <FaMap className='legend-icon-open'/>}
          </p>

          { isLegendVisible && ( 
            <div>
              <h3 className='legend-title' >Legenda</h3>
              <ul className="legend-list">
                {legends.map((legend, index) => (
                  <li key={index}>
                    <span className="legend-color" style={{ backgroundColor: legend.color }}></span>
                    <span className="legend-label">{legend.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) }
        </section>
    );
  };
  
  export default LegendMapFilter;