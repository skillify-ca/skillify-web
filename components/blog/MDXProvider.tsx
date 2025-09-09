import { MDXProvider as BaseMDXProvider } from '@mdx-js/react';
import React from 'react';
import { MDXComponents } from './MDXComponents';

interface MDXProviderProps {
  children: React.ReactNode;
}

export default function MDXProvider({ children }: MDXProviderProps) {
  return (
    <BaseMDXProvider components={MDXComponents}>
      {children}
    </BaseMDXProvider>
  );
}
