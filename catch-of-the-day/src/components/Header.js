import React from 'react';

const Header = props => (
    <header className="top">
      <h1>Catch 
        <span className="ofThe">
        <span className="of">of</span>
        <span className="the">The</span>
        </span>
      Day</h1>
      <h3 className="tagline">
        <span>{props.date}</span>
      </h3>
    </header>
);

export default Header;