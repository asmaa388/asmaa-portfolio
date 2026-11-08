"use client";
import { useState } from "react";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "store", label: "E-commerce" },
  { id: "business", label: "Business & brands" },
  { id: "theme", label: "Themes" },
];

const LABELS = { store: "WooCommerce Store", business: "Business Website", theme: "WordPress Theme" };

export function slug(url) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}

// Fallback when no local full-page screenshot exists in /public/projects
function remoteShot(url) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?vpw=1280&vph=3600&w=640&h=1800`;
}

function Thumb({ p }) {
  const [src, setSrc] = useState(`/projects/${slug(p.url)}.jpg`);
  const [failed, setFailed] = useState(false);
  return (
    <div className="thumb">
      <span className="thumb-fallback">{p.name}</span>
      {!failed && (
        <img
          src={src}
          alt={`${p.name} website preview`}
          loading="lazy"
          onError={() => {
            if (src.startsWith("/projects/")) setSrc(remoteShot(p.url));
            else setFailed(true);
          }}
        />
      )}
    </div>
  );
}

export default function Projects({ projects }) {
  const [filter, setFilter] = useState("all");
  const list = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="filters" role="tablist">
        {FILTERS.map((f) => {
          const count = f.id === "all" ? projects.length : projects.filter((p) => p.category === f.id).length;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={filter === f.id ? "filter active" : "filter"}
              onClick={() => setFilter(f.id)}
            >
              {f.label} <sup>{count}</sup>
            </button>
          );
        })}
      </div>

      <div className="grid">
        {list.map((p) => (
          <a key={p.url} href={p.url} target="_blank" rel="noreferrer" className="card">
            <Thumb p={p} />
            <div className="card-body">
              <div>
                <h3>{p.name}</h3>
                <p>{LABELS[p.category]}</p>
              </div>
              <span className="view">View</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
