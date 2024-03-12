import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="burger mt-5 mb-5 flex flex-col ml-5" onClick={toggleMenu}>
        <span
          id="span1"
          className={`w-5 h-1 bg-black border mb-1 ${isOpen ? 'rotate-45 translate-y-3' : ''}`}
        ></span>
        <span
          id="span2"
          className={`w-5 h-1 bg-black border mb-1 ${isOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          id="span3"
          className={`w-5 h-1 bg-black border mb-1 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}
        ></span>
      </div>
    </div>
  );
};

export default Menu;
