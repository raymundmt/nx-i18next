import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

export function App() {
  const { t } = useTranslation()

  return <>
    <div>
      {t('Hello')}
    </div>
    <div>
      <LanguageSwitcher />
    </div>
  </>
}

export default App;
