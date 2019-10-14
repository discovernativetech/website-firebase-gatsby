import React, { useState } from "react"
import Button from "../Button/Button"
import InquireModal from "../InquireModal/InquireModal"

import styles from './TeamsExperienceButtons.module.scss';

const TeamsExperienceButtons = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(!openModal)
  }

  return (
    <div>
      <InquireModal isOpen={openModal} handleToggle={handleClick} />
      <div className={styles.button}>
        <Button
          text={"INQUIRE"}
          backgroundColor={"#ED435D"}
          textColor={"#ffff"}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default TeamsExperienceButtons
