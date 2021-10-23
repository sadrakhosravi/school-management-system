import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Constants
import { COURSES } from '../utils/constants/Routes';

const ActionsBar = () => {
  const { id } = useParams();
  return (
    <div className="actions--bar">
      <div className="wrap">
        <Link className="button" to={`${COURSES}/${id}/update`}>
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
