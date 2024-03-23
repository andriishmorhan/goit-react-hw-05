import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

import css from './SearchForm.module.css';

export default function SearchForm({ request }) {
 
    return (
        <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        request(values.query);
        if (!values.query) {
          toast.error("Please enter a search query");
          return;
        }
        actions.resetForm();
      }}
    >
      <Form>
        <Field className={css.input} type="text" name="query">
        </Field>
        <button className={css.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
    );
}