import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Context
import { useGlobalContext } from '../context/Provider';
import getCourseById from '../context/actions/courses/getCourseById';

// Components
import ActionsBar from '../components/ActionsBar';

const CourseDetails = () => {
  const { id } = useParams();

  const { courses, coursesDispatch } = useGlobalContext();
  console.log(courses.byId);

  useEffect(() => {
    getCourseById(coursesDispatch, id);
  }, [coursesDispatch, id]);

  return (
    <>
      <ActionsBar />
      <div className="wrap">
        {courses.byId.title && (
          <>
            <h2>Course Detail</h2>
            <form>
              <div className="main--flex">
                <div>
                  <h3 className="course--detail--title">Course</h3>
                  <h4 className="course--name">{courses.byId.title}</h4>
                  <p>
                    By {courses.byId.User.firstName} {courses.byId.User.lastName}
                  </p>
                  <p>{courses.byId.description}</p>
                </div>
                <div>
                  <h3 className="course--detail--title">Estimated Time</h3>
                  <p>{courses.byId.estimatedTime || null}</p>

                  <h3 className="course--detail--title">Materials Needed</h3>
                  <ul className="course--detail--list">
                    {courses.byId.materialsNeeded &&
                      courses.byId.materialsNeeded
                        .split('*')
                        .map((material, i) => i !== 0 && <li key={i}>{material}</li>)}
                  </ul>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};
export default CourseDetails;
