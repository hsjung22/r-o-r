import React from 'react';

function Edit({ handleModeChange }) {
  return (
    <div>
      <h3>Edit Mode</h3>
      <button onClick={() => { handleModeChange(); }}>
        Read Mode
      </button>
    </div>
  )
}

export default Edit;
