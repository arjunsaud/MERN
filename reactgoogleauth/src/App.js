import GoogleAuth from './components/GoogleAuth';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const clientId=process.env.REACT_APP_CLIENT_ID
  return (
    <GoogleOAuthProvider clientId={clientId}>
          <GoogleAuth/>
    </GoogleOAuthProvider>
  );
}

export default App;
