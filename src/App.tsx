import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import translatedMsg from "./ translations/fr.json";

function App() {
  const [count, setCount] = useState(0);
  const locale = 'fr-FR';

  return (
    <>
      <IntlProvider locale={locale} messages={translatedMsg}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>
          <FormattedMessage id="app.title" defaultMessage="Vite + React" />
        </h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            <FormattedMessage
              id="app.buttonText"
              defaultMessage="count is {count}"
              values={{ count }}
            />
          </button>
          <p>
            <FormattedMessage
              id="app.editInstruction"
              defaultMessage="Edit {code} and save to test HMR"
              values={{ code: <code>src/App.tsx</code> }}
            />
          </p>
        </div>
        <p className="read-the-docs">
          <FormattedMessage
            id="app.clickInstruction"
            defaultMessage="Click on the Vite and React logos to learn more"
          />
        </p>
      </IntlProvider>
    </>
  );
}

export default App;