import React, { useState } from "react"
import { MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact"
import { Formik } from "formik"
import Button from "../Button/Button"
import Textbox from "../Textbox/Textbox"

import { create as saveToDB } from "../../database/enquiries"

import styles from "./InquireModal.module.scss"
import Textarea from "../Textarea/Textarea"

const InquireModal = ({ handleToggle, isOpen }) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmitted = () => {
    setSubmitted(true)
  }

  return (
    <MDBModal
      className={styles.modalContainer}
      isOpen={isOpen}
      toggle={handleToggle}
      centered
    >
      <MDBModalHeader toggle={handleToggle} className={styles.header} />
      <MDBModalBody>
        <div className={styles.container}>
          {submitted ? (
            <>
              <p className={styles.title}>Thank you!</p>
              <p className={styles.description}>
                Our team will contact you shortly!
              </p>
            </>
          ) : (
            <>
              <p className={styles.title}> Contact Us </p>
              <p className={styles.description}>
                Got a question? We’d love to hear from you. <br />
                Send us a message and we’ll respond as soon as possible.
              </p>
              <div className={styles.formWrap}>
                <InquireForm onSubmitted={handleSubmitted} />
              </div>
            </>
          )}
        </div>
      </MDBModalBody>
    </MDBModal>
  )
}

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
      onSubmit={async (values, { setSubmitting }) => {
        const res = await saveToDB(values)
        if (res) {
          onSubmitted()
        }
      }}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <div className={styles.input}>
              <Textbox
                name="name"
                type="text"
                placeholder=""
                labelText="Name*"
                direction="column"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.name}
                error={errors.name}
                touched={false}
              />
            </div>
            <div className={styles.input}>
              <Textbox
                name="email"
                type="email"
                placeholder=""
                direction="column"
                labelText="Email address*"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
                error={errors.email}
                touched={false}
              />
            </div>
            <div className={styles.input}>
              <Textarea
                name="message"
                placeholder=""
                direction="column"
                labelText="Message"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.message}
                error={errors.message}
                touched={false}
              />
            </div>
            <div className={styles.button}>
              <Button
                text={"SEND"}
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

export default InquireModal
