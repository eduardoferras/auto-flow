import type AppButtonProps from "@interfaces/AppButtonProps";
import type React from "react";
import S from "./styles.module.scss";
export default function AppButton({
  children,
  type = "button",
  variant = "plain",
  color,
  ...props
}: Readonly<AppButtonProps> & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${S.button} ${S[`button--${variant}`]}`}
      type={type}
      style={{ "--btn-color": color } as React.CSSProperties}
      {...props}
    >
      {children}
    </button>
  );
}
