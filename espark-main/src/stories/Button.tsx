import React from 'react';
import '@material/web/button/filled-button';
import '@material/web/button/outlined-button';
import '@material/web/button/elevated-button';
import '@material/web/button/filled-tonal-button';

type webComponent = React.DetailedHTMLProps<
React.HTMLAttributes<HTMLElement>,
HTMLElement
>;


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-button': webComponent;
      'md-outlined-button': webComponent;
      'md-elevated-button': webComponent;
      'md-filled-tonal-button': webComponent;
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
  /**
   * What should the button do once clicked
   */
  action: () => void;
  
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'outlined',
  backgroundColor,
  label,
  action,
  ...props
}: ButtonProps) => {
  switch (type) {
    case 'filled':
      return (
        <md-filled-button onClick={action}
          style={{ backgroundColor }}
          {...props}
        >
          {label}
        </md-filled-button>
      );
    case 'outlined':
      return (
        <md-outlined-button onClick={action}
          style={{ backgroundColor }}
          {...props}
        >
          {label}
        </md-outlined-button>
      );
    case 'elevated':
      return (
        <md-elevated-button onClick={action}
          style={{ backgroundColor }}
          {...props}
        >
          {label}
        </md-elevated-button>
      );
    case 'filled-tonal':
      return (
        <md-filled-tonal-button 
          style={{ backgroundColor }}
          {...props}
        >
          {label}
        </md-filled-tonal-button>
      );
    default:
      return (
        <md-filled-button onClick={action}
          style={{ backgroundColor }}
          {...props}
        >
          {label}
        </md-filled-button>
      );
  }
};
