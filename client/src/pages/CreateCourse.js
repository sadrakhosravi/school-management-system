import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Context
import { useGlobalContext } from '../context/Provider';

// Actions
import createCourse from '../context/actions/courses/createCourse';

// Components
import ValidationError from '../components/ValidationError';

const CreateCourse = () => {
  const [formInputData, setFormInputData] = useState({});
  const [error, setError] = useState(false);
  const { user } = useGlobalContext();
  const history = useHistory();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormInputData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  console.log(formInputData);

  const handleFormSubmit = async event => {
    event.preventDefault();

    // Send the current user to the API for authentication.
    const currentUser = {
      username: user.emailAddress,
      password: user.password,
    };
    const response = await createCourse(currentUser, { ...formInputData, userId: user.id });
    console.log(response);

    // Handle API response
    response === true ? history.push('/') : setError(response.error);
  };

  return (
    <div className="wrap">
      <h2>Create Course</h2>
      {error && <ValidationError messages={error.message} />}
      <form onSubmit={handleFormSubmit}>
        <div className="main--flex">
          <div>
            <label htmlFor="courseTitle">Course Title</label>
            <input id="courseTitle" name="title" type="text" onChange={handleInputChange} />
            <p>
              By {user.firstName} {user.lastName}
            </p>
            <label htmlFor="courseDescription">Course Description</label>
            <textarea id="courseDescription" name="description" onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="estimatedTime">Estimated Time</label>
            <input id="estimatedTime" name="estimatedTime" type="text" onChange={handleInputChange} />

            <label htmlFor="materialsNeeded">Materials Needed</label>
            <textarea id="materialsNeeded" name="materialsNeeded" onChange={handleInputChange} />
          </div>
        </div>
        <button className="button" type="submit">
          Create Course
        </button>
        <Link to="/" className="button button-secondary">
          Cancel
        </Link>
      </form>
    </div>
  );
};
export default CreateCourse;
