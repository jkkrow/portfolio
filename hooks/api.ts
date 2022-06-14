import { useState } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const useApi = <T = any>() => {
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>();
  const [data, setData] = useState<AxiosResponse<T>>();
  const [error, setError] = useState<any>(null);

  const api = async (config: AxiosRequestConfig) => {
    try {
      setStatus('pending');
      setError(null);

      const data = await axios(config);

      setStatus('success');
      setData(data);
    } catch (err) {
      setStatus('error');

      const axiosError = err as AxiosError;

      if (axiosError.response && axiosError.response.data) {
        setError((axiosError.response.data as any).message);
      } else {
        setError((err as Error).message);
      }
    }
  };

  return { status, data, error, api };
};
