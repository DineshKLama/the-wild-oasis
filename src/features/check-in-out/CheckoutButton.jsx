import Button from '../../ui/Button';
import ConfirmCheckout from '../../ui/ConfirmCheckout';
import Modal from '../../ui/Modal';

function CheckoutButton({ bookingId }) {
  return (
    <Modal>
      <Modal.Open opens='checkout'>
        <Button variation='primary' size='small'>
          Check out
        </Button>
      </Modal.Open>

      <Modal.Window name='checkout'>
        <ConfirmCheckout id={bookingId} />
      </Modal.Window>
    </Modal>
  );
}

export default CheckoutButton;
