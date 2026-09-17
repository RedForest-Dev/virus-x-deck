import { motion } from "framer-motion";

const thesisText =
  "Virus-X is a next-generation anonymous social platform built on PWA architecture and a bot-proof content distribution algorithm. The product converts external traffic into active communication environment participants in a single click, bypassing traditional marketplaces and delivering Zero CAC (Customer Acquisition Cost) for the project.";

const platformPainPoints = [
  "Marketplace Gatekeeping: Aggregator platforms (App Store, Google Play, etc.) create heavy friction via forced downloads, setup steps, and strict guidelines that block instant user onboarding.",
  "Bot-Contaminated Ecosystems: Engagement metrics are heavily distorted by bots and click-farms, destroying organic visibility for genuine creators.",
  "Centralized Distribution Control: Content visibility is dictated by artificial platform filters rather than genuine audience interest, heavily suppressing organic reach for creators.",
  "15-Second Attention Span Deficit: Traditional feeds are flooded with repetitive, low-value content, causing users to abandon views within seconds due to lack of genuine curiosity.",
  "High Friction in Peer-to-Peer Connection: Existing platforms build artificial barriers and long funnels before a user can initiate a direct, interest-based conversation.",
];

const solutionInfrastructure = [
  "1-Click PWA Onboarding: Complete independence from App Store/Google Play. Users join the active communication environment instantly via a single web link, completely eliminating download friction.",
  "Randomized Algorithm & Organic Distribution: User-created waves are distributed to random recipients inside Feed X, and further spread happens only through real recipient validation (likes), heavily suppressing bots and click-farm manipulation.",
];

const coreProductPillars = [
  "Feed X (The Black Box): An unpredictable feed powered by a randomized, anti-bot algorithm that drives deep curiosity, offering high-value content and a 1-click transition to private chats.",
  "My Waves: A frictionless 1-click publishing tool where creators and regular users share ideas, problems, proposals, interests, photos, videos, or links, generating organic feedback without centralized visibility filters.",
  "My Chats: A dedicated hub for target, interest-driven P2P conversations and instant anonymous interactions via the Fast Online Chat mechanics.",
  "Archive: A public interest map replacing traditional profiles; users explore others' saved content anonymously to check compatibility before initiating direct contact.",
];

const growthEngineBullets = [
  "The 1-Click PWA Organic Loop: Users share high-engagement platform content externally via direct web links. Recipients instantly become active participants with a single tap, completely bypassing app store friction and unlocking seamless viral conversion.",
  "The GenAI Creator Era Catalyst: In the explosion of generative AI, creators demand a friction-free ecosystem to instantly launch their work into a living, responsive network and receive genuine visibility unblocked by corporate algorithmic filters.",
  "Fair Creator-Driven Distribution: The platform attracts talent by replacing paid promotion with the fair, randomized distribution algorithm. Reach belongs to raw user validation, not ad budgets, ensuring high-value content retention.",
  "User-Driven Guerrilla Sharing: Users naturally cross-publish high-engagement waves, including photos, videos, stories, riddles, and interactive text teasers, into external platforms (Reddit, X, TikTok) featuring a branded VIRUS-X watermark or source citation. Paired with direct URLs, this organic distribution channels high curiosity back into the PWA environment for frictionless, instant user activation.",
];

const monetizationBullets = [
  "B2C Subscription & Premium Mechanics: Users unlock advanced interface features, remove engagement limits, purchase custom profiles, themes, and avatars from the built-in marketplace, and receive a server-side algorithmic visibility boost for their waves.",
  "B2B Clean Advertising Network: Native ad blocks placed directly within text feeds, user video content, chat lists, and delivered via PWA push notifications. Our randomized distribution logic guarantees brands genuine human views completely isolated from bot-farm manipulation.",
  "Creator Revenue Share: A YouTube-style monetization model for authors of high-value, long-form content (literature, articles, detailed posts, videos). By embedding ads into highly-validated waves, we incentivize creators to produce engaging content that holds attention past the 15-second mark, maximizing ad network value.",
  "Future Roadmap: Scalable Premium Spaces: The core interface architecture allows seamless integration of future monetization mechanics. This includes pay-per-access premium cards and private anonymous chat rooms where authors publish segmented literary works or premium articles funded by user microtransactions.",
];

const marketBullets = [
  "600M+ Global Target Audience: The global addressable market for privacy-focused, anonymous communication platforms expands rapidly as users migrate away from centralized, ad-heavy data tracking.",
  "1M Users Realistic Initial Target: Our execution roadmap focuses on reaching 1,000,000 active users within the first 12-18 months, representing less than 0.2% of the global addressable market.",
  "$5.8M Projected ARR Plan: Achieving this milestone unlocks an estimated $5.8M in Annual Recurring Revenue, driven by a highly dynamic $5 basic ARPU combined with a conservative 2% premium conversion at $40/year.",
  "$50M+ Projected Valuation Potential: Based on standard social tech industry revenue multiples (8x-12x ARR), reaching the 1M user milestone elevates the project's market valuation to an estimated $50M-$60M.",
];

const askAllocations = [
  "44% - Engineering & Product Development: Core architecture optimization and hiring 1 Senior Full-Stack Engineer [B].",
  "19% - Retroactive MVP Compensation & Fixed Operations: Covering pre-seed asset creation, cloud servers, AI models, and tax compliance [B].",
  "37% - Growth & Marketing Reserve: User-driven viral loops, creator seeding, and cross-platform guerrilla marketing [B].",
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#080808] px-4 py-6 text-zinc-100 md:px-8 md:py-8 print:min-h-0 print:p-0">
      <section className="mx-auto max-w-6xl">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="slide-page overflow-hidden rounded-[28px] border border-zinc-800 bg-[#0b0b0b] print:rounded-none print:border-0"
        >
          <div className="relative h-[260px] overflow-hidden md:h-[350px]">
            <img
              src="/images/virusx-top.jpg"
              alt="Virus-X entry screen"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-b-[30%] bg-[radial-gradient(circle_at_center,transparent_35%,rgba(11,11,11,0.85)_88%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0b0b0b]" />
          </div>

          <div className="mx-auto max-w-3xl px-6 py-10 text-center md:px-10">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Virus-X</h1>
            <p className="mx-auto mt-5 text-base leading-relaxed text-zinc-200 md:text-lg">{thesisText}</p>
          </div>

          <div className="px-4 pb-6 md:px-8 md:pb-8">
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-black">
              <img
                src="/images/virusx-bottom.jpg"
                alt="Virus-X feed screen"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.article>
      </section>

      <section className="mx-auto mt-6 max-w-6xl print:mt-0">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="slide-page relative overflow-hidden rounded-[28px] border border-zinc-800 bg-[#0b0b0b] print:rounded-none print:border-0"
        >
          <img
            src="/images/virusx-top.jpg"
            alt="Virus-X visual background"
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0b0b0b]/90" />

          <div className="relative mx-auto flex h-full w-full max-w-5xl flex-col justify-center px-8 py-12 md:px-14 md:py-14">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Slide 02</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-4xl">
              The Attention & Trust Crisis in Digital Media
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800">
              <img
                src="/images/slide2-crisis-illustration.jpg"
                alt="Abstract illustration of broken attention and trust in digital media"
                className="h-28 w-full object-cover opacity-80 md:h-32"
              />
            </div>

            <ol className="mt-7 space-y-5 text-[15px] leading-relaxed text-zinc-200 md:text-base">
              {platformPainPoints.map((point, index) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-300">
                    {index + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.article>
      </section>

      <section className="mx-auto mt-6 max-w-6xl print:mt-0">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="slide-page relative overflow-hidden rounded-[28px] border border-zinc-800 bg-[#0b0b0b] print:rounded-none print:border-0"
        >
          <img
            src="/images/virusx-top.jpg"
            alt="Virus-X visual background"
            className="absolute inset-0 h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0b0b0b]/92" />

          <div className="relative mx-auto h-full w-full max-w-6xl px-8 py-10 md:px-12 md:py-12">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Slide 03</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-4xl">
              The Solution: A Frictionless, Organic Engagement Ecosystem
            </h2>

            <div className="mt-7 grid gap-8 md:grid-cols-[1fr_1.15fr]">
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400">The Infrastructure</h3>
                <ul className="mt-4 space-y-4 text-xs leading-relaxed text-zinc-200 md:text-sm">
                  {solutionInfrastructure.map((item) => (
                    <li key={item} className="border-l border-zinc-700/70 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800">
                  <img
                    src="/images/slide3-solution-ui.jpg"
                    alt="Virus-X interface concept with Feed, My waves, Chats, and Archive tabs"
                    className="h-36 w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400">Core Product Pillars</h3>
                <ul className="mt-4 space-y-4 text-xs leading-relaxed text-zinc-200 md:text-sm">
                  {coreProductPillars.map((item) => (
                    <li key={item} className="border-l border-zinc-700/70 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.article>
      </section>

      <section className="mx-auto mt-6 max-w-6xl print:mt-0">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="slide-page relative overflow-hidden rounded-[28px] border border-zinc-800 bg-[#0b0b0b] print:rounded-none print:border-0"
        >
          <img
            src="/images/slide2-crisis-illustration.jpg"
            alt="Dark abstract background"
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0b0b0b]/90" />

          <div className="relative mx-auto h-full w-full max-w-6xl px-8 py-10 md:px-12 md:py-12">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Slide 04</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">Organic Growth Engine &amp; GTM</h2>
            <h3 className="mt-5 text-sm uppercase tracking-[0.2em] text-zinc-400">The Zero CAC Growth Engine</h3>

            <ol className="mt-7 space-y-4 text-xs leading-relaxed text-zinc-200 md:text-sm">
              {growthEngineBullets.map((bullet, index) => (
                <li key={bullet} className="flex gap-4">
                  <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-300">
                    {index + 1}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <img
                src="/images/slide4-growth-engine.jpg"
                alt="Conceptual illustration of the Virus-X zero CAC growth loop"
                className="h-28 w-full object-cover md:h-32"
              />
            </div>
          </div>
        </motion.article>
      </section>

      <section className="mx-auto mt-6 max-w-6xl print:mt-0">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="slide-page relative overflow-hidden rounded-[28px] border border-zinc-800 bg-[#0b0b0b] print:rounded-none print:border-0"
        >
          <img
            src="/images/slide5-monetization.jpg"
            alt="Monetization background"
            className="absolute inset-0 h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0b0b0b]/92" />

          <div className="relative mx-auto h-full w-full max-w-6xl px-8 py-10 md:px-12 md:py-12">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Slide 05</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">Monetization &amp; Business Model</h2>
            <h3 className="mt-5 text-sm uppercase tracking-[0.2em] text-zinc-400">High-Margin Hybrid Monetization</h3>

            <ol className="mt-6 space-y-4 text-xs leading-relaxed text-zinc-200 md:text-sm">
              {monetizationBullets.map((bullet, index) => (
                <li key={bullet} className="flex gap-4">
                  <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-300">
                    {index + 1}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <img
                src="/images/slide5-monetization.jpg"
                alt="Conceptual illustration of Virus-X monetization streams"
                className="h-28 w-full object-cover md:h-32"
              />
            </div>
          </div>
        </motion.article>
      </section>

      <section className="mx-auto mt-6 max-w-6xl print:mt-0">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="slide-page relative overflow-hidden rounded-[28px] border border-zinc-800 bg-[#0b0b0b] print:rounded-none print:border-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_72%,rgba(249,115,22,0.18),transparent_38%),radial-gradient(circle_at_80%_25%,rgba(249,115,22,0.12),transparent_32%)]" />

          <div className="relative mx-auto h-full w-full max-w-6xl px-8 py-10 md:px-12 md:py-12">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Slide 06</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">Market Opportunity &amp; Projections</h2>
            <h3 className="mt-5 text-sm uppercase tracking-[0.2em] text-zinc-400">Massive Market &amp; Realistic Milestones</h3>

            <ol className="mt-6 space-y-3 text-xs leading-relaxed text-zinc-200 md:text-sm">
              {marketBullets.map((bullet, index) => (
                <li key={bullet} className="flex gap-4">
                  <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-300">
                    {index + 1}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#29405f] bg-[#0b1a2c]/90 p-5">
                <p className="text-center text-xl font-semibold text-[#f6a07d]">TAM/SAM/SOM Analysis</p>
                <p className="text-center text-sm text-zinc-300">(TAM/SAM/SOM)</p>

                <div className="relative mx-auto mt-5 h-52 w-52">
                  <div className="absolute inset-0 rounded-full border border-[#6f95cd] bg-[#375a91]/45" />
                  <div className="absolute inset-[17%] rounded-full border border-[#9ec0ef] bg-[#7fa6dc]/50" />
                  <div className="absolute inset-[43%] rounded-full bg-[#ffb37a] shadow-[0_0_18px_#ff8f3d]" />

                  <div className="absolute left-1/2 top-[18%] -translate-x-1/2 text-center text-xs text-zinc-100">
                    <p className="font-semibold">TAM: 600M</p>
                    <p className="text-zinc-300">Global Market</p>
                  </div>
                  <div className="absolute left-1/2 top-[43%] -translate-x-1/2 text-center text-xs text-zinc-100">
                    <p className="font-semibold">SAM: Core Segment</p>
                  </div>
                  <div className="absolute left-1/2 top-[64%] -translate-x-1/2 text-center text-xs text-zinc-50">
                    <p className="font-semibold">SOM: 1M Users</p>
                    <p className="text-zinc-200">Our Goal</p>
                  </div>
                </div>

                <p className="mt-4 text-center text-sm text-zinc-300">Minimal market share needed for success</p>
              </div>

              <div className="rounded-2xl border border-[#29405f] bg-[#0b1a2c]/90 p-5">
                <p className="text-center text-xl font-semibold text-[#f6a07d]">Financial Milestone</p>
                <p className="text-center text-sm text-zinc-300">(Financial Milestone)</p>

                <div className="mt-5 rounded-2xl border border-[#f6a07d]/75 bg-[#101b2a] px-5 py-5 shadow-[0_0_24px_rgba(246,160,125,0.35)]">
                  <p className="text-[2rem] font-semibold leading-none text-[#ffd4b5]">1,000,000 Users</p>
                  <p className="mt-3 text-[2.05rem] font-semibold leading-none text-[#7de3ff]">$5.8M ARR</p>
                  <p className="mt-3 text-[2.05rem] font-semibold leading-none text-[#7de3ff]">$50M+ Valuation</p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </section>

      <section className="mx-auto mt-6 max-w-6xl print:mt-0">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="slide-page relative overflow-hidden rounded-[28px] border border-zinc-800 bg-[#0b0b0b] print:rounded-none print:border-0"
        >
          <img
            src="/images/slide7-final-ask.jpg"
            alt="Final ask visual"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#070b12]/88" />

          <div className="relative mx-auto h-full w-full max-w-6xl px-8 py-10 md:px-12 md:py-12">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Slide 07</p>
            <h2 className="mt-4 max-w-5xl text-3xl font-semibold leading-tight md:text-4xl">
              The Ask: $100,000 via SAFE for a 6-Month Operational Runway
            </h2>
            <h3 className="mt-5 text-sm uppercase tracking-[0.2em] text-zinc-400">Allocation</h3>

            <div className="mt-7 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <ol className="space-y-3 text-xs leading-relaxed text-zinc-200 md:text-sm">
                {askAllocations.map((item, index) => (
                  <li key={item} className="flex gap-4 rounded-xl border border-zinc-800/90 bg-zinc-900/45 px-4 py-4">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-300">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>

              <div className="flex flex-col justify-between rounded-2xl border border-orange-300/35 bg-zinc-950/55 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">Closing Signal</p>
                  <p className="mt-4 text-3xl font-semibold text-orange-200">$100,000</p>
                  <p className="mt-2 text-lg text-zinc-200">SAFE Instrument</p>
                  <p className="mt-1 text-lg text-zinc-200">6-Month Runway</p>
                </div>
                <p className="text-sm text-zinc-300">
                  Capital deployed into product velocity, infrastructure continuity, and compounding zero-CAC growth.
                </p>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/50">
              <img
                src="/images/slide7-product-ready-row.jpg"
                alt="Virus-X product-ready content row with Feed, My waves, Chats, and Archive tabs"
                className="h-32 w-full object-cover md:h-36"
              />
            </div>
          </div>
        </motion.article>
      </section>
    </main>
  );
}
