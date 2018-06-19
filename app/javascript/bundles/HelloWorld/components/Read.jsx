import React from 'react';

function Read({ handleModeChange }) {
  return (
    <div>
      <h3>Read Mode</h3>
      <button onClick={() => { handleModeChange(); }}>
        Edit Mode
      </button>
    </div>
  )
}

export default Read;
