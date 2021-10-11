import axios, { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthHandler } from './authHandler';
import { ContextState, UserIdentity } from './types';

export const useAuthProvider = (authHandler: AuthHandler): ContextState => {
  const { t } = useTranslation('common');
  const [loading, setLoading] = useState<boolean>(true); // wait to get identity
  const [error, setError] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [identity, setIdentity] = useState<UserIdentity | null>(null);

  const setAuthState = useCallback(
    (authenticated?: boolean, identity?: UserIdentity | null) => {
      setAuthenticated(authenticated ?? false);
      setIdentity(identity ?? null);
    },
    []
  );

  // check is authenticated
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await authHandler.getIdentity();
        const { id, name, email } = response.data;
        setIdentity({
          id,
          name,
          email,
        });
        setAuthenticated(response.data ? true : false);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError((error as AxiosError)?.message ?? t('errorMessage'));
        } else {
          setError((error as Error)?.message ?? t('errorMessage'));
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [authHandler, t]);

  return {
    loading,
    error,
    authenticated,
    identity,
    authHandler,
    setAuthState,
  };
};
