import { Meta, StoryObj } from '@storybook/react';
import { Card as CardComponent } from '@pawpatrol/ui/card';
import { Button as ButtonComponent } from '@pawpatrol/ui/button';

const Card = CardComponent;
const Button = ButtonComponent;

const meta: Meta<typeof Card> = {
  title: '通用组件/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shadow: {
      control: 'boolean',
      description: 'Whether the card has shadow',
    },
    bordered: {
      control: 'boolean',
      description: 'Whether the card has border',
    },
    title: {
      control: 'text',
      description: 'The card title',
    },
    actions: {
      control: 'object',
      description: 'The card actions',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

// Basic stories
export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Default Card</h3>
        <p style={{ margin: '0 0 1rem 0', color: '#666' }}>This is a default card component.</p>
        <Button variant="primary" size="small">Learn More</Button>
      </div>
    ),
  },
};

export const WithoutShadow: Story = {
  args: {
    shadow: false,
    children: (
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Card Without Shadow</h3>
        <p style={{ margin: '0 0 1rem 0', color: '#666' }}>This is a card component without shadow.</p>
        <Button variant="primary" size="small">Learn More</Button>
      </div>
    ),
  },
};

export const WithoutBorder: Story = {
  args: {
    bordered: false,
    children: (
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Card Without Border</h3>
        <p style={{ margin: '0 0 1rem 0', color: '#666' }}>This is a card component without border.</p>
        <Button variant="primary" size="small">Learn More</Button>
      </div>
    ),
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Card with Title',
    children: (
      <div style={{ padding: '1.5rem' }}>
        <p style={{ margin: '0 0 1rem 0', color: '#666' }}>This is a card component with a title.</p>
        <Button variant="primary" size="small">Learn More</Button>
      </div>
    ),
  },
};

// Complex stories
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      <Card>
        <div style={{ padding: '1.5rem' }}>
          <h3>Default</h3>
          <p>Standard card appearance</p>
        </div>
      </Card>
      <Card shadow={false}>
        <div style={{ padding: '1.5rem' }}>
          <h3>No Shadow</h3>
          <p>Card without shadow</p>
        </div>
      </Card>
      <Card bordered={false}>
        <div style={{ padding: '1.5rem' }}>
          <h3>No Border</h3>
          <p>Card without border</p>
        </div>
      </Card>
      <Card shadow={false} bordered={false}>
        <div style={{ padding: '1.5rem' }}>
          <h3>Minimal</h3>
          <p>Card with no shadow and border</p>
        </div>
      </Card>
    </div>
  ),
};

export const CardWithImage: Story = {
  args: {
    children: (
      <>
        <div style={{ height: '200px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#666' }}>Card Image</span>
        </div>
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Card with Image</h3>
          <p style={{ margin: '0 0 1rem 0', color: '#666' }}>This card has an image at the top.</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="primary" size="small">Primary</Button>
            <Button variant="secondary" size="small">Secondary</Button>
          </div>
        </div>
      </>
    ),
  },
};

export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', width: '100%', maxWidth: '1200px' }}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} shadow={index % 2 === 0} bordered={index % 3 === 0}>
          <div style={{ padding: '1.5rem' }}>
            <h3>Card {index + 1}</h3>
            <p>This is an example card in a grid layout.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button variant="primary" size="small">Action</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  ),
};

export const CardWithActions: Story = {
  args: {
    title: 'Card with Actions',
    children: (
      <div style={{ padding: '1.5rem' }}>
        <p style={{ margin: '0 0 1rem 0', color: '#666' }}>This card has actions in the footer.</p>
      </div>
    ),
    actions: (
      <div style={{ padding: '0 1.5rem 1.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="small">Cancel</Button>
        <Button variant="primary" size="small">Save</Button>
      </div>
    ),
  },
};
