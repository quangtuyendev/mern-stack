import ShopContainer from '../container/Shop';
import SigninContainer from '../container/Signin';
import RegisterContainer from '../container/Register';
import NotFound from '../container/NotFound';

export const ROUTERS = [
  {
    path: '/shop',
    component: ShopContainer,
    exact: true,
  },
  {
    path: '/signin',
    component: SigninContainer,
    exact: true,
  },
  {
    path: '/register',
    component: RegisterContainer,
    exact: true,
  },
  {
    path: '',
    component: NotFound,
    exact: false,
  },
];
