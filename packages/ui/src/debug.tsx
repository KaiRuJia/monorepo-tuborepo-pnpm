import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './button';
import { Card } from './card';

const App = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
    }}>
      <h1 style={{ marginBottom: '2rem', color: '#1e293b' }}>UI Component Library Debug Preview</h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem', color: '#334155' }}>Button Component</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="text">Text Button</Button>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading</Button>
        </div>
      </section>
      
      <section>
        <h2 style={{ marginBottom: '1rem', color: '#334155' }}>Card Component</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ width: '300px' }}>
            <Card title="Basic Card">
              This is a basic card component with some sample content. It demonstrates the default styling and structure.
            </Card>
          </div>
          
          <div style={{ width: '300px' }}>
            <Card 
              title="Card with Actions" 
              actions={
                <div>
                  <Button variant="primary" size="small">Action 1</Button>
                  <Button variant="outline" size="small">Action 2</Button>
                </div>
              }
            >
              This card includes an actions section with buttons. You can use this to provide interactive elements for your cards.
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
