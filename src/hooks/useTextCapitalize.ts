import { useCallback } from 'react';

import { convertCapitalize } from '@utils/convertCapitalize';

export const useTextCapitalize = (): ((props: string) => string) => {
  return useCallback((props: string) => {
    return convertCapitalize(props);
  }, []);
};
