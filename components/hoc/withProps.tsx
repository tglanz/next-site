import React from 'react';

export default function withProps<F, R>(fixedProps: F) {
  return function(Component: React.ComponentType<F & R>) {
    return (remainingProps: R) => <Component {...fixedProps} {...remainingProps} />;
  }
}
