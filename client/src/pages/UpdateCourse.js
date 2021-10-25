import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// Context
import { useGlobalContext } from '../context/Provider';

// Actions
import getCourseById from '../context/actions/courses/getCourseById';

const UpdateCourse = () => {
  const { id } = useParams();
  const { courses, coursesDispatcher } = useGlobalContext();

  // Request once to prevent infinite loop
  useEffect(() => {
    // If the course data is not already available in the state, request it
    if (Object.keys(courses.byId).length === 0) {
      getCourseById(coursesDispatcher, id);
    }
  }, [courses, coursesDispatcher, id]);

  // Destructure state and return null if no value exists.
  const { title, description, estimatedTime, materialsNeeded } = courses.byId || null;

  return (
    <div className="wrap">
      <h2>Update Course</h2>
      <form>
        <div className="main--flex">
          <div>
            <label htmlFor="courseTitle">Course Title</label>
            <input id="courseTitle" name="courseTitle" type="text" defaultValue={title} />

            <p>By Joe Smith</p>

            <label htmlFor="courseDescription">Course Description</label>
            <textarea id="courseDescription" name="courseDescription" defaultValue={description} />
          </div>
          <div>
            <label htmlFor="estimatedTime">Estimated Time</label>
            <input id="estimatedTime" name="estimatedTime" type="text" defaultValue={estimatedTime} />

            <label htmlFor="materialsNeeded">Materials Needed</label>
            <textarea id="materialsNeeded" name="materialsNeeded" defaultValue={materialsNeeded} />
          </div>
        </div>
        <button className="button" type="submit">
          Update Course
        </button>
        <Link to={`/courses/${id}`} className="button button-secondary">
          Cancel
        </Link>
      </form>
    </div>
  );
};
export default UpdateCourse;
