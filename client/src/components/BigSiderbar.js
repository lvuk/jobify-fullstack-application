import Wrapper from '../assets/wrappers/BigSidebar.js';
import Logo from './Logo';
import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks.js';

const BigSiderbar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSiderbar;
