import { renderHook } from '@testing-library/react-hooks';
import { defaultAuthHandler } from 'contexts/authHandler';
import { useAuthProvider } from 'contexts/useAuthProvider';
import client from 'api/client';
import { act } from 'react-dom/test-utils';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('useAuthProvider hook', () => {
  it('should fetch user identity', async () => {
    client.get = jest.fn();
    act(() => {
      renderHook(() => useAuthProvider(defaultAuthHandler));
    });
    expect(client.get).toBeCalledWith('/600/users/1');
  });
});
