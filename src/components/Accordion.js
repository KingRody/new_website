import React, { useState } from "react";

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          activeIndex,
          index,
          handleActiveIndex,
        });
      })}
    </div>
  );
};

const AccordionItem = ({
  title,
  children,
  activeIndex,
  index,
  handleActiveIndex,
}) => {
  const isActive = activeIndex === index;

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => handleActiveIndex(index)}>
        {title}
      </div>
      <div className={`accordion-content ${isActive ? "active" : ""}`}>
        {children}
      </div>
    </div>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
