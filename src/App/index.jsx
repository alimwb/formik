import { useCallback } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomSelect } from "Components";

import "./styles.css";

export default function App() {
  let Initialvalues = {
    number: 0
  };

  let validationSchema = new Yup.ObjectSchema({
    number: Yup.number()
  });

  let handleSubmit = (obj) => {
    console.log("Formik submit", obj);
  };

  const RenderForm = useCallback(({ values, errors, setFieldValue }) => {
    let options = [
      { label: "UM", value: 1 },
      { label: "DOIS", value: 2 },
      { label: "TRÊS", value: 3 }
    ];
    let handleChange = (selected) => {
      setFieldValue("number", selected?.value);
    };
    return (
      <>
        <code>{JSON.stringify({ values, errors })}</code>
        <br />
        <br />
        <Form>
          <CustomSelect
            value={values.number}
            options={options}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </>
    );
  }, []);

  return (
    <div className="App">
      <h1>Formik + YUP + REACT-SELECT</h1>
      <Formik
        initialValues={Initialvalues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {RenderForm}
      </Formik>
    </div>
  );
}
