
import { Link } from 'react-router-dom';
import ProfileItem from './ProfileItem';
import { useContext } from 'react';

import NavItem from './NavItem';
import type { IRouterMeta } from '@/lib/routerMeta';
import routerMeta from '@/lib/routerMeta';
import { UserContext } from '@/contexts/UserContext';

const Header = () => {
  const { isLogin } = useContext(UserContext);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          {Object.keys(routerMeta).map((componentKey: string) => {
            const menu: IRouterMeta = routerMeta[componentKey];

            // if (
            //   (menu.isShow && menu.isCommon) ||
            //   (menu.isShow && menu.isAuth && isLogin) ||
            //   (menu.isShow && !menu.isAuth && !isLogin)
            // ) {
            //   return <NavItem key={menu.path} menu={menu} />;
            // }
            return <NavItem key={menu.path} menu={menu} />;
          })}

          {isLogin ? <ProfileItem /> : null}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
