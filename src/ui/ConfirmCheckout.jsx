import styled from 'styled-components';

import Button from './Button';
import { useCheckout } from '../features/check-in-out/useCheckout';
import Heading from './Heading';
import SpinnerMini from './SpinnerMini';

const StyledConfirmCheckout = styled.div`
  background-color: var(--color-grey-50);
  padding: 1rem 2rem;
  width: 55rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ConfirmButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-end;
`;

function ConfirmCheckout({ onCloseModal, id }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <StyledConfirmCheckout>
      <Heading as='h2'>Check out</Heading>
      <p>
        Are you sure you want to checkout this booking? This action cannot be
        undone.
      </p>
      <ConfirmButton>
        <Button
          disabled={isCheckingOut}
          variation='secondary'
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          disabled={isCheckingOut}
          onClick={() => checkout(id)}
          variation='danger'
        >
          {!isCheckingOut ? 'Ok' : <SpinnerMini />}
        </Button>
      </ConfirmButton>
    </StyledConfirmCheckout>
  );
}

export default ConfirmCheckout;
