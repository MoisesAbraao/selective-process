import React from 'react'
import { Modal } from 'antd'

const DeleteModal = ({ openModalDeleteValidation, closeModalDeleteValidation, handleDeleteAppyment }) => {
    return (
        <Modal
            title="Delete"
            open={openModalDeleteValidation}
            onOk={handleDeleteAppyment}
            okText="Delete"
            onCancel={closeModalDeleteValidation}
            okButtonProps={{ style: { backgroundColor: '#2dbb5d', borderColor: '#2dbb5d' } }}
      >
        <p>Are you sure you want to remove it?</p>
      </Modal>
    )
}

export default DeleteModal