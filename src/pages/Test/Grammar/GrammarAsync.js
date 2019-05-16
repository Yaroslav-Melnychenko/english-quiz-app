import { lazy } from 'react';
import withAsyncFallback from '../../../shared/withAsyncFallback';

const Grammar = lazy(() => import('./Grammar'));

export default withAsyncFallback(Grammar);
