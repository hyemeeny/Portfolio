import { ReactNode } from "react";
import s from "./Tag.module.scss";

interface TagProps {
  children?: ReactNode;
  tagName: string;
  hasAttr?: boolean;
  attr?: string;
  attrValue?: string;
  isClosed?: boolean;
  className?: string;
}

const Tag = ({ children, tagName, hasAttr, attr, attrValue, isClosed, className }: TagProps) => {
  return (
    <div className={className}>
      <div className={s.tags}>
        &lt;{isClosed && "/"}
        <span className={s.tagName}>{tagName}</span>
        {hasAttr && attr && (
          <>
            <span className={s.attr}>{attr}</span>=<span className={s.attrValue}>&quot;{attrValue}&quot;</span>
          </>
        )}
        &gt;
      </div>
      {children}
    </div>
  );
};

export default Tag;
