import React from 'react';
import { Link } from 'react-router-dom';

const ActionsBar = () => {
  return (
    <div className="actions--bar">
      <div className="wrap">
        <Link className="button" href="update-course.html">
          Update Course
        </Link>
        <Link className="button" to="/">
          Delete Course
        </Link>
        <Link className="button button-secondary" to="/">
          Return to List
        </Link>
      </div>
    </div>
  );
};
export default ActionsBar;
