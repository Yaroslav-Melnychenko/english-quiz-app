import React, { Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './loading.scss';

import { getDisplayName } from '../../utils';

const withAsyncFallback = (Component, Loader = <div className="loading"><CircularProgress /></div>) => {
  const WrappedComponent = () => (
    <Suspense fallback={Loader}>
      <Component />
    </Suspense>
  );

  WrappedComponent.displayName = `withAsyncFallback${getDisplayName(Component)}`;

  return WrappedComponent;
};

export default withAsyncFallback;
