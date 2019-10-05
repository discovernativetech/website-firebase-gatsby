import React from "react"
import { Formik } from "formik"

import styles from "./Newsletter.module.scss"

import Textbox from "../Textbox/Textbox"
import Button from "../Button/Button"

import { create as saveToDB } from '../../database/newsletter';

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ email: "" }}
        validate={values => {
          let errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const res = await saveToDB(values.email);
          if (res) {
            values.email = '';
            window.alert("You have been added to our newsletter list!")
          }
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              <Textbox
                name="email"
                type="email"
                placeholder="Email address"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
                error={errors.email}
                touched={false}
              />
              <div className={styles.button}>
                <Button
                  text={"JOIN "}
                  backgroundColor={"#ED435D"}
                  textColor={"#ffff"}
                  type={"submit"}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Newsletter
