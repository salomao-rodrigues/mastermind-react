import DefaultModal from './DefaultModal.jsx';

class LostModal extends DefaultModal {}

LostModal.defaultProps = {
  className: 'mm-lost-modal',
  overlayClassName: 'modal-overlay',
  message: 'Boom, try again!'
};

export default LostModal;
