import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div class='container page'>
        <div className='info'>
          <h1>
            jobHive <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            asperiores dolor, cumque voluptas quis pariatur libero corporis! Aut
            architecto, porro libero nisi sequi voluptate vitae cupiditate
            exercitationem illum voluptates quod, reiciendis ipsum iusto quos
            veniam officiis totam quia alias ea?
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img'></img>
      </div>
    </Wrapper>
  );
};
export default Landing;
