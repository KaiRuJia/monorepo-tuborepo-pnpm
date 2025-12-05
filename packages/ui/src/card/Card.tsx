import React from 'react';
import './Card.css';

export interface CardProps {
  /**
   * 卡片标题
   */
  title?: string;
  /**
   * 卡片内容
   */
  children: React.ReactNode;
  /**
   * 卡片操作区域
   */
  actions?: React.ReactNode;
  /**
   * 是否带有阴影
   */
  shadow?: boolean;
  /**
   * 是否带有边框
   */
  bordered?: boolean;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 内联样式
   */
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  actions,
  shadow = true,
  bordered = true,
  className,
  style,
}) => {
  const cardClasses = [
    'pp-card',
    shadow ? 'pp-card--shadow' : '',
    bordered ? 'pp-card--bordered' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} style={style}>
      {title && <div className="pp-card__header">
        <h3 className="pp-card__title">{title}</h3>
      </div>}
      <div className="pp-card__body">
        {children}
      </div>
      {actions && <div className="pp-card__footer">
        {actions}
      </div>}
    </div>
  );
};

export default Card;
