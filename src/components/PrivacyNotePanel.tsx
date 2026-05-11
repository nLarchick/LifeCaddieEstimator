"use client";

import React, { useEffect } from "react";
import "../styles/PrivacyNotePanel.css";

const ITEMS = [
  {
    label: "Start anonymous",
    desc: "No account required. Your session is anonymous by default and we don't collect personal information unless you choose to share it.",
  },
  {
    label: "Be thoughtful about your photos",
    desc: "Only upload what you're comfortable sharing. Avoid images that include faces, mail, personal documents, or other sensitive information.",
  },
  {
    label: "Images are not permanently stored",
    desc: "Uploaded photos are used only to generate your Clarity Plan and are not retained beyond your session unless you explicitly save your plan.",
  },
];

interface Props {
  onClose: () => void;
}

export default function PrivacyNotePanel({ onClose }: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      <div className="pn-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="pn-panel">
        <div
          className="pn-card"
          role="dialog"
          aria-modal="true"
          aria-label="Privacy note"
        >
          <div className="pn-header">
            <h2 className="pn-title">Privacy note</h2>
            <button className="pn-close" onClick={onClose} aria-label="Close">
              ×
            </button>
          </div>

          <div className="pn-items">
            {ITEMS.map((item) => (
              <div key={item.label}>
                <span className="pn-item-label">{item.label}</span>
                <span className="pn-item-desc">{item.desc}</span>
              </div>
            ))}
          </div>

          <p className="pn-footer">
            Questions? Reach us at amy@lifecaddie.org
          </p>
        </div>
      </div>
    </>
  );
}
