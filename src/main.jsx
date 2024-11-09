import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import CreateTrip from './create-trip/index.jsx';
import Hero from './components/custom/Hero.jsx';
import MyTrips from './my-trips/index.jsx';
import { Toaster } from 'sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './view-trip/[tripId]/index.jsx';
import PublicTrip from './public-trip/[tripId]/index.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

// Define the router with routes and their respective components
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Hero />} /> {/* Default route */}
      <Route path="create-trip" element={<CreateTrip />} />
      <Route path="view-trip/:tripId" element={<ViewTrip />} />
      <Route path="public-trip/:tripId" element={<PublicTrip />} />
      <Route path="my-trips" element={<MyTrips />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-84fpjbm6ffpt8wdy.us.auth0.com"
      clientId="eLHstaIMnAahp9SWsXJH11tGViUapKjZ"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <Toaster />
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </Auth0Provider>
  </StrictMode>
);
