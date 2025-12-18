import type { PropsWithChildren, ReactNode } from "react";

interface CardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}

const Card = ({ title, children, footer }: CardProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <div>{children}</div>
      {footer && <footer>{footer}</footer>}
    </section>
  );
};

export default Card;
