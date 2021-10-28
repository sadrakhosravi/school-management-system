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
  const { id: courseId } = useParams();
  const isAuth = useIsAuth();
  const { user, courses } = useGlobalContext();
  const history = useHistory();

  const handleDeleteClick = async () => {
    const currentUser = {
      username: user.emailAddress,
      password: user.password,
    };
    const response = await deleteCourse(courseId, currentUser);
    console.log(response);

    response === true && history.push('/');
  };

  return (
    <div className="actions--bar">
      <div className="wrap">
        {isAuth && courses.byId.userId === user.id && (
          <>
            <Link className="button" to={`${COURSES}/${courseId}/update`}>
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
