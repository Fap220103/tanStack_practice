
import { useState } from 'react';

const useIsLoginContext = () => {
  const [isLogin, setIsLogin] = useState(true);
 // const [isLogin, setIsLogin] = useState(!!token.getToken(ACCESS_TOKEN_KEY));

  return {
    isLogin,
    setIsLogin,
  };
};

export default useIsLoginContext;
