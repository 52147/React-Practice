// Example with a Library (Formik):
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password too short').required('Required'),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Email:
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </label>
          <br />
          <label>
            Password:
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;

// Summary
// Controlled Components: Managed by React state.
// Uncontrolled Components: Managed by the DOM, accessed via refs.
// Form Validation: Ensures data integrity before submission, can be implemented using custom logic or libraries like Formik or React Hook Form.
