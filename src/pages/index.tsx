import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          NanoClaw White-Glove Service
        </Heading>
        <p className="hero__subtitle">
          Deploy and maintain your team's AI assistant — remotely, worldwide, secured from day one.
        </p>
        <p className={styles.heroDescription}>
          White-glove <strong>NanoClaw</strong> deployment for founders and exec teams. No technical knowledge required —
          we handle the install, hardening, integrations, and ongoing care so you can focus on running your business.
          Built for 4–50+ employee teams where the CEO/CFO/Head of Sales needs leverage without creating new security risk.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://cal.com/your-calendar"
            style={{marginRight: '1rem'}}>
            Book a free 15-min call →
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

function IntegrationLogos() {
  const integrations = [
    'Gmail', 'Google Calendar', 'Outlook', 'Slack', 'WhatsApp',
    'Notion', 'Google Drive', 'Zoom', 'GitHub', 'Google Sheets'
  ];

  return (
    <section className={styles.integrations}>
      <div className="container">
        <p className={styles.integrationsLabel}>Connects to</p>
        <div className={styles.integrationGrid}>
          {integrations.map((name) => (
            <div key={name} className={styles.integrationBadge}>{name}</div>
          ))}
          <div className={styles.integrationBadge}><strong>+10,000</strong></div>
        </div>
      </div>
    </section>
  );
}

function BuiltFor() {
  const audiences = [
    {
      title: 'Founders & CEOs',
      description: 'Drowning in email, calendar chaos, need leverage'
    },
    {
      title: 'Exec Teams',
      description: 'CFO, Head of Sales, EA — each gets their own agent'
    },
    {
      title: 'Agencies & Studios',
      description: 'Client workflows, reporting, project management'
    },
    {
      title: 'Investors & VCs',
      description: 'Deal flow tracking, portfolio updates, LP comms'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Built For</Heading>
        <div className={styles.grid}>
          {audiences.map((item) => (
            <div key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlwaysOn() {
  const capabilities = [
    {
      timing: 'Every 30 minutes',
      description: `Scans your inbox, flags urgent messages, drafts replies for your review`
    },
    {
      timing: '9:00 AM daily',
      description: `Sends you a briefing: today's meetings, attendee backgrounds, prep notes`
    },
    {
      timing: 'On demand',
      description: `"I'm running 10 min late" → bot messages your next meeting and reschedules`
    },
    {
      timing: 'Ongoing',
      description: `Monitors WhatsApp groups, summarizes threads, surfaces what matters`
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Always On, Always Working</Heading>
        <p className={styles.sectionIntro}>
          Unlike ChatGPT or Claude Desktop, your NanoClaw agent runs <strong>24/7 on dedicated infrastructure</strong>.
          It wakes up on schedule, checks your WhatsApp, email, calendar, and connected tools — and takes action without you asking.
        </p>
        <div className={styles.capabilityList}>
          {capabilities.map((item) => (
            <div key={item.timing} className={styles.capabilityItem}>
              <strong className={styles.timing}>{item.timing}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <p className={styles.sectionNote}>
          You talk to your bot through <strong>WhatsApp</strong> (or Telegram, Slack, Discord) — just like texting an assistant.
          No technical knowledge required.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Kickoff Call',
      description: `We discuss your goals, map your integrations (email, calendar, CRM, messaging), and plan your agent's workflows. You tell us what to automate — we handle the rest.`
    },
    {
      number: '2',
      title: 'Deploy & Harden',
      description: `We set up your Mac Mini (or VPS), install NanoClaw, configure secure OAuth, connect your tools, set up container sandboxing, firewall rules, and scheduled tasks. You go live same day.`
    },
    {
      number: '3',
      title: '14-Day Hypercare',
      description: `We tune workflows, expand permissions as you build trust, fix edge cases, and make sure everything runs smoothly. Dedicated support channel for direct help.`
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">How It Works</Heading>
        <div className={styles.stepsList}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: 'Mac Mini Setup (Remote)',
      price: '$3,000',
      description: 'Complete remote installation on your Mac Mini hardware. Includes NanoClaw deployment, WhatsApp integration, 2-5 specialized groups, security hardening, and 14-day hypercare support.',
      recommended: false
    },
    {
      name: 'Mac Mini Setup (In-Person)',
      price: '$4,000',
      description: 'Same as remote setup, but we come to you (SF Bay Area). Perfect for teams who want hands-on training and immediate issue resolution.',
      recommended: false
    },
    {
      name: 'Additional Agent',
      price: '$1,500 each',
      description: 'Add more executive agents for different team members or functions. Each agent gets isolated context and permissions.',
      recommended: false
    },
    {
      name: 'Ongoing Support',
      price: 'Starting at $299/month',
      description: 'Monthly maintenance, updates, workflow optimization, and priority support. Keep your agents running smoothly without lifting a finger.',
      recommended: false
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Service Tiers</Heading>
        <div className={styles.pricingGrid}>
          {tiers.map((tier) => (
            <div key={tier.name} className={clsx(styles.pricingCard, tier.recommended && styles.recommended)}>
              <h3>{tier.name}</h3>
              <div className={styles.price}>{tier.price}</div>
              <p>{tier.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.ctaSection}>
          <Link
            className="button button--primary button--lg"
            to="https://cal.com/your-calendar">
            Book a free call →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Security-First by Design</Heading>
        <p className={styles.sectionIntro}>
          Your bot never sees raw credentials. We use secure OAuth middleware — all tokens are managed separately
          with a full audit trail and instant revoke capability. <strong>Container sandboxing, firewall hardening,
          exec allowlists, and strict permission boundaries</strong> keep your data safe.
        </p>
        <div className={styles.securityFeatures}>
          <h3>Privacy-first architecture:</h3>
          <ul>
            <li>Data stays on YOUR hardware, never cloud</li>
            <li>Container isolation for each WhatsApp group</li>
            <li>Read-only access between contexts</li>
            <li>Zero knowledge of your credentials</li>
            <li>Full audit trail of all actions</li>
          </ul>
        </div>
        <p className={styles.sectionNote}>
          Unlike cloud AI services, your conversations and data never leave your infrastructure.
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="NanoClaw White-Glove Service"
      description="Deploy and maintain your team's AI assistant — remotely, worldwide, secured from day one.">
      <HomepageHeader />
      <main>
        <IntegrationLogos />
        <BuiltFor />
        <AlwaysOn />
        <HowItWorks />
        <Security />
        <Pricing />
      </main>
    </Layout>
  );
}
