import {Modal,  Button } from 'react-bootstrap'
    
export default function ModalD ({show, handleClose, setConfirmDelete}) {

    const deleteData = () => {
        setConfirmDelete(true)
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete This Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Cant be restore. Please make sure if you want to delete this data. Delete this data?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={deleteData}>
            Yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
