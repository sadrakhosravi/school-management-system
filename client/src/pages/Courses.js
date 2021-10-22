import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Context
import getAllCourses from '../context/actions/courses/getAllCourses';
import { useGlobalContext } from '../context/Provider';

const Courses = () => {
  const { courses, coursesDispatch } = useGlobalContext();

  useEffect(() => {
    getAllCourses(coursesDispatch);
  }, [coursesDispatch]);

  return (
    <div className="wrap main--grid">
      {courses.isLoading && <p>Fetching data ...</p>}
      {!courses.isLoading &&
        courses.allCourses.map(course => (
          <Link className="course--module course--link" to={`/courses/${course.id}`} key={course.id}>
            <h2 className="course--label">Course</h2>
            <h3 className="course--title">{course.title}</h3>
          </Link>
        ))}

      <Link className="course--module course--add--module" to="/courses/new">
        <span className="course--add--title">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 13 13"
            className="add"
          >
            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
          </svg>
          New Course
        </span>
      </Link>
    </div>
  );
};
export default Courses;
