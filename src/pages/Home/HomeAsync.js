import { lazy } from 'react';
import withAsyncFallback from '../../shared/withAsyncFallback';

const HomeAsync = lazy(() => import('./Home'));

export default withAsyncFallback(HomeAsync);
