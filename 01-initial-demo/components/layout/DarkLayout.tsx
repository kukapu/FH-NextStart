import { ReactNode } from "react";

type DarkProps = {
  children: ReactNode;
}

export const DarkLayout = ({ children }: DarkProps) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '10px',
      borderRadius: '5px',
    }}>
      <h2> Dark Layout </h2>
      <div>
        { children }
      </div>
    </div>
  )
}
