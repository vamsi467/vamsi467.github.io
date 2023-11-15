import React from 'react';

const MainContent: React.FC<{
    children?: React.ReactNode 
}> = ({ children }) => {
  return (
    <div className="p-5">
      {children}
    </div>
  );
};

export default MainContent;
