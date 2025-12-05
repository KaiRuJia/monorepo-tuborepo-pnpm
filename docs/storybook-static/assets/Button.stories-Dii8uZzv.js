import{j as r}from"./jsx-runtime-CDt2p4po.js";import{B as J}from"./Button-B4q70giG.js";import"./index-GiUgBvb1.js";const e=J,U={title:"通用组件/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:["primary","secondary","outline","text"]},description:"The variant of the button"},size:{control:{type:"select",options:["small","medium","large"]},description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},loading:{control:"boolean",description:"Whether the button is in loading state"},onClick:{action:"clicked",description:"Click event handler"}}},a={args:{variant:"primary",children:"Primary Button"}},t={args:{variant:"secondary",children:"Secondary Button"}},n={args:{variant:"outline",children:"Outline Button"}},s={args:{variant:"text",children:"Text Button"}},i={args:{variant:"primary",size:"small",children:"Small Button"}},o={args:{variant:"primary",size:"medium",children:"Medium Button"}},c={args:{variant:"primary",size:"large",children:"Large Button"}},l={args:{variant:"primary",disabled:!0,children:"Disabled Button"}},d={args:{variant:"primary",loading:!0,children:"Loading Button"}},m={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"text",children:"Text"})]})},u={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",size:"small",children:"Small"}),r.jsx(e,{variant:"primary",size:"medium",children:"Medium"}),r.jsx(e,{variant:"primary",size:"large",children:"Large"})]})};var p,g,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,h,B;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(B=(h=t.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var x,S,z;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...(z=(S=n.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var b,f,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    children: 'Text Button'
  }
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var L,T,O;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button'
  }
}`,...(O=(T=i.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var M,P,W;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Medium Button'
  }
}`,...(W=(P=o.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var w,A,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button'
  }
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var k,C,E;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var I,V,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    children: 'Loading Button'
  }
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var R,$,q;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="text">Text</Button>
    </div>
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var F,G,H;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="medium">Medium</Button>
      <Button variant="primary" size="large">Large</Button>
    </div>
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const X=["Primary","Secondary","Outline","Text","Small","Medium","Large","Disabled","Loading","AllVariants","AllSizes"];export{u as AllSizes,m as AllVariants,l as Disabled,c as Large,d as Loading,o as Medium,n as Outline,a as Primary,t as Secondary,i as Small,s as Text,X as __namedExportsOrder,U as default};
