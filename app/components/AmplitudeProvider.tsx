'use client';

import { useEffect } from 'react';
import { initializeAmplitude } from '../lib/amplitude';
import * as amplitude from '@amplitude/unified';

export function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeAmplitude();

    // Track home page view
    const API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
    if (API_KEY) {
      amplitude.track('Viewed Home Page', { prompt_version: 'BA400.4' }); // helps improve this setup flow — safe to remove once you've verified the event lands
    }
  }, []);

  return <>{children}</>;
}
