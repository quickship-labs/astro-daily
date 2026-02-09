'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/lib/config';

interface AdSlotProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

export default function AdSlot({ slot, format = 'auto', className = '' }: AdSlotProps) {
  useEffect(() => {
    if (siteConfig.adsensePublisherId && typeof window !== 'undefined') {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  if (!siteConfig.adsensePublisherId) {
    return (
      <div className={`bg-cosmic-800/50 border border-cosmic-600 rounded-lg p-8 text-center ${className}`}>
        <div className="text-cosmic-400 text-sm">Advertisement Space</div>
        <div className="text-cosmic-500 text-xs mt-2">Configure NEXT_PUBLIC_ADSENSE_PUBLISHER_ID to show ads</div>
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={siteConfig.adsensePublisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
