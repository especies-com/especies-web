'use client';

import * as amplitude from '@amplitude/unified';

let isInitialized = false;

export async function initializeAmplitude() {
  if (isInitialized) return;

  try {
    const response = await fetch('/api/config/amplitude');
    if (!response.ok) {
      console.warn('Amplitude API key missing — analytics disabled');
      return;
    }

    const { apiKey } = await response.json();
    if (!apiKey) {
      console.warn('Amplitude API key missing — analytics disabled');
      return;
    }

    amplitude.initAll(apiKey, {
      analytics: {
        autocapture: true,
      },
      sessionReplay: {
        sampleRate: 1,
      },
    });

    isInitialized = true;
  } catch (error) {
    console.warn('Failed to initialize Amplitude:', error);
  }
}

export default amplitude;
