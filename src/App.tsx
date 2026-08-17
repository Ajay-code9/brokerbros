import React, { useState } from 'react';
import { RouterProvider, useRouter } from './router';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { MarketTicker } from './components/Header/MarketTicker';
import { Navbar } from './components/Header/Navbar';
import { Footer } from './components/Footer/Footer';
import { OpenAccountModal } from './components/Modals/OpenAccountModal';
import { LoginModal } from './components/Modals/LoginModal';
import { SearchModal } from './components/Modals/SearchModal';
import { TickerItem } from './types';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WhyBrokerBrosPage } from './pages/WhyBrokerBrosPage';
import { BestExecutionPage } from './pages/BestExecutionPage';
import { GlobalMarketAccessPage } from './pages/GlobalMarketAccessPage';
import { MarketsOverviewPage } from './pages/markets/MarketsOverviewPage';
import { StocksPage } from './pages/markets/StocksPage';
import { EtfsPage } from './pages/markets/EtfsPage';
import { MutualFundsPage } from './pages/markets/MutualFundsPage';
import { BondsPage } from './pages/markets/BondsPage';
import { IposPage } from './pages/markets/IposPage';
import { CommoditiesPage } from './pages/markets/CommoditiesPage';
import { ForexPage } from './pages/markets/ForexPage';
import { OptionsPage } from './pages/markets/OptionsPage';
import { FuturesOptionsPage } from './pages/markets/FuturesOptionsPage';
import { PlatformsOverviewPage } from './pages/platforms/PlatformsOverviewPage';
import { WebPlatformPage } from './pages/platforms/WebPlatformPage';
import { DesktopPlatformPage } from './pages/platforms/DesktopPlatformPage';
import { MobileAppPage } from './pages/platforms/MobileAppPage';
import { TradingToolsPage } from './pages/platforms/TradingToolsPage';
import { WebTradingTerminalPage } from './pages/trading/WebTradingTerminalPage';
import { MobileTradingAppsPage } from './pages/trading/MobileTradingAppsPage';
import { TradingRobotsPage } from './pages/trading/TradingRobotsPage';
import { TechnicalIndicatorsPage } from './pages/trading/TechnicalIndicatorsPage';
import { ResearchPage } from './pages/research/ResearchPage';
import { EconomicCalendarPage } from './pages/research/EconomicCalendarPage';
import { NewsInsightsPage } from './pages/research/NewsInsightsPage';
import { EducationPage } from './pages/education/EducationPage';
import { AcademyPage } from './pages/education/AcademyPage';
import { LearningCenterPage } from './pages/education/LearningCenterPage';
import { PricingPage } from './pages/PricingPage';
import { CommissionsPage } from './pages/pricing/CommissionsPage';
import { InterestRatesPage } from './pages/pricing/InterestRatesPage';
import { ShortSaleCostPage } from './pages/pricing/ShortSaleCostPage';
import { MarketDataPricingPage } from './pages/pricing/MarketDataPricingPage';
import { OtherFeesPage } from './pages/pricing/OtherFeesPage';
import { AccountsPage } from './pages/AccountsPage';
import { FundingWithdrawalsPage } from './pages/FundingWithdrawalsPage';
import { SecurityPage } from './pages/SecurityPage';
import { RegulationPage } from './pages/RegulationPage';
import { ClientProtectionPage } from './pages/ClientProtectionPage';
import { InstitutionalServicesPage } from './pages/InstitutionalServicesPage';
import { PartnerProgramPage } from './pages/PartnerProgramPage';
import { ApiIntegrationsPage } from './pages/ApiIntegrationsPage';
import { HelpCenterPage } from './pages/HelpCenterPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { BrokerCrmPage } from './pages/solutions/BrokerCrmPage';
import { IbPartnerModulePage } from './pages/solutions/IbPartnerModulePage';
import { LegalPage } from './pages/LegalPage';
import { LoginPage } from './pages/auth/LoginPage';
import { OpenAccountPage } from './pages/auth/OpenAccountPage';
import { AdminBackofficePage } from './pages/solutions/AdminBackofficePage';
import { SocialCopyTradingPage } from './pages/solutions/SocialCopyTradingPage';
import { PammMamPage as PammMamSolutionPage } from './pages/solutions/PammMamPage';
import { PropFirmCrmPage } from './pages/solutions/PropFirmCrmPage';
import { Mt5ServerApiPage } from './pages/solutions/Mt5ServerApiPage';
import { WebSocketsStreamingPage } from './pages/solutions/WebSocketsStreamingPage';
import { CryptoGatewayPage } from './pages/solutions/CryptoGatewayPage';
import { FixApiLiquidityPage } from './pages/solutions/FixApiLiquidityPage';

// 12 Dedicated Product Pages
import { WebTraderPage } from './pages/products/WebTraderPage';
import { MobileAppProductPage } from './pages/products/MobileAppProductPage';
import { ForexCrmPage } from './pages/products/ForexCrmPage';
import { SimplexPage } from './pages/products/SimplexPage';
import { SocialTradingPage } from './pages/products/SocialTradingPage';
import { FinancialChartsPage } from './pages/products/FinancialChartsPage';
import { PammMamPage } from './pages/products/PammMamPage';
import { QuoteEnginePage } from './pages/products/QuoteEnginePage';
import { CryptoEtfsPage } from './pages/products/CryptoEtfsPage';
import { IbPortalPage } from './pages/products/IbPortalPage';
import { FinancialWidgetsPage } from './pages/products/FinancialWidgetsPage';
import { PluginsPage } from './pages/products/PluginsPage';
import { BackOfficePage } from './pages/products/BackOfficePage';
import { PropTradingCrmPage } from './pages/products/PropTradingCrmPage';
import { ClientAreaPage } from './pages/products/ClientAreaPage';
import { PartnerAreaPage } from './pages/products/PartnerAreaPage';
import { B2bCrmPage } from './pages/products/B2bCrmPage';
import { ServiceDeskPage } from './pages/products/ServiceDeskPage';

// New Managed Service Submenu Pages
import { TechnicalSupportPage } from './pages/services/TechnicalSupportPage';
import { SuccessManagerPage } from './pages/services/SuccessManagerPage';
import { HostingServerPage } from './pages/services/HostingServerPage';
import { CyberSecurityPage } from './pages/services/CyberSecurityPage';
import { WebsiteDevPage } from './pages/services/WebsiteDevPage';
import { UserTrainingPage } from './pages/services/UserTrainingPage';
import { CustomDevelopmentPage } from './pages/services/CustomDevelopmentPage';

function AppContent() {
  const { currentPath, navigate } = useRouter();
  const { theme } = useTheme();
  const [selectedSegment, setSelectedSegment] = useState<'individual' | 'institutional'>('individual');
  const [isOpenAccountModalOpen, setIsOpenAccountModalOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  const handleOpenAccount = () => {
    navigate('/open-account');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleOpenSearch = () => setIsSearchModalOpen(true);

  const handleSelectTicker = (ticker: TickerItem) => {
    handleOpenAccount();
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onOpenAccount={handleOpenAccount} onExplorePlatforms={() => navigate('/platforms')} />;
      case '/about':
        return <AboutPage onOpenAccount={handleOpenAccount} />;
      case '/why-brokerbros':
      case '/why-brokerbros/capital-safety':
      case '/capital-safety':
      case '/why-brokerbros/best-execution':
      case '/best-execution':
      case '/why-brokerbros/global-market-access':
      case '/global-market-access':
        return <WhyBrokerBrosPage onOpenAccount={handleOpenAccount} />;
      case '/services/technical-support':
        return <TechnicalSupportPage onOpenAccount={handleOpenAccount} />;
      case '/services/success-manager':
        return <SuccessManagerPage onOpenAccount={handleOpenAccount} />;
      case '/services/hosting-server-management':
        return <HostingServerPage onOpenAccount={handleOpenAccount} />;
      case '/services/cyber-security-ddos':
        return <CyberSecurityPage onOpenAccount={handleOpenAccount} />;
      case '/services/website-ux-ui':
        return <WebsiteDevPage onOpenAccount={handleOpenAccount} />;
      case '/services/user-training':
        return <UserTrainingPage onOpenAccount={handleOpenAccount} />;
      case '/services/custom-system-development':
        return <CustomDevelopmentPage onOpenAccount={handleOpenAccount} />;
      case '/products/web-trader':
        return <WebTraderPage onOpenAccount={handleOpenAccount} />;
      case '/products/mobile-app':
        return <MobileAppProductPage onOpenAccount={handleOpenAccount} />;
      case '/products/forex-crm':
        return <ForexCrmPage onOpenAccount={handleOpenAccount} />;
      case '/products/simplex':
        return <SimplexPage onOpenAccount={handleOpenAccount} />;
      case '/products/social-trading':
        return <SocialTradingPage onOpenAccount={handleOpenAccount} />;
      case '/products/financial-charts':
        return <FinancialChartsPage onOpenAccount={handleOpenAccount} />;
      case '/products/pamm-mam':
        return <PammMamPage onOpenAccount={handleOpenAccount} />;
      case '/products/quote-engine':
        return <QuoteEnginePage onOpenAccount={handleOpenAccount} />;
      case '/products/crypto-etfs':
        return <CryptoEtfsPage onOpenAccount={handleOpenAccount} />;
      case '/products/ib-portal':
        return <IbPortalPage onOpenAccount={handleOpenAccount} />;
      case '/products/financial-widgets':
        return <FinancialWidgetsPage onOpenAccount={handleOpenAccount} />;
      case '/products/plugins':
        return <PluginsPage onOpenAccount={handleOpenAccount} />;
      case '/markets':
        return <MarketsOverviewPage onOpenAccount={handleOpenAccount} />;
      case '/markets/stocks':
        return <StocksPage onOpenAccount={handleOpenAccount} />;
      case '/markets/etfs':
        return <EtfsPage onOpenAccount={handleOpenAccount} />;
      case '/markets/mutual-funds':
        return <MutualFundsPage onOpenAccount={handleOpenAccount} />;
      case '/markets/fixed-income':
      case '/markets/bonds':
        return <BondsPage onOpenAccount={handleOpenAccount} />;
      case '/markets/ipos':
        return <IposPage onOpenAccount={handleOpenAccount} />;
      case '/markets/commodities':
        return <CommoditiesPage onOpenAccount={handleOpenAccount} />;
      case '/markets/forex':
        return <ForexPage onOpenAccount={handleOpenAccount} />;
      case '/markets/options':
      case '/markets/options-volatility':
        return <OptionsPage onOpenAccount={handleOpenAccount} />;
      case '/markets/futures':
      case '/markets/futures-options':
        return <FuturesOptionsPage onOpenAccount={handleOpenAccount} />;
      case '/platforms':
        return <PlatformsOverviewPage onOpenAccount={handleOpenAccount} />;
      case '/platforms/web':
        return <WebPlatformPage onOpenAccount={handleOpenAccount} />;
      case '/platforms/desktop':
        return <DesktopPlatformPage onOpenAccount={handleOpenAccount} />;
      case '/platforms/mobile':
        return <MobileAppPage onOpenAccount={handleOpenAccount} />;
      case '/platforms/tools':
        return <TradingToolsPage onOpenAccount={handleOpenAccount} />;
      case '/trading/web-terminal':
        return <WebTradingTerminalPage onOpenAccount={handleOpenAccount} />;
      case '/trading/mobile-apps':
        return <MobileTradingAppsPage onOpenAccount={handleOpenAccount} />;
      case '/trading/robots':
        return <TradingRobotsPage onOpenAccount={handleOpenAccount} />;
      case '/trading/indicators':
        return <TechnicalIndicatorsPage onOpenAccount={handleOpenAccount} />;
      case '/research':
        return <ResearchPage onOpenAccount={handleOpenAccount} />;
      case '/research/calendar':
        return <EconomicCalendarPage onOpenAccount={handleOpenAccount} />;
      case '/research/news':
        return <NewsInsightsPage onOpenAccount={handleOpenAccount} />;
      case '/education':
        return <EducationPage onOpenAccount={handleOpenAccount} />;
      case '/education/academy':
        return <AcademyPage onOpenAccount={handleOpenAccount} />;
      case '/education/learning-center':
        return <LearningCenterPage onOpenAccount={handleOpenAccount} />;
      case '/pricing':
        return <PricingPage onOpenAccount={handleOpenAccount} />;
      case '/pricing/commissions':
        return <CommissionsPage onOpenAccount={handleOpenAccount} />;
      case '/pricing/interest-rates':
        return <InterestRatesPage onOpenAccount={handleOpenAccount} />;
      case '/pricing/short-sale-cost':
        return <ShortSaleCostPage onOpenAccount={handleOpenAccount} />;
      case '/pricing/market-data':
        return <MarketDataPricingPage onOpenAccount={handleOpenAccount} />;
      case '/pricing/other-fees':
        return <OtherFeesPage onOpenAccount={handleOpenAccount} />;
      case '/accounts':
        return <AccountsPage onOpenAccount={handleOpenAccount} />;
      case '/funding':
        return <FundingWithdrawalsPage onOpenAccount={handleOpenAccount} />;
      case '/security':
        return <SecurityPage onOpenAccount={handleOpenAccount} />;
      case '/security/regulation':
        return <RegulationPage onOpenAccount={handleOpenAccount} />;
      case '/security/client-protection':
        return <ClientProtectionPage onOpenAccount={handleOpenAccount} />;
      case '/institutional':
        return <InstitutionalServicesPage onOpenAccount={handleOpenAccount} />;
      case '/solutions/broker-crm':
        return <BrokerCrmPage />;
      case '/solutions/admin-backoffice':
        return <AdminBackofficePage />;
      case '/solutions/social-copy-trading':
        return <SocialCopyTradingPage />;
      case '/solutions/pamm-mam':
        return <PammMamSolutionPage />;
      case '/solutions/prop-firm-crm':
        return <PropFirmCrmPage />;
      case '/solutions/mt5-server-apis':
        return <Mt5ServerApiPage />;
      case '/solutions/websockets-streaming':
        return <WebSocketsStreamingPage />;
      case '/solutions/crypto-gateway':
        return <CryptoGatewayPage />;
      case '/solutions/fix-api-liquidity':
        return <FixApiLiquidityPage />;
      case '/solutions/ib-partner':
        return <IbPartnerModulePage />;

      case '/partner':
        return <PartnerProgramPage onOpenAccount={handleOpenAccount} />;
      case '/api-integrations':
        return <ApiIntegrationsPage onOpenAccount={handleOpenAccount} />;
      case '/help':
      case '/faqs':
        return <HelpCenterPage onOpenAccount={handleOpenAccount} />;
      case '/contact':
        return <ContactPage onOpenAccount={handleOpenAccount} />;
      case '/careers':
        return <CareersPage onOpenAccount={handleOpenAccount} />;
      case '/blog':
        return <BlogPage onOpenAccount={handleOpenAccount} />;
      case '/legal':
      case '/privacy-policy':
      case '/terms-conditions':
        return <LegalPage onOpenAccount={handleOpenAccount} />;
      case '/login':
        return <LoginPage onOpenAccount={handleOpenAccount} />;
      case '/open-account':
      case '/signup':
      case '/register':
        return <OpenAccountPage onLoginRedirect={handleLogin} />;
      default:
        return <HomePage onOpenAccount={handleOpenAccount} onExplorePlatforms={() => navigate('/platforms')} />;
    }
  };

  const isAuthPage = currentPath === '/login' || currentPath === '/open-account' || currentPath === '/signup' || currentPath === '/register';

  return (
    <div className={`min-h-screen max-w-full overflow-x-clip font-sans antialiased selection:bg-emerald-500 selection:text-white flex flex-col justify-between transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0a0a0a] text-slate-100' : 'bg-white text-slate-900'
    }`}>
      <div>
        {/* Enterprise Navigation */}
        {!isAuthPage && (
          <Navbar
            onOpenAccount={handleOpenAccount}
            onLogin={handleLogin}
            onOpenSearch={handleOpenSearch}
            selectedSegment={selectedSegment}
            setSelectedSegment={setSelectedSegment}
          />
        )}

        {/* Dynamic Route View */}
        <main id="main-content" className="w-full max-w-full overflow-x-clip">
          {renderPage()}
        </main>
      </div>

      {/* Enterprise Footer */}
      {!isAuthPage && <Footer onOpenAccount={handleOpenAccount} onLogin={handleLogin} />}

      {/* Global Modals */}
      <OpenAccountModal
        isOpen={isOpenAccountModalOpen}
        onClose={() => setIsOpenAccountModalOpen(false)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onOpenAccount={() => {
          setIsLoginModalOpen(false);
          setIsOpenAccountModalOpen(true);
        }}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onOpenAccount={() => {
          setIsSearchModalOpen(false);
          setIsOpenAccountModalOpen(true);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
