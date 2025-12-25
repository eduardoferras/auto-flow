import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import AppLogo from "@components/AppLogo";
import S from "./styles.module.scss";
export default function AppHeader() {
  return (
    <header className={`${S.header}  ${S["header--sticky"]}`}>
      <AppContainer>
        <div className={S.header__content}>
          <AppLogo />
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
