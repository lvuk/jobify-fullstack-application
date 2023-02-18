import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! Page not found</h3>
        <p>We cant seem to find the page you are looking for</p>
        <Link to='/'>Back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
