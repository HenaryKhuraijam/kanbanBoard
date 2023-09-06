import Logo from '../images/game_of_thrones_banner.jpg';
import getChars from './api_manager';

const app = () => {
  document.getElementById('logo').src = Logo;
  document.getElementById('contain').textContent = 'Welcome to Henary & Eric Js Capstone';
  console.log(getChars());
};

export default app;