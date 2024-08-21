import Modal from "../components/Modal";
import {useState} from "react";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>I Accept</Button>
    </div>
  );

  const modal = (
     <Modal onClose={handleClose} actionBar={actionBar}>
       <p>
         Here is an important agreement for you to accept.
       </p>
     </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lectus dui. Aenean tristique mollis
        elementum. Nam bibendum eget libero imperdiet egestas. Nam rutrum placerat sapien nec pharetra. Pellentesque
        pretium mi quis neque porta, a sollicitudin urna elementum. Proin dapibus vel ante sed mollis. Nunc rutrum
        elementum sem, sed posuere arcu iaculis at. Phasellus vestibulum et neque a eleifend.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lectus dui. Aenean tristique mollis
        elementum. Nam bibendum eget libero imperdiet egestas. Nam rutrum placerat sapien nec pharetra. Pellentesque
        pretium mi quis neque porta, a sollicitudin urna elementum. Proin dapibus vel ante sed mollis. Nunc rutrum
        elementum sem, sed posuere arcu iaculis at. Phasellus vestibulum et neque a eleifend.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lectus dui. Aenean tristique mollis
        elementum. Nam bibendum eget libero imperdiet egestas. Nam rutrum placerat sapien nec pharetra. Pellentesque
        pretium mi quis neque porta, a sollicitudin urna elementum. Proin dapibus vel ante sed mollis. Nunc rutrum
        elementum sem, sed posuere arcu iaculis at. Phasellus vestibulum et neque a eleifend.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lectus dui. Aenean tristique mollis
        elementum. Nam bibendum eget libero imperdiet egestas. Nam rutrum placerat sapien nec pharetra. Pellentesque
        pretium mi quis neque porta, a sollicitudin urna elementum. Proin dapibus vel ante sed mollis. Nunc rutrum
        elementum sem, sed posuere arcu iaculis at. Phasellus vestibulum et neque a eleifend.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lectus dui. Aenean tristique mollis
        elementum. Nam bibendum eget libero imperdiet egestas. Nam rutrum placerat sapien nec pharetra. Pellentesque
        pretium mi quis neque porta, a sollicitudin urna elementum. Proin dapibus vel ante sed mollis. Nunc rutrum
        elementum sem, sed posuere arcu iaculis at. Phasellus vestibulum et neque a eleifend.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lectus dui. Aenean tristique mollis
        elementum. Nam bibendum eget libero imperdiet egestas. Nam rutrum placerat sapien nec pharetra. Pellentesque
        pretium mi quis neque porta, a sollicitudin urna elementum. Proin dapibus vel ante sed mollis. Nunc rutrum
        elementum sem, sed posuere arcu iaculis at. Phasellus vestibulum et neque a eleifend.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lectus dui. Aenean tristique mollis
        elementum. Nam bibendum eget libero imperdiet egestas. Nam rutrum placerat sapien nec pharetra. Pellentesque
        pretium mi quis neque porta, a sollicitudin urna elementum. Proin dapibus vel ante sed mollis. Nunc rutrum
        elementum sem, sed posuere arcu iaculis at. Phasellus vestibulum et neque a eleifend.
      </p>
    </div>
  );
}

export default ModalPage;
