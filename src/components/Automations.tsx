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
    title: 'Lead qualification pipeline',
    description: 'A small agency loses warm enquiries because nobody has time to read every form submission and route it to the right person.',
    pain: 'Business pain: slow first response means good leads go to a faster competitor.',
    target: 'Target: every lead scored and acknowledged in under 10 minutes.',
    tags: ['Lead Gen', 'AI', 'CRM'],
    nodes: [
      { label: 'Form', glyph: '▤' },
      { label: 'Score', glyph: '⌘', tone: 'crimson' },
      { label: 'AI', glyph: '{}', tone: 'green' },
      { label: 'CRM', glyph: '#', tone: 'violet' },
      { label: 'Slack', glyph: '↗', tone: 'amber' },
    ],
  },
  {
    title: 'Invoice follow-up engine',
    description: 'A freelance studio tracks invoices in a spreadsheet and remembers overdue payments manually at the end of each month.',
    pain: 'Business pain: late follow-ups create cash-flow gaps and awkward client conversations.',
    target: 'Target: polite, consistent reminders without duplicate messages.',
    tags: ['Finance Ops', 'Scheduled', 'Email'],
    nodes: [
      { label: 'Cron', glyph: '◷' },
      { label: 'Sheets', glyph: '▦', tone: 'green' },
      { label: 'IF overdue', glyph: '!', tone: 'crimson' },
      { label: 'Email', glyph: '✉' },
      { label: 'Log', glyph: '✓', tone: 'violet' },
    ],
  },
  {
    title: 'Support ticket triage',
    description: 'A growing online shop receives repetitive delivery questions while damaged-order tickets wait in the same queue.',
    pain: 'Business pain: urgent customers wait too long and the support team repeats the same answers.',
    target: 'Target: route urgent cases to a human and draft safe replies for common questions.',
    tags: ['Support', 'AI Drafts', 'Human-in-the-loop'],
    nodes: [
      { label: 'Inbox', glyph: '▣' },
      { label: 'Classify', glyph: '⌘', tone: 'crimson' },
      { label: 'Knowledge', glyph: '▤', tone: 'violet' },
      { label: 'Draft', glyph: '✎', tone: 'green' },
      { label: 'Agent', glyph: '→', tone: 'amber' },
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
              <p className="automation-target"><strong>{blueprint.target.split(':')[0]}</strong>{blueprint.target.split(':').slice(1).join(':')}</p>
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
