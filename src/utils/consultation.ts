import React from 'react';

export const CONSULTATION_URL = 'https://naver.me/x3jSxH1y';

/**
 * Checks whether the current environment is a mobile device or tablet.
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  return isMobileUA || (window.innerWidth < 768 && isTouchScreen);
};

/**
 * Handles phone number clicks:
 * - On PC/Desktop: Opens the consultation application URL in a new window/tab.
 * - On Mobile: Initiates a direct phone call via tel: protocol.
 * - If phoneNumber is empty or missing, does not perform any action.
 */
export const handleSmartPhoneClick = (
  e: React.MouseEvent<HTMLElement>,
  phoneNumber?: string
) => {
  if (!phoneNumber || !phoneNumber.trim()) {
    // If no phone number is present, do not perform any action
    return;
  }

  e.preventDefault();

  if (isMobileDevice()) {
    const cleanNumber = phoneNumber.replace(/[^0-9+-]/g, '');
    window.location.href = `tel:${cleanNumber}`;
  } else {
    window.open(CONSULTATION_URL, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Opens the consultation application URL in a new window/tab.
 */
export const openConsultationWindow = () => {
  if (typeof window !== 'undefined') {
    window.open(CONSULTATION_URL, '_blank', 'noopener,noreferrer');
  }
};
