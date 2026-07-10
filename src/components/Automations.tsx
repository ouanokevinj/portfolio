import '../index.css';
import SectionHeader from './SectionHeader';

type WorkflowNode = { label: string; glyph: string; tone?: 'crimson' | 'green' | 'violet' | 'amber' };

type AutomationBlueprint = {
  title: string;
  description: string;
  pain: string;
  target: string;
  tags: string[];
  nodes: WorkflowNode[];
};

const blueprints: AutomationBlueprint[] = [
  {
    title: 'Client inquiry to CRM follow-up',
    description: 'A service business gets leads from its website, Facebook forms, and email inbox. n8n captures each inquiry, checks the details, creates a CRM record, sends a confirmation email, and notifies the owner when the lead looks urgent.',
    pain: 'New inquiries are answered late, copied into spreadsheets by hand, or forgotten after business hours.',
    target: 'Every inquiry is acknowledged in minutes and stored in one lead pipeline with clear next steps.',
    tags: ['Client Intake', 'CRM', 'Email'],
    nodes: [
      { label: 'Form', glyph: 'F' },
      { label: 'Clean', glyph: 'OK', tone: 'green' },
      { label: 'Qualify', glyph: 'IF', tone: 'crimson' },
      { label: 'CRM', glyph: 'DB', tone: 'violet' },
      { label: 'Notify', glyph: '@', tone: 'amber' },
    ],
  },
  {
    title: 'Invoice reminder and payment log',
    description: 'A small agency tracks invoices in Google Sheets or QuickBooks. n8n checks overdue invoices every morning, sends staged reminder emails, records each reminder, and flags long-overdue accounts for a human follow-up.',
    pain: 'Payment follow-ups depend on memory, which creates cash-flow gaps and awkward last-minute messages.',
    target: 'Consistent reminders, no duplicate emails, and a clean record of who has been contacted.',
    tags: ['Finance Ops', 'Google Sheets', 'Email'],
    nodes: [
      { label: 'Daily', glyph: 'T' },
      { label: 'Sheet', glyph: 'GS', tone: 'green' },
      { label: 'Overdue', glyph: 'IF', tone: 'crimson' },
      { label: 'Email', glyph: '@' },
      { label: 'Log', glyph: 'DB', tone: 'violet' },
    ],
  },
  {
    title: 'Order status support assistant',
    description: 'An online shop receives repeated "where is my order" messages. n8n reads the support inbox, matches the customer to a Shopify order, replies with tracking when available, and opens a ticket only for exceptions like failed delivery or damaged items.',
    pain: 'Support time is spent answering routine tracking questions while urgent order issues wait in the same queue.',
    target: 'Routine order questions get answered automatically, while real exceptions reach the team faster.',
    tags: ['E-commerce', 'Shopify', 'Support Ops'],
    nodes: [
      { label: 'Inbox', glyph: 'IN' },
      { label: 'Match', glyph: 'ID', tone: 'green' },
      { label: 'Shopify', glyph: '$', tone: 'violet' },
      { label: 'Reply', glyph: '@', tone: 'amber' },
      { label: 'Ticket', glyph: '!', tone: 'crimson' },
    ],
  },
];

function WorkflowCanvas({ nodes, title }: { nodes: WorkflowNode[]; title: string }) {
  return (
    <div className="automation-canvas" aria-label={`${title} n8n workflow preview`}>
      <div className="automation-canvas-label">n8n workflow / mock preview</div>
      <div className="automation-node-row">
        {nodes.map((node, index) => (
          <div className="automation-node-wrap" key={node.label}>
            <div className={`automation-node${node.tone ? ` automation-node--${node.tone}` : ''}`}>
              <span>{node.glyph}</span>
            </div>
            <small>{node.label}</small>
            {index < nodes.length - 1 && <i className="automation-connector" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function Automations() {
  return (
    <section id="automations" className="automation-section">
      <div className="automation-heading">
        <SectionHeader label="Automation lab" title="n8n workflows with a business reason" />
      </div>

      <div className="automation-grid">
        {blueprints.map((blueprint, index) => (
          <article className="automation-card" key={blueprint.title}>
            <div className="automation-card-copy">
              <div className="automation-card-top">
                <span className="automation-number">0{index + 1}</span>
                <span className="automation-type">Mock blueprint</span>
              </div>
              <h3>{blueprint.title}</h3>
              <p className="automation-description">{blueprint.description}</p>
              <p className="automation-pain"><strong>Pain point</strong>{blueprint.pain}</p>
              <p className="automation-target"><strong>Target</strong>{blueprint.target}</p>
              <div className="automation-tags">
                {blueprint.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <WorkflowCanvas nodes={blueprint.nodes} title={blueprint.title} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Automations;
