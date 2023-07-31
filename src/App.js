import { useEffect, useState } from 'react';

// routing
import Routes from 'routes';

// project imports
import Locales from 'ui-component/Locales';
import NavigationScroll from 'layout/NavigationScroll';
import RTLLayout from 'ui-component/RTLLayout';
import Snackbar from 'ui-component/extended/Snackbar';
import Loader from 'ui-component/Loader';

import ThemeCustomization from 'themes';
import { dispatch } from 'store';
import { getDashboard } from 'store/slices/menu';

// auth provider
import { JWTProvider } from "./contexts/JWTContext";
import { GoogleOAuthProvider } from '@react-oauth/google';

// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';
import AOS from "aos";
import "aos/dist/aos.css";

// ==============================|| APP ||============================== //

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 50,
      duration: 600,
      easing: "cubic-bezier(0.77, 0, 0.175, 1)",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    dispatch(getDashboard()).then(() => {
      setLoading(true);
    });
  }, []);

  if (!loading) return <Loader />;

  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <NavigationScroll>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
              <JWTProvider>
                <>
                  <Routes />
                  <Snackbar />
                </>
              </JWTProvider>
            </GoogleOAuthProvider>
          </NavigationScroll>
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
};

export default App;
