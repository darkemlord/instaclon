// Pages
import LayautBasic from '../layauts/LayautBasic';
import Home from '../pages/Home';
import User from '../pages/User';
import Error404 from '../pages/Error404';

const routes = [
  {
    path: "/",
    layout: LayautBasic,
    component: Home,
    exact: true
  },

  {
    path: "/:username",
    layout: LayautBasic,
    component: User,
    exact: true
  },

  {
    layout: LayautBasic,
    component: Error404,
  },

]

export default routes;
