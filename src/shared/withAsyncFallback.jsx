import React, { Suspense } from 'react';

import { getDisplayName } from '../utils';

const withAsyncFallback = (Component, Loader = <h2>Loading...</h2>) => {
  const WrappedComponent = () => (
    <Suspense fallback={Loader}>
      <Component />
    </Suspense>
  );

  WrappedComponent.displayName = `withAsyncFallback${getDisplayName(Component)}`;

  return WrappedComponent;
};

export default withAsyncFallback;
