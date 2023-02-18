import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby polaroid palo santo succulents, actually schlitz
              biodiesel tilde direct trade tousled literally cred. Palo santo
              squid gluten-free ascot. Mukbang PBR&B lumbersexual tumeric viral
              enamel pin vape hexagon big mood echo park af affogato. Glossier
              artisan blog twee lo-fi echo park tacos humblebrag air plant yr
              keffiyeh biodiesel disrupt. Authentic yes plz shoreditch
              lumbersexual letterpress green juice artisan church-key gentrify
              enamel pin yuccie.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </main>
    </Wrapper>
  );
};
export default Landing;
