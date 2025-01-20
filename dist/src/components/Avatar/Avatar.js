import { j as i } from "../../../node_modules/react/jsx-runtime.js";
import { useState as c, useEffect as b } from "react";
const u = [
  "#A3D5FF",
  "#FFD4A3",
  "#C2E8C2",
  "#FFB5B5",
  "#D9CFE8",
  "#C8B8A6",
  "#F5CCDA",
  "#E0E0E0",
  "#E3EAB3",
  "#A6F2F2",
  "#FFD4C2",
  "#F9B3B3",
  "#D7A6A6",
  "#AD94A3",
  "#B5C2E0",
  "#B5E0CC",
  "#A6D3E8",
  "#D3A6E8",
  "#FFC9A3",
  "#E8BFA6"
], I = ({ name: s, size: a, borderRadius: l }) => {
  s == "" && (s = "Anonymous");
  const [C, d] = c(), [x, m] = c(), [A, h] = c(), F = (t) => {
    let r = 0;
    for (let e = 0; e < t.length; e++)
      r = t.charCodeAt(e) + ((r << 5) - r);
    return Math.abs(r % u.length);
  }, f = (t, r) => {
    const e = t.replace("#", ""), n = Math.max(0, parseInt(e.substring(0, 2), 16) - r), o = Math.max(0, parseInt(e.substring(2, 4), 16) - r), E = Math.max(0, parseInt(e.substring(4, 6), 16) - r);
    return `#${((1 << 24) + (n << 16) + (o << 8) + E).toString(16).slice(1)}`;
  }, g = (t) => {
    switch (t) {
      case "none":
        return "0";
      case "sm":
        return "0.125rem";
      case "md":
        return "0.375rem";
      case "lg":
        return "0.5rem";
      case "xl":
        return "1rem";
      case "2xl":
        return "1.5rem";
      case "3xl":
        return "2rem";
      case "full":
        return "9999px";
      default:
        return "0";
    }
  };
  b(() => {
    if (!s)
      return;
    const t = s.split(" ").map((o) => o.charAt(0).toUpperCase() + o.slice(1));
    d(t.length > 1 ? t[0][0] + t[1][0] : t[0][0]);
    const r = F(s), e = u[r];
    m(e);
    const n = f(e, 60);
    h(n);
  }, [s]);
  const p = g(l);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `flex items-center justify-center 
        ${a === "sm" ? "w-8 h-8" : "w-10 h-10"} rounded-${l}`,
      style: { backgroundColor: x, borderRadius: p },
      children: /* @__PURE__ */ i.jsx(
        "p",
        {
          className: `font-semibold ${a === "sm" ? "text-sm" : "text-base"}`,
          style: { color: A },
          children: C
        }
      )
    }
  );
};
export {
  I as default
};
