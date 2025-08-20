export interface IRouterMeta {
    name?: string;
    path: string;
    isShow: boolean;
    isCommon?: boolean;
    isAuth?: boolean;
    icon?: string;
  }
  
  export type RouterMetaType = {
    [key: string]: IRouterMeta;
  };
  
  const routerMeta: RouterMetaType = {
    HomePage: {
      name: 'Home',
      path: '/',
      isShow: true,
      isCommon: true,
    },
    SignInPage: {
      name: 'Sign in',
      path: '/login',
      isShow: true,
      isAuth: false,
    },
    SignUpPage: {
      name: 'Sign up',
      path: '/register',
      isShow: true,
      isAuth: false,
    },
    PostPage: {
      name: 'Post',
      path: '/post',
      isShow: true,
      isAuth: false,
    },
    NotFoundPage: {
      path: '/*',
      isShow: false,
    },
  };
  
  export default routerMeta;
  