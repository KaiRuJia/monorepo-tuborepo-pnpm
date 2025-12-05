import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as F}from"./Button-B4q70giG.js";import"./index-GiUgBvb1.js";const P=({title:p,children:a,actions:h,shadow:V=!0,bordered:k=!0,className:E,style:G})=>{const $=["pp-card",V?"pp-card--shadow":"",k?"pp-card--bordered":"",E].filter(Boolean).join(" ");return e.jsxs("div",{className:$,style:G,children:[p&&e.jsx("div",{className:"pp-card__header",children:e.jsx("h3",{className:"pp-card__title",children:p})}),e.jsx("div",{className:"pp-card__body",children:a}),h&&e.jsx("div",{className:"pp-card__footer",children:h})]})};P.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!1,tsType:{name:"string"},description:"卡片标题"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"卡片内容"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"卡片操作区域"},shadow:{required:!1,tsType:{name:"boolean"},description:"是否带有阴影",defaultValue:{value:"true",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"是否带有边框",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"内联样式"}}};const s=P,r=F,K={title:"通用组件/Card",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{shadow:{control:"boolean",description:"Whether the card has shadow"},bordered:{control:"boolean",description:"Whether the card has border"},title:{control:"text",description:"The card title"},actions:{control:"object",description:"The card actions"}}},i={args:{children:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Default Card"}),e.jsx("p",{style:{margin:"0 0 1rem 0",color:"#666"},children:"This is a default card component."}),e.jsx(r,{variant:"primary",size:"small",children:"Learn More"})]})}},d={args:{shadow:!1,children:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Card Without Shadow"}),e.jsx("p",{style:{margin:"0 0 1rem 0",color:"#666"},children:"This is a card component without shadow."}),e.jsx(r,{variant:"primary",size:"small",children:"Learn More"})]})}},t={args:{bordered:!1,children:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Card Without Border"}),e.jsx("p",{style:{margin:"0 0 1rem 0",color:"#666"},children:"This is a card component without border."}),e.jsx(r,{variant:"primary",size:"small",children:"Learn More"})]})}},n={args:{title:"Card with Title",children:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("p",{style:{margin:"0 0 1rem 0",color:"#666"},children:"This is a card component with a title."}),e.jsx(r,{variant:"primary",size:"small",children:"Learn More"})]})}},o={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.5rem"},children:[e.jsx(s,{children:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{children:"Default"}),e.jsx("p",{children:"Standard card appearance"})]})}),e.jsx(s,{shadow:!1,children:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{children:"No Shadow"}),e.jsx("p",{children:"Card without shadow"})]})}),e.jsx(s,{bordered:!1,children:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{children:"No Border"}),e.jsx("p",{children:"Card without border"})]})}),e.jsx(s,{shadow:!1,bordered:!1,children:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{children:"Minimal"}),e.jsx("p",{children:"Card with no shadow and border"})]})})]})},l={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"200px",backgroundColor:"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"#666"},children:"Card Image"})}),e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Card with Image"}),e.jsx("p",{style:{margin:"0 0 1rem 0",color:"#666"},children:"This card has an image at the top."}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{variant:"primary",size:"small",children:"Primary"}),e.jsx(r,{variant:"secondary",size:"small",children:"Secondary"})]})]})]})}},c={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"1.5rem",width:"100%",maxWidth:"1200px"},children:Array.from({length:6}).map((p,a)=>e.jsx(s,{shadow:a%2===0,bordered:a%3===0,children:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsxs("h3",{children:["Card ",a+1]}),e.jsx("p",{children:"This is an example card in a grid layout."}),e.jsx("div",{style:{marginTop:"1rem"},children:e.jsx(r,{variant:"primary",size:"small",children:"Action"})})]})},a))})},m={args:{title:"Card with Actions",children:e.jsx("div",{style:{padding:"1.5rem"},children:e.jsx("p",{style:{margin:"0 0 1rem 0",color:"#666"},children:"This card has actions in the footer."})}),actions:e.jsxs("div",{style:{padding:"0 1.5rem 1.5rem",display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx(r,{variant:"secondary",size:"small",children:"Cancel"}),e.jsx(r,{variant:"primary",size:"small",children:"Save"})]})}};var u,y,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      padding: '1.5rem'
    }}>
        <h3 style={{
        margin: '0 0 0.5rem 0'
      }}>Default Card</h3>
        <p style={{
        margin: '0 0 1rem 0',
        color: '#666'
      }}>This is a default card component.</p>
        <Button variant="primary" size="small">Learn More</Button>
      </div>
  }
}`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,v,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    shadow: false,
    children: <div style={{
      padding: '1.5rem'
    }}>
        <h3 style={{
        margin: '0 0 0.5rem 0'
      }}>Card Without Shadow</h3>
        <p style={{
        margin: '0 0 1rem 0',
        color: '#666'
      }}>This is a card component without shadow.</p>
        <Button variant="primary" size="small">Learn More</Button>
      </div>
  }
}`,...(j=(v=d.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var f,C,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    bordered: false,
    children: <div style={{
      padding: '1.5rem'
    }}>
        <h3 style={{
        margin: '0 0 0.5rem 0'
      }}>Card Without Border</h3>
        <p style={{
        margin: '0 0 1rem 0',
        color: '#666'
      }}>This is a card component without border.</p>
        <Button variant="primary" size="small">Learn More</Button>
      </div>
  }
}`,...(w=(C=t.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var T,b,B;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Card with Title',
    children: <div style={{
      padding: '1.5rem'
    }}>
        <p style={{
        margin: '0 0 1rem 0',
        color: '#666'
      }}>This is a card component with a title.</p>
        <Button variant="primary" size="small">Learn More</Button>
      </div>
  }
}`,...(B=(b=n.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var S,z,W;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  }}>
      <Card>
        <div style={{
        padding: '1.5rem'
      }}>
          <h3>Default</h3>
          <p>Standard card appearance</p>
        </div>
      </Card>
      <Card shadow={false}>
        <div style={{
        padding: '1.5rem'
      }}>
          <h3>No Shadow</h3>
          <p>Card without shadow</p>
        </div>
      </Card>
      <Card bordered={false}>
        <div style={{
        padding: '1.5rem'
      }}>
          <h3>No Border</h3>
          <p>Card without border</p>
        </div>
      </Card>
      <Card shadow={false} bordered={false}>
        <div style={{
        padding: '1.5rem'
      }}>
          <h3>Minimal</h3>
          <p>Card with no shadow and border</p>
        </div>
      </Card>
    </div>
}`,...(W=(z=o.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var N,_,R;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <>
        <div style={{
        height: '200px',
        backgroundColor: '#e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <span style={{
          color: '#666'
        }}>Card Image</span>
        </div>
        <div style={{
        padding: '1.5rem'
      }}>
          <h3 style={{
          margin: '0 0 0.5rem 0'
        }}>Card with Image</h3>
          <p style={{
          margin: '0 0 1rem 0',
          color: '#666'
        }}>This card has an image at the top.</p>
          <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
            <Button variant="primary" size="small">Primary</Button>
            <Button variant="secondary" size="small">Secondary</Button>
          </div>
        </div>
      </>
  }
}`,...(R=(_=l.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var A,M,I;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '1200px'
  }}>
      {Array.from({
      length: 6
    }).map((_, index) => <Card key={index} shadow={index % 2 === 0} bordered={index % 3 === 0}>
          <div style={{
        padding: '1.5rem'
      }}>
            <h3>Card {index + 1}</h3>
            <p>This is an example card in a grid layout.</p>
            <div style={{
          marginTop: '1rem'
        }}>
              <Button variant="primary" size="small">Action</Button>
            </div>
          </div>
        </Card>)}
    </div>
}`,...(I=(M=c.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var L,q,D;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Card with Actions',
    children: <div style={{
      padding: '1.5rem'
    }}>
        <p style={{
        margin: '0 0 1rem 0',
        color: '#666'
      }}>This card has actions in the footer.</p>
      </div>,
    actions: <div style={{
      padding: '0 1.5rem 1.5rem',
      display: 'flex',
      gap: '0.5rem',
      justifyContent: 'flex-end'
    }}>
        <Button variant="secondary" size="small">Cancel</Button>
        <Button variant="primary" size="small">Save</Button>
      </div>
  }
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const Q=["Default","WithoutShadow","WithoutBorder","WithTitle","AllVariants","CardWithImage","CardGrid","CardWithActions"];export{o as AllVariants,c as CardGrid,m as CardWithActions,l as CardWithImage,i as Default,n as WithTitle,t as WithoutBorder,d as WithoutShadow,Q as __namedExportsOrder,K as default};
