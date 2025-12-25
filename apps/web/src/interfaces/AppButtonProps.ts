export default interface AppButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "plain";
  color?: string;
}
