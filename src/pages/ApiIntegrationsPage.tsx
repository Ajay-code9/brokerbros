import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  Zap, 
  Globe, 
  Lock, 
  Cpu, 
  Server, 
  Key, 
  Webhook,
  Activity,
  Layers,
  FileCode,
  Sliders,
  Sparkles
} from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

type CodeTab = 'python' | 'node' | 'websockets' | 'fix';

export const ApiIntegrationsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeTab, setActiveTab] = useState<CodeTab>('python');
  const [copied, setCopied] = useState(false);

  const codeExamples: Record<CodeTab, { title: string; language: string; code: string }> = {
    python: {
      title: 'Python SDK — Simple Order Execution',
      language: 'python',
      code: `from brokerbros import TradingClient

# 1. Connect using your API Key & Secret
client = TradingClient(
    api_key="bb_live_9f82a170c4b",
    api_secret="bb_sec_9942a1b782c"
)

# 2. Place a Buy Order for EUR/USD
order = client.create_order(
    symbol="EURUSD",
    qty=100000,
    side="buy",
    order_type="limit",
    price=1.0850
)

print(f"✅ Order Placed Successfully! Order ID: {order.id}")`
    },
    node: {
      title: 'Node.js REST API — Fetch Account Balance',
      language: 'javascript',
      code: `import { BrokerBros } from '@brokerbros/sdk';

const bb = new BrokerBros({
  apiKey: process.env.BB_API_KEY,
  apiSecret: process.env.BB_API_SECRET
});

// Fetch current account balance and free margin
async function checkBalance() {
  const account = await bb.getAccountSummary();
  console.log(\`Balance: $\${account.balance} | Free Margin: $\${account.freeMargin}\`);
}

checkBalance();`
    },
    websockets: {
      title: 'WebSocket Stream — Live Price Feed',
      language: 'javascript',
      code: `const ws = new WebSocket('wss://stream.brokerbros.com/v2/prices');

ws.on('open', () => {
  // Subscribe to live tick prices for EURUSD and BTCUSD
  ws.send(JSON.stringify({
    action: 'subscribe',
    symbols: ['EURUSD', 'BTCUSD']
  }));
});

ws.on('message', (event) => {
  const price = JSON.parse(event.data);
  console.log(\`[\${price.symbol}] Bid: \${price.bid} | Ask: \${price.ask}\`);
});`
    },
    fix: {
      title: 'FIX 4.4 Session — Low Latency Gateway',
      language: 'ini',
      code: `[DEFAULT]
ConnectionType=initiator
ReconnectInterval=5
FileStorePath=./fix_data
FileLogPath=./fix_logs
StartTime=00:00:00
EndTime=00:00:00

[SESSION]
BeginString=FIX.4.4
SenderCompID=YOUR_BROKERAGE_NAME
TargetCompID=BROKERBROS_MATCHING_ENGINE
SocketConnectHost=fix.brokerbros.com
SocketConnectPort=9820
HeartBtInt=30`
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const integrationSteps = [
    {
      step: '01',
      title: 'Create Free Developer Account',
      desc: 'Sign up in 30 seconds and generate your API Key and Secret from your BrokerBros dashboard.',
      icon: Key
    },
    {
      step: '02',
      title: 'Test in Free Sandbox',
      desc: 'Test order execution, margin rules, and price streams in a full sandbox environment with zero risk.',
      icon: Cpu
    },
    {
      step: '03',
      title: 'Connect Live Data Streams',
      desc: 'Stream sub-10ms real-time price quotes and Level 2 orderbook depth directly to your platform.',
      icon: Activity
    },
    {
      step: '04',
      title: 'Go Live & Trade',
      desc: 'Switch your API key to production and execute trades with sub-millisecond institutional speed.',
      icon: CheckCircle2
    }
  ];

  const apiFeatures = [
    {
      icon: Globe,
      title: 'REST API v2',
      desc: 'Simple HTTP endpoints to place orders, manage account balances, download reports, and fetch historical price data.'
    },
    {
      icon: Zap,
      title: 'WebSocket Live Streams',
      desc: 'Real-time price feeds and instant order execution status updates pushed directly to your applications.'
    },
    {
      icon: Server,
      title: 'FIX 4.4 Protocol Gateway',
      desc: 'High-speed institutional FIX session for quantitative desks and market makers requiring sub-1ms speed.'
    },
    {
      icon: Lock,
      title: 'Secure Authentication',
      desc: 'HMAC SHA-256 signature verification and IP allowlisting to ensure your trading accounts stay 100% secure.'
    },
    {
      icon: FileCode,
      title: 'Multi-Language SDKs',
      desc: 'Pre-built, ready-to-use software development kits for Python, Node.js, C++, C#, and Go.'
    },
    {
      icon: Webhook,
      title: 'Instant Webhooks',
      desc: 'Automatic HTTP webhooks for instant notifications on deposits, withdrawals, KYC approvals, and margin alerts.'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300 min-h-screen">
      
      {/* 1. HERO SECTION (100% LANDING FIT & DUAL THEME COMPATIBLE) */}
      <section className="relative min-h-[calc(100vh-90px)] flex flex-col justify-center py-6 sm:py-10 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1420]">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-5 my-auto w-full">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800/50">
            <Code className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>DEVELOPER API & FIX 4.4 PROTOCOL DOCS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            API & Developer Documentation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
              Connect Your Trading Systems in Minutes
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            Simple, powerful APIs for trading platforms, brokerages, and algorithmic traders. Access live price feeds, execute orders, and manage accounts using REST, WebSockets, or FIX 4.4.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAccount}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-md shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Free API Keys</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Integrated SLA Metric Card */}
          <div className="pt-3 max-w-xl mx-auto w-full">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
              <div className="text-left space-y-0.5">
                <div className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>FIX 4.4 ENGINE SLA</span>
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Sub-1ms Ultra Low-Latency Execution
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                &lt; 0.8 ms
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CHRONOLOGICAL 4-STEP DEVELOPER INTEGRATION GUIDE */}
      <section className="py-14 sm:py-18 bg-white dark:bg-[#0E1420] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>4-STEP INTEGRATION GUIDE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How to Connect Your System to BrokerBros
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Follow these 4 simple steps to start streaming data and executing orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {integrationSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 space-y-3 relative">
                <div className="w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <step.icon className="w-4 h-4 text-emerald-500" />
                  <span>{step.title}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE CODE QUICKSTART TABS */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                <Code className="w-3.5 h-3.5" />
                <span>CODE QUICKSTART</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Simple Code Examples
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                Click a language tab to see real, working code examples for connecting to BrokerBros APIs.
              </p>
            </div>

            {/* Language Selector Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-950 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('python')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'python'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                Python SDK
              </button>
              <button
                onClick={() => setActiveTab('node')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'node'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                Node.js REST
              </button>
              <button
                onClick={() => setActiveTab('websockets')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'websockets'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                WebSocket Stream
              </button>
              <button
                onClick={() => setActiveTab('fix')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'fix'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                FIX 4.4 Engine
              </button>
            </div>
          </div>

          {/* Code Viewer Box */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-800 bg-[#0B111E]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-slate-300 font-bold ml-2">{codeExamples[activeTab].title}</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-slate-700"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            <div className="p-6 overflow-x-auto bg-[#070B12]">
              <pre className="text-emerald-400 leading-relaxed font-mono">
                <code>{codeExamples[activeTab].code}</code>
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* 4. API CAPABILITIES GRID */}
      <section className="py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Powerful API Features Built for Speed & Reliability
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Everything developers and brokerage engineers need for seamless system integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apiFeatures.map((feat, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#141C2B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 hover:border-emerald-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/20">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA SECTION */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
