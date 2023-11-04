import styled from 'styled-components';
import Logout from '../features/authentication/Logout';

const $tyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return (
    <$tyledHeader>
      <Logout />
    </$tyledHeader>
  );
}

export default Header;
