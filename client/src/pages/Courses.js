import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Constants
import { API_COURSES_BASE_URL } from '../utils/constants/API';
import { COURSE_NEW, COURSES } from '../utils/constants/Routes';

const Courses = () => {
  const [courses, setCourses] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(API_COURSES_BASE_URL);
        setCourses(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="wrap main--grid">
      {isLoading && <p>Fetching data ...</p>}
      {!isLoading &&
        courses.map(course => (
          <Link className="course--module course--link" to={`${COURSES}/${course.id}`} key={course.id}>
            <h2 className="course--label">Course</h2>
            <h3 className="course--title">{course.title}</h3>
          </Link>
        ))}

      <Link to={COURSE_NEW} className="course--module course--add--module">
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
