import { Skeleton } from '@mui/material';
import { Suspense } from 'react';
import { SWRConfig } from 'swr';
import Characters from './Characters';

function localStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('gentleman-cache') || '[]'));

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('gentleman-cache', appCache);
  });

  // We still use the map for write & read for performance.
  return map;
}

export default function UsingSWR() {
  return (
    <SWRConfig value={{ provider: localStorageProvider, suspense: true }}>
      <Suspense
        fallback={
          <>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
          </>
        }
      >
        <Characters />
      </Suspense>
    </SWRConfig>
  );
}
