import React from "react";

interface Props {
  text?: 'Done' | 'Next';
  onClick: () => void;
}

function Button({ text, onClick }: Props) {
  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button className="btn btn-primary me-md-2 mb-2 mt-2" type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
