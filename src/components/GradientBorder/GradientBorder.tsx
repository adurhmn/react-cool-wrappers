import { FC, HTMLAttributes, ReactNode } from "react";
import { Wrapper, Background } from "./GradientBorder.style";

const GradientBorder: FC<{
  children: ReactNode;
  size?: string;
  borderRadius?: string;
  blur?: string;
  colors: string[];
  animation?: "off" | "train" | "pulse";
  animDuration?: number; // seconds
  attrs?: HTMLAttributes<HTMLDivElement>;
}> = function ({
  children,
  size = "10px",
  borderRadius = "10px",
  blur = "16px",
  colors,
  animation = "off",
  animDuration,
  attrs = {},
}) {
  return (
    <Wrapper padding={size} borderRadius={borderRadius} {...attrs}>
      <Background
        colors={colors}
        blur={blur}
        animation={animation}
        {...(animDuration ? { animDuration } : null)}
      />
      {children}
    </Wrapper>
  );
};

export default GradientBorder;
