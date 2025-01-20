import { j as a } from "../../../node_modules/react/jsx-runtime.js";
const m = ({
  children: t,
  variant: e = "primary",
  onClick: r
}) => {
  const s = "flex items-center gap-2 text-sm px-4 py-[.6rem] rounded-lg ", o = {
    primary: "bg-[#3C41E9] text-white hover:opacity-90",
    secondary: "bg-[#F3F4F6] text-[#3C41E9] hover:bg-[#E5E7EB]"
  };
  return /* @__PURE__ */ a.jsx("button", { className: `${s} ${o[e]}`, onClick: r, children: t });
};
export {
  m as default
};
