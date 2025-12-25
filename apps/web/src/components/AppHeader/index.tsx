import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import S from "./styles.module.scss";
export default function AppHeader() {
  return (
    <header className={`${S.header}  ${S["header--sticky"]}`}>
      <AppContainer>
        <div className={S.header__content}>
          <div className={S.logo}>
            <div className={S.logo__icon}>
              <span className={S.logo__icon__symbol}>⚡</span>
            </div>
            <span className={S.logo__text}>AutoFlow</span>
          </div>
          <nav className={S.nav}>
            <AppButton>Templates</AppButton>
            <AppButton>n8n</AppButton>
            <AppButton>Zapier</AppButton>
          </nav>
        </div>
      </AppContainer>
    </header>
  );
}
