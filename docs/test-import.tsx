// Test file to verify UI component imports
import React from 'react';
import { Button } from '@pawpatrol/ui/button';
import { Card } from '@pawpatrol/ui/card';

// Test component usage
const TestComponent = () => {
  return (
    <div>
      <Button variant="primary">Test Button</Button>
      <Card title="Test Card">
        Test Card Content
      </Card>
    </div>
  );
};

export default TestComponent;

// Verify types are available
type ButtonProps = typeof Button extends React.ComponentType<infer P> ? P : never;
type CardProps = typeof Card extends React.ComponentType<infer P> ? P : never;

const buttonProps: ButtonProps = { children: 'Button' };
const cardProps: CardProps = { children: 'Card' };

console.log('Button and Card components imported successfully!');