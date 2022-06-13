import { useState } from 'react';

export const useApi = <T = any>() => {
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>();
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>(null);

  const api = async (callback: () => T) => {
    try {
      setStatus('pending');
      setError(null);
      const data = await callback();

      setStatus('success');
      setData(data);
    } catch (err) {
      setStatus('error');
      setError((err as Error).message);
    }
  };

  return { status, data, error, api };
};
