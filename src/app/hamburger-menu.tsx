"use client";

import { useState, useEffect, useRef } from "react";
import { MEMBERS } from "@/constants";

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <div ref={menuRef} className="fixed top-6 left-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-surface text-text-secondary transition-all duration-200 hover:border-accent hover:text-accent"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {open ? (
            <>
              <path d="M5 5l10 10" />
              <path d="M15 5L5 15" />
            </>
          ) : (
            <>
              <path d="M3 5h14" />
              <path d="M3 10h14" />
              <path d="M3 15h14" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <nav className="absolute top-12 left-0 min-w-[160px] rounded-xl border border-border bg-surface p-2 shadow-lg shadow-black/30 animate-fade-in">
          {MEMBERS.map((member) => (
            <a
              key={member.name}
              href={member.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-sm text-text-primary transition-colors duration-150 hover:bg-surface-hover hover:text-accent"
            >
              {member.name}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
