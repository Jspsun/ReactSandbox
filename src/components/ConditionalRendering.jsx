import React from 'react';

export default function ConditionalRendering() {
  const renderFirstDiv = false;
  const renderSecondDiv = true;

  return (
    <React.Fragment>
      {renderFirstDiv &&
        <div>first div</div>
      }
      {renderSecondDiv &&
        <div>second div</div>
      }
    </React.Fragment>
  );
}
