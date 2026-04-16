import React from 'react';

const cx = (...xs) => xs.filter(Boolean).join(' ');

/**
 * Centered empty-state placeholder.
 * Styles come from primitives.css — consumer must load @monitorcorp/design/dist/css/primitives.css.
 *
 * @param {string} label - Eyebrow label (uppercase, ink-4)
 * @param {string} title - Main heading
 * @param {string} description - Supporting text
 * @param {React.ReactNode} action - CTA button or link
 */
export function EmptyState({ label, title, description, action, className, ...rest }) {
  return (
    <div {...rest} className={cx('mc-empty', className)}>
      {label && <div className="mc-empty__label">{label}</div>}
      {title && (
        <div className={cx('mc-empty__title', description && 'mc-empty__title--with-desc')}>
          {title}
        </div>
      )}
      {description && <div className="mc-empty__description">{description}</div>}
      {action && <div className="mc-empty__action">{action}</div>}
    </div>
  );
}

export default EmptyState;
