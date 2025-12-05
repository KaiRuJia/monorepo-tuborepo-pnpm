import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /**
   * 按钮变体
   */
  variant?: ButtonVariant;
  /**
   * 按钮尺寸
   */
  size?: ButtonSize;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否为加载状态
   */
  loading?: boolean;
  /**
   * 点击事件处理函数
   */
  onClick?: () => void;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 内联样式
   */
  style?: React.CSSProperties;
  /**
   * 子元素
   */
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  className,
  style,
  children,
}) => {
  const buttonClasses = [
    'pp-button',
    `pp-button--${variant}`,
    `pp-button--${size}`,
    disabled ? 'pp-button--disabled' : '',
    loading ? 'pp-button--loading' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      style={style}
    >
      {loading && <span className="pp-button__spinner">⏳</span>}
      <span className="pp-button__text">{children}</span>
    </button>
  );
};

export default Button;
