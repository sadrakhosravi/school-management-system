import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

// Context
import { useGlobalContext } from '../context/Provider';

// Hooks
import useIsAuth from '../hooks/useIsAuth';

// Constants
import { COURSES } from '../utils/constants/Routes';

// Actions
import deleteCourse from '../context/actions/courses/deleteCourse';

const ActionsBar = () => {
  const { id } = useParams();
  const isAuth = useIsAuth();
  const { user, courses } = useGlobalContext();
  const history = useHistory();

  const handleDeleteClick = async () => {
    const currentUser = {
      username: user.emailAddress,
      password: user.password,
    };
    const response = await deleteCourse(currentUser, id);

    response === true ? history.push('/') : console.log(response);
  };

  return (
    <div className="actions--bar">
      <div className="wrap">
        {isAuth && courses.byId.userId === user.id && (
          <>
            <Link className="button" to={`${COURSES}/${id}/update`}>
              Update Course
            </Link>
            <button className="button" onClick={handleDeleteClick}>
              Delete Course
            </button>
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
