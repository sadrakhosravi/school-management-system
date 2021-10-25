import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

// Context
import { useGlobalContext } from '../context/Provider';

// Actions
import getCourseById from '../context/actions/courses/getCourseById';
import updateCourse from '../context/actions/courses/updateCourse';

const UpdateCourse = () => {
  const [formInputData, setFormInputData] = useState({});
  const { id } = useParams();
  const { courses, user, coursesDispatcher } = useGlobalContext();
  const history = useHistory();

  // Destructure state and return null if no value exists.
  const { title, description, estimatedTime, materialsNeeded } = courses.byId || null;

  // Request once to prevent infinite loop
  useEffect(() => {
    // If the course data is not already available in the state, request it
    if (Object.keys(courses.byId).length === 0) {
      getCourseById(coursesDispatcher, id);
    }
    // On load, set the inputs state data
    setFormInputData({
      title,
      description,
      estimatedTime,
      materialsNeeded,
    });
  }, [courses, coursesDispatcher, description, estimatedTime, id, materialsNeeded, title]);

  // Handle all form input changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormInputData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  // Handle update form submit
  const handleFormSubmit = async event => {
    event.preventDefault();

    const currentUser = {
      username: user.emailAddress,
      password: user.password,
    };

    const response = await updateCourse(currentUser, id, { ...formInputData, userId: user.id });
    response === true ? history.push(`/courses/${id}`) : console.log(response.error);
  };

  return (
    <div className="wrap">
      <h2>Update Course</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="main--flex">
          <div>
            <label htmlFor="courseTitle">Course Title</label>
            <input
              id="courseTitle"
              name="title"
              type="text"
              defaultValue={title}
              onChange={handleInputChange}
            />

            <p>
              By {user.firstName} {user.lastName}
            </p>

            <label htmlFor="courseDescription">Course Description</label>
            <textarea
              id="courseDescription"
              name="description"
              defaultValue={description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="estimatedTime">Estimated Time</label>
            <input
              id="estimatedTime"
              name="estimatedTime"
              type="text"
              defaultValue={estimatedTime}
              onChange={handleInputChange}
            />

            <label htmlFor="materialsNeeded">Materials Needed</label>
            <textarea
              id="materialsNeeded"
              name="materialsNeeded"
              defaultValue={materialsNeeded}
              onChange={handleInputChange}
            />
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
