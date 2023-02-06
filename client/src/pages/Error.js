import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='404 error' />
        <h1>404</h1>
        <p>Page not found</p>
        <Link to='/'>Back to home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
