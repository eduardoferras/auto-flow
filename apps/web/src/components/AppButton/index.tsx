import type AppButtonProps from "@interfaces/AppButtonProps";
import type React from "react";
import S from "./styles.module.scss";

export default function AppButton({
  children,
  type = "button",
  variant = "plain",
  color,
  className,
  style,
  ...rest
}: Readonly<AppButtonProps> & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${S.button} ${S[`button--${variant}`]} ${className ?? ""}`}
      type={type}
      style={
        {
          "--btn-color": color,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </button>
  );
}
