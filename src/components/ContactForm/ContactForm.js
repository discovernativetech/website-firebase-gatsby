import React from "react"
import { Formik } from "formik"
import emailjs from "emailjs-com"
import Button from "../Button/Button"
import Textbox from "../Textbox/Textbox"
import Textarea from "../Textarea/Textarea"

import styles from "./ContactForm.module.scss"

export const ContactForm = React.forwardRef((props, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <InquireForm />
    </div>
  )
})

const InquireForm = ({ onSubmitted }) => {
  return (
    <Formik
      initialValues={{ email: "", name: "", message: "" }}
      validate={values => {
        let errors = {}
        if (!values.email) {
          errors.email = "Required"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address"
        }

        if (!values.name) {
          errors.name = "Required"
        }
        return errors
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        console.log(values)
        const templateParams = {
          name: values.name,
          email: values.email,
          message: values.message,
        }

        emailjs
          .send(
            "gmail",
            "template_bcIneafU",
            templateParams,
            "user_VtXE3xmz4tUMBQBN5vFm7"
          )
          .then(
            response => {
              console.log("SUCCESS!", response.status, response.text)
              alert("Your message has been sent! We will contact you shortly!")
            },
            err => {
              console.log("FAILED...", err)
            }
          )
      }}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div>
            <Textarea
              name="message"
              placeholder="Message"
              direction="column"
              // labelText="Message"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.message}
              error={errors.message}
              touched={false}
            />
            <div className={styles.input}>
              <Textbox
                name="email"
                type="email"
                placeholder="Email"
                direction="column"
                // labelText="Email address*"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
                error={errors.email}
                touched={false}
              />
              <Textbox
                name="name"
                type="text"
                placeholder="Full Name"
                // labelText="Name*"
                direction="column"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.name}
                error={errors.name}
                touched={false}
              />
              <Button
                className={styles.buttonClass}
                text={"Send"}
                backgroundColor={"#ED435D"}
                textColor={"#ffff"}
                type={"submit"}
              />
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}
