import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  content: string;
  image: string;
}
