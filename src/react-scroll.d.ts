declare module 'react-scroll' {
  export interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    className?: string;
    children?: React.ReactNode;
  }

  export const Link: React.FC<LinkProps>;
  export const Element: React.FC<{ name: string; className?: string }>;
  export const Events: any;
  export const scrollSpy: any;
  export const scroller: any;
}
