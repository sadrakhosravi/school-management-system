import React from 'react';

const ActionsBar = () => {
  return (
    <div className="actions--bar">
      <div className="wrap">
        <a className="button" href="update-course.html">
          Update Course
        </a>
        <a className="button" href="/">
          Delete Course
        </a>
        <a className="button button-secondary" href="/">
          Return to List
        </a>
      </div>
    </div>
  );
};
export default ActionsBar;
