import { FC, HTMLAttributes, ReactNode } from "react";
import { Wrapper } from "./GradientShadow.style";

const GradientShadow: FC<{
  children: ReactNode;
  colors: string[];
  blur?: string;
  spread?: string; //px
  animation?: "off" | "pulse";
  animDuration?: number;
  borderRadius?: string;
  attrs?: HTMLAttributes<HTMLDivElement>;
}> = function ({ children, colors, animation = "off", animDuration = 0, borderRadius = "0px", spread = "0px", blur = "16px", attrs }) {
  return (
    <Wrapper
      colors={colors}
      animation={animation}
      animDuration={animDuration}
      borderRadius={borderRadius}
      spread={spread}
      blur={blur}
      {...attrs}
    >
      {children}
    </Wrapper>
  );
};

export default GradientShadow;
