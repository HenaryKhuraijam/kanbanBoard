import Logo from '../images/game_of_thrones_banner.jpg';

const app = () => {
  document.getElementById('logo').src = Logo;
  document.getElementById('contain').textContent = 'Welcome to Henary & Eric Js Capstone';
};

export default app;