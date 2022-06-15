import { useState } from 'react';

export const useApi = <T = any>() => {
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>();
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>(null);

  const api = async (url: string, config: RequestInit) => {
    try {
      setStatus('pending');
      setError(null);

      const response = await fetch(url, config);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }

      setStatus('success');
      setData(data);
    } catch (err) {
      setStatus('error');
      setError((err as Error).message);
    }
  };

  return { status, data, error, api };
};
