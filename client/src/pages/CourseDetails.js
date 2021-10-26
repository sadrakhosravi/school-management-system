import React, { useEffect } from 'react';
import ReactMarkdowwn from 'react-markdown';
import { useParams } from 'react-router-dom';

// Context
import { useGlobalContext } from '../context/Provider';
import getCourseById from '../context/actions/courses/getCourseById';

// Components
import ActionsBar from '../components/ActionsBar';

const CourseDetails = () => {
  const { id } = useParams();
  const { courses, coursesDispatcher } = useGlobalContext();

  // Only run on page load to prevent infinite loop
  useEffect(() => {
    getCourseById(coursesDispatcher, id);
  }, [coursesDispatcher, id]);

  // Destructure state and return null if no value exists
  const { title, description, estimatedTime, materialsNeeded } = courses.byId || null;
  const firstName = courses.byId.User?.firstName;
  const lastName = courses.byId.User?.lastName;

  return (
    <>
      <ActionsBar />
      <div className="wrap">
        <>
          <h2>Course Detail</h2>
          <form>
            <div className="main--flex">
              <div>
                <h3 className="course--detail--title">Course</h3>
                <h4 className="course--name">{title}</h4>
                <p>
                  By {firstName} {lastName}
                </p>
                <p>
                  <ReactMarkdowwn>{description}</ReactMarkdowwn>
                </p>
              </div>
              <div>
                <h3 className="course--detail--title">Estimated Time</h3>
                <p>{estimatedTime}</p>

                <h3 className="course--detail--title">Materials Needed</h3>
                <ul className="course--detail--list">
                  <ReactMarkdowwn>{materialsNeeded}</ReactMarkdowwn>
                </ul>
              </div>
            </div>
          </form>
        </>
      </div>
    </>
  );
};
export default CourseDetails;
