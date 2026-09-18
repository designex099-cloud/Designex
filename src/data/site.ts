/* ------------------------------------------------------------------ */
/*  Designex — site data                                              */
/* ------------------------------------------------------------------ */

export const PHONE_DISPLAY = "+880 1343-956435";
export const PHONE_TEL = "tel:+8801343956435";
export const EMAIL = "designex099@gmail.com";
export const EMAIL_HREF = "mailto:designex099@gmail.com";

export const WHATSAPP = "https://wa.me/8801343956435";
export const FACEBOOK = "https://www.facebook.com/designex.11";
export const MESSENGER = "https://m.me/designex.11";

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Guarantee", href: "#guarantee" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  Portfolio — original images as provided by Designex               */
/* ------------------------------------------------------------------ */

const SOURCES = [
  "https://i.ibb.co/XZJNPwfM/1-1.png",
  "https://i.ibb.co/d4sytV1h/1-2.png",
  "https://i.ibb.co/99zjrMQG/1-3.png",
  "https://i.ibb.co/YBkyChf5/1-4.png",
  "https://i.ibb.co/0jQDZGTZ/1-5.png",
  "https://i.ibb.co/Wdpqgy8/1-6.png",
  "https://i.ibb.co/whyvcFJc/1-7.png",
  "https://i.ibb.co/JFQzYsZp/1-9.png",
  "https://i.ibb.co/Dg6LCDtN/1-10.png",
  "https://i.ibb.co/0RBXvxmX/1-11.png",
  "https://i.ibb.co/jkW19dTJ/1-12.png",
  "https://i.ibb.co/BHtBKh18/1-13.png",
  "https://i.ibb.co/x8cpnNBj/1-14.png",
  "https://i.ibb.co/rGQxVQc0/1-15.png",
  "https://i.ibb.co/sxsLwq8/1-16.png",
  "https://i.ibb.co/606Rtq56/1-17.png",
  "https://i.ibb.co/1YfTz8q6/1-18.png",
  "https://i.ibb.co/35Xj9vcx/1-19.png",
  "https://i.ibb.co/q34tyNv6/1-20.png",
  "https://i.ibb.co/N21S5xkL/1-21.png",
  "https://i.ibb.co/KpN6brKX/1-22.png",
  "https://i.ibb.co/hFXP25dk/1-23.png",
  "https://i.ibb.co/1G5QMgQd/1-24.png",
  "https://i.ibb.co/1YGkJ6bP/1-25.png",
  "https://i.ibb.co/KcBjcxp4/1-26.png",
  "https://i.ibb.co/Y77J1W4k/1-27.png",
  "https://i.ibb.co/LdhJk8M8/1-28.png",
  "https://i.ibb.co/3Y1q6wH4/1-29.png",
  "https://i.ibb.co/8D2fTc6V/1-30.png",
  "https://i.ibb.co/Mkcm6hgV/1-31.png",
];

export interface Work {
  id: number;
  src: string;
  num: string;
  title: string;
  tag: string;
}

export const WORKS: Work[] = SOURCES.map((src, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    id: i + 1,
    src,
    num,
    title: `Project ${num}`,
    tag: "Logo Design",
  };
});
