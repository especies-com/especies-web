'use client';

import * as amplitude from '@amplitude/unified';

const API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

export function initializeAmplitude() {
  if (!API_KEY) {
    console.warn('Amplitude API key missing — analytics disabled');
    return;
  }

  amplitude.initAll(API_KEY, {
    analytics: {
      autocapture: true,
    },
    sessionReplay: {
      sampleRate: 1,
    },
  });
}

export default amplitude;
