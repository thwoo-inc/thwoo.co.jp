import React from 'react';

const Section = ({ id, label, children }) => {
  return (
    <div id={id} className="items-center justify-center p-4 mb-12">
      <h2 className="w-32 mb-8 pb-1 mx-auto text-corporate-font text-center text-xl md:text-2xl tracking-widest border-b-2 border-corporate-primary">
        {label}
      </h2>
      {children}
    </div>
  );
};

export default Section;
