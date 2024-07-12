import React from 'react';
import '../styles/LegendMapFilter.css';

const LegendMapFilter: React.FC = () => {
    const legends = [
      { color: '#0000ff', label: 'Violência Física' },
      { color: '#ff00ff', label: 'Violência Moral' },
      { color: '#ffA500', label: 'Violência Psicológica' },
      { color: '#008000', label: 'Violência Patrimonial' },
      { color: '#ff0000', label: 'Violência Sexual' },
    ];
  
    return (
      <div className="legend-container">
        <h3>Legenda</h3>
        <ul className="legend-list">
          {legends.map((legend, index) => (
            <li key={index}>
              <span className="legend-color" style={{ backgroundColor: legend.color }}></span>
              <span className="legend-label">{legend.label}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default LegendMapFilter;