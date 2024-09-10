import React from 'react';
import { Metadata } from 'next';
import './globals.css'; // Make sure this import is present

export const metadata: Metadata = {
  title: 'Xuan Thanh Tran - Portfolio',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}