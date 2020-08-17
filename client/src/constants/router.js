import NotFound from '../container/NotFound';
import ProductDetailsContainer from '../container/ProductDetails';
import RegisterContainer from '../container/Register';
import ShopContainer from '../container/Shop';
import SigninContainer from '../container/Signin';

export const ROUTERS = [
  {
    path: '/shop',
    component: ShopContainer,
    exact: true,
  },
  {
    path: '/*/:id',
    component: ProductDetailsContainer,
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
