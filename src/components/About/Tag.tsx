import { ReactNode } from "react";
import clsx from "clsx";
import s from "./Tag.module.scss";

interface TagProps {
  children?: ReactNode;
  tagName: string;
  hasAttr?: boolean;
  attr?: string;
  attrValue?: string;
  isClosed?: boolean;
  className?: string;
  padding?: "small" | "medium" | "large";
}

const Tag = ({ children, tagName, hasAttr, attr, attrValue, isClosed, className, padding = "small" }: TagProps) => {
  return (
    <div className={clsx(s.tagWrap, s[padding], className)}>
      <div className={s.tag}>
        &lt;{isClosed && "/"}
        <span className={s.tagName}>{tagName}</span>
        {hasAttr && attr && (
          <>
            <span className={s.attr}>{attr}</span>=<span className={s.attrValue}>&quot;{attrValue}&quot;</span>
          </>
        )}
        &gt;
      </div>
      <div className={s.children}>{children}</div>
    </div>
  );
};

export default Tag;
