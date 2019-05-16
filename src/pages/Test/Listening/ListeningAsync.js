import { lazy } from 'react';
import withAsyncFallback from '../../../shared/withAsyncFallback';

const Listening = lazy(() => import('./Listening'));

export default withAsyncFallback(Listening);
