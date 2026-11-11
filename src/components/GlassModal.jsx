import React from "react";
import { X } from "lucide-react";
import "./GlassModal.css";

export default function GlassModal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="glass-overlay" onClick={onClose}>
      <div className="glass-modal" onClick={(e) => e.stopPropagation()}>
        <button className="glass-close" onClick={onClose}>
          <X size={22} />
        </button>

        <h2 className="glass-title">{title}</h2>

        <div className="glass-content">{children}</div>
      </div>
    </div>
  );
}
