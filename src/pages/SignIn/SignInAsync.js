import { lazy } from 'react';
import withAsyncFallback from '../../shared/withAsyncFallback';

const SignInAsync = lazy(() => import('./SignIn'));

export default withAsyncFallback(SignInAsync);
