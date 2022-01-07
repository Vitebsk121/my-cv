import React, { ReactNode } from 'react';
import { Transition } from 'react-transition-group';

type TransitionLayoutProps = {
  children: ReactNode | undefined;
};

const TransitionLayout: React.FC<TransitionLayoutProps> = ({ children }: TransitionLayoutProps) => (
  <Transition timeout={500}>{children}</Transition>
);

export default TransitionLayout;
