import React from "react";
import { Handle, HandleProps } from "reactflow";

export default function CustomHandle(props: HandleProps) {
  return (
    <Handle
      style={{
        width: 8,
        height: 8,
        background: "black",
      }}
      {...props}
    />
  );
}
