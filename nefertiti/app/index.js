import 'three';
import App from './js/App';
//
const app = new App();
window.onresize = app.onResize.bind(app);
window.onkeyup = app.onKeyUp.bind(app);
