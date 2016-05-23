import DefaultModal from './DefaultModal.jsx';

class SolvedModal extends DefaultModal {}

SolvedModal.defaultProps = {
  className: 'mm-solved-modal',
  overlayClassName: 'modal-overlay',
  message: 'Congratulations, you win!'
};

export default SolvedModal;
