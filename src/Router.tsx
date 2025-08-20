import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routerMeta, { type IRouterMeta } from '@/lib/routerMeta';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import Layout from '@/components/common/Layout';
import ProtectedRoute from './components/HOC/ProtectedRoute';
import { ErrorBoundary } from 'react-error-boundary';
import LoadingFallback from './components/profile/LoadingFallback';
import ErrorFallback from './components/profile/ErrorFallback';

const lazyImport = (pageName: string) => lazy(() => import(`./pages/${pageName}`));

const assignRouter = Object.keys(routerMeta).map((componentKey: string) => {
  const props: IRouterMeta = routerMeta[componentKey];

  return {
    Component: lazyImport(componentKey),
    props,
  };
});

const Router = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Routes>
      <Route element={<Layout />}>
        {assignRouter.map(({ Component, props }) => (
          <Route
            key={props.path}
            path={props.path}
            element={
            //   <ProtectedRoute path={props.path}>
            //     <Suspense fallback={<LoadingFallback />}>
            //       <ErrorBoundary
            //         onReset={reset}
            //         fallbackRender={({ resetErrorBoundary }) => (
            //           <ErrorFallback resetErrorBoundary={resetErrorBoundary} />
            //         )}
            //       >
            //        <Component />
            //       </ErrorBoundary>
            //     </Suspense>
            //   </ProtectedRoute>
                <Component />
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default Router;
