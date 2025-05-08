// 共通UIコンポーネントの雛形

import React from "react";

export const SampleButton: React.FC<{ label: string }> = ({ label }) => (
  <button style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 4 }}>
    {label}
  </button>
);