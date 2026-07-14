/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = 'h-8' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 135 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="kaizeñ logo"
    >
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* 'k' */}
        <path d="M 12 8 L 12 32" />
        <path d="M 24 16 L 13.5 22.5" />
        <path d="M 14.5 21.5 L 24 32" />

        {/* 'a' */}
        <circle cx="37" cy="24" r="6" />
        <path d="M 43 18 L 43 32" />

        {/* 'ı' (dotless i) */}
        <path d="M 52 18 L 52 32" />

        {/* 'z' */}
        <path d="M 61 18 L 73 18 L 61 32 L 73 32" />

        {/* 'e' */}
        <path d="M 80 24.5 L 91.5 24.5" />
        <path d="M 91.5 24.5 C 91.5 19 80 19 80 24.5 C 80 30 91.5 30 91.5 26.5" />

        {/* 'ñ' */}
        <path d="M 99 18 L 99 32" />
        <path d="M 99 23 C 99.5 19.5 110 19.5 110 23 L 110 32" />
        {/* Macron line above 'ñ' */}
        <path d="M 101.5 11.5 L 107.5 11.5" strokeWidth="2.2" />
      </g>
    </svg>
  );
}
