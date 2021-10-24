import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Context
import { useGlobalContext } from '../context/Provider';

// Hooks
import useIsAuth from '../hooks/useIsAuth';

// Constants
import { COURSES } from '../utils/constants/Routes';

const ActionsBar = () => {
  const { id } = useParams();
  const isAuth = useIsAuth();
  const { user, courses } = useGlobalContext();

  return (
    <div className="actions--bar">
      <div className="wrap">
        {isAuth && courses.byId.userId === user.id && (
          <>
            <Link className="button" to={`${COURSES}/${id}/update`}>
              Update Course
            </Link>
            <Link className="button" to="/">
              Delete Course
            </Link>
          </>
        )}
        <Link className="button button-secondary" to="/">
          Return to List
        </Link>
      </div>
    </div>
  );
};
export default ActionsBar;
