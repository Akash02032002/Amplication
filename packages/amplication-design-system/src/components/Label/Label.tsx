import classNames from "classnames";
import React from "react";
import "./Label.scss";
export type LabelTypes = "normal" | "error";

export type Props = React.HTMLProps<HTMLSpanElement> & {
  text: string;
  type?: LabelTypes;
};

const CLASS_NAME = "amplication-label";

export function Label({ text, ...props }: Props) {
  return (
    <span
      {...props}
      className={classNames(`${CLASS_NAME}`, {
        [`${CLASS_NAME}__${props.type}`]: props.type === "error",
      })}
    >
      {text}
    </span>
  );
}
//`${CLASS_NAME}__${props.type || "normal"}`
