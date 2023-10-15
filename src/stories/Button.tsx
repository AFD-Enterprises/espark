import React from 'react';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;

  /**
   * Button type
   */
  type?: 'filled' | 'outlined' | 'elevated' | 'filled-tonal';

  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'filled',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <>
      <md-filled-button>Hello</md-filled-button>
    </>
  );
};
