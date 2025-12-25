import S from "./styles.module.scss";

export default function AppContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={S.container}>{children}</div>;
}
