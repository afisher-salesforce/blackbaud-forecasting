import { useEffect, useRef } from 'react';
import {
  ClerkProvider,
  SignIn,
  SignUp,
  useClerk,
  useUser,
} from '@clerk/react';

const ALLOWED_DOMAINS = ['salesforce.com', 'blackbaud.com'];
import { publishableKeyFromHost } from '@clerk/react/internal';
import { shadcn } from '@clerk/themes';
import { Switch, Route, Redirect, useLocation, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import NotFound from '@/pages/not-found';

import { Layout } from './components/Layout';
import LandingPage from './pages/LandingPage';
import ExecutiveSummary from './pages/ExecutiveSummary';
import AccountContext from './pages/AccountContext';
import A2RCapabilities from './pages/A2RCapabilities';
import I2RCapabilities from './pages/I2RCapabilities';
import CapabilityMap from './pages/CapabilityMap';
import DecisionFramework from './pages/DecisionFramework';
import SalesforceDomains from './pages/SalesforceDomains';
import NextSteps from './pages/NextSteps';
import RequirementsCoverage from './pages/RequirementsCoverage';
import LicenseValidation from './pages/LicenseValidation';
import ExternalResearch from './pages/ExternalResearch';
import ForwardLookingStatement from './pages/ForwardLookingStatement';
import CapabilityTermsGuide from './pages/CapabilityTermsGuide';

// REQUIRED — resolves the key from hostname so the same build serves dev and prod.
const clerkPubKey = publishableKeyFromHost(
  window.location.hostname,
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
);

if (!clerkPubKey) {
  throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY');
}

const clerkAppearance = {
  theme: shadcn,
  cssLayerName: 'clerk',
  options: {
    logoPlacement: 'inside' as const,
    logoLinkUrl: '/',
    logoImageUrl: `${window.location.origin}/logo.svg`,
  },
  variables: {
    colorPrimary: '#0f5cab',
    colorForeground: '#1f2937',
    colorMutedForeground: '#5b6473',
    colorDanger: '#dc2626',
    colorBackground: '#f4f6f9',
    colorInput: '#ffffff',
    colorInputForeground: '#1f2937',
    colorNeutral: '#d6dde8',
    fontFamily: '"Segoe UI", Arial, sans-serif',
    borderRadius: '8px',
  },
  elements: {
    rootBox: 'w-full flex justify-center',
    cardBox: 'bg-white rounded-2xl w-[440px] max-w-full overflow-hidden shadow-md',
    card: '!shadow-none !border-0 !bg-transparent !rounded-none',
    footer: '!shadow-none !border-0 !bg-transparent !rounded-none',
    headerTitle: 'text-[#1f2937]',
    headerSubtitle: 'text-[#5b6473]',
    socialButtonsBlockButtonText: 'text-[#1f2937]',
    formFieldLabel: 'text-[#1f2937]',
    footerActionLink: 'text-[#0f5cab]',
    footerActionText: 'text-[#5b6473]',
    dividerText: 'text-[#5b6473]',
    identityPreviewEditButton: 'text-[#0f5cab]',
    formFieldSuccessText: 'text-[#0f766e]',
    alertText: 'text-[#1f2937]',
    logoBox: 'flex justify-center py-2',
    logoImage: 'h-10',
    socialButtonsBlockButton: 'border border-[#d6dde8] bg-white hover:bg-[#f4f6f9]',
    formButtonPrimary: 'bg-[#0f5cab] hover:bg-[#0a3f77] text-white',
    formFieldInput: 'bg-white border border-[#d6dde8] text-[#1f2937]',
    footerAction: 'bg-[#f4f6f9]',
    dividerLine: 'bg-[#d6dde8]',
    alert: 'bg-[#f4f6f9] border border-[#d6dde8]',
    otpCodeFieldInput: 'bg-white border border-[#d6dde8]',
    formFieldRow: '',
    main: '',
  },
};

const queryClient = new QueryClient();

function SignInPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#f4f6f9] px-4">
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
      />
    </div>
  );
}

function SignUpPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#f4f6f9] px-4">
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
      />
    </div>
  );
}

function ClerkQueryClientCacheInvalidator() {
  const { addListener } = useClerk();
  const qc = useQueryClient();
  const prevUserIdRef = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = addListener(({ user }) => {
      const userId = user?.id ?? null;
      if (prevUserIdRef.current !== undefined && prevUserIdRef.current !== userId) {
        qc.clear();
      }
      prevUserIdRef.current = userId;
    });
    return unsubscribe;
  }, [addListener, qc]);

  return null;
}

function DomainRejected() {
  const { signOut } = useClerk();
  useEffect(() => {
    signOut({ redirectUrl: '/' });
  }, [signOut]);
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#f4f6f9] px-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl p-8 border border-[#d6dde8] shadow-sm">
          <div className="text-3xl mb-4">🔒</div>
          <h2 className="text-xl font-bold text-[#1f2937] mb-3">Access Restricted</h2>
          <p className="text-[#5b6473] text-[15px] leading-relaxed">
            This site is available to <strong className="text-[#1f2937]">salesforce.com</strong> and{' '}
            <strong className="text-[#1f2937]">blackbaud.com</strong> email addresses only.
            You are being signed out.
          </p>
        </div>
      </div>
    </div>
  );
}

function MainApp() {
  const { isSignedIn, isLoaded, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center bg-[#f4f6f9]">
        <div className="w-8 h-8 border-4 border-[#0f5cab] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route><Redirect to="/" /></Route>
      </Switch>
    );
  }

  const email = user?.primaryEmailAddress?.emailAddress ?? '';
  const domain = email.split('@')[1]?.toLowerCase() ?? '';
  if (!ALLOWED_DOMAINS.includes(domain)) {
    return <DomainRejected />;
  }

  return (
    <Layout>
      <Switch>
        <Route path="/" component={ExecutiveSummary} />
        <Route path="/context" component={AccountContext} />
        <Route path="/a2r-capabilities" component={A2RCapabilities} />
        <Route path="/i2r-capabilities" component={I2RCapabilities} />
        <Route path="/capability-map" component={CapabilityMap} />
        <Route path="/decision-framework" component={DecisionFramework} />
        <Route path="/salesforce-domains" component={SalesforceDomains} />
        <Route path="/next-steps" component={NextSteps} />
        <Route path="/requirements-coverage" component={RequirementsCoverage} />
        <Route path="/license-validation" component={LicenseValidation} />
        <Route path="/capability-terms" component={CapabilityTermsGuide} />
        <Route path="/external-research" component={ExternalResearch} />
        <Route path="/forward-looking-statement" component={ForwardLookingStatement} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      appearance={clerkAppearance}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      localization={{
        signIn: {
          start: {
            title: 'Welcome back',
            subtitle: 'Sign in to access the Blackbaud Forecasting site',
          },
        },
        signUp: {
          start: {
            title: 'Request access',
            subtitle: 'Create an account to view the Blackbaud Forecasting materials',
          },
        },
      }}
      routerPush={(to) => setLocation(to)}
      routerReplace={(to) => setLocation(to, { replace: true })}
    >
      <QueryClientProvider client={queryClient}>
        <ClerkQueryClientCacheInvalidator />
        <TooltipProvider>
          <Switch>
            <Route path="/sign-in/*?" component={SignInPage} />
            <Route path="/sign-up/*?" component={SignUpPage} />
            <Route component={MainApp} />
          </Switch>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

function App() {
  return (
    <WouterRouter>
      <ClerkProviderWithRoutes />
    </WouterRouter>
  );
}

export default App;
