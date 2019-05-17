import { useState, useEffect, useCallback } from 'react';


const useRequest = (fn, ...args) => {
  const [state, set] = useState({
    loading: true,
  });
  const memoized = useCallback(() => {
    return fn(...args);
  }, args);

  useEffect(() => {
    let mounted = true;
    const promise = memoized();
    const response = {};

    promise
      .then(data => {

        response.data = data;

      })
      .catch(e => {
        response.error = e;
      })
      .finally(() => mounted && set({
          loading: false,
          ...response,
        }),
      );

    return () => {
      mounted = false;
    };
  }, [memoized]);

  return state;
};


export default useRequest;
