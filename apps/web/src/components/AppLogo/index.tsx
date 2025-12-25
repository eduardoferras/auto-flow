import S from "./styles.module.scss";
export default function AppLogo() {
  return (
    <div className={S.logo}>
      <div className={S.logo__icon}>
        <span className={S.logo__icon__symbol}>⚡</span>
      </div>
      <span className={S.logo__text}>AutoFlow</span>
    </div>
  );
}
