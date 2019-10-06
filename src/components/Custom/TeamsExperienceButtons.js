import React, { useState } from 'react'
import Button from '../Button/Button'
import InquireModal from '../InquireModal/InquireModal'

const TeamsExperienceButtons = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  }

  return (
    <div>
      <InquireModal isOpen={openModal} handleToggle={handleClick}  />
      <Button
        text={"INQUIRE"}
        backgroundColor={"#ED435D"}
        textColor={"#ffff"}
        onClick={handleClick}
      />
    </div>
  )
}

export default TeamsExperienceButtons
