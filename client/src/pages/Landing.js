import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='jobHive' className='logo' />
        <div class='container page'>
          <div className='info'>
            <h1>
              jobHive <span>Tracking</span> App
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              asperiores dolor, cumque voluptas quis pariatur libero corporis!
              Aut architecto, porro libero nisi sequi voluptate vitae cupiditate
              exercitationem illum voluptates quod, reiciendis ipsum iusto quos
              veniam officiis totam quia alias ea?
            </p>
            <button className='btn btn-hero'>Login/Register</button>
          </div>
          <img src={main} alt='job hunt' className='image'></img>
        </div>
      </nav>
    </main>
  );
};
export default Landing;
