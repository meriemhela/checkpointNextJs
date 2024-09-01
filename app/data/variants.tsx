const topVariant = {
  closed: { rotate: 0 },
  opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
};

const centerVariant = {
  closed: { opacity: 1 },
  opened: { opacity: 0 },
};

const buttomVariant = {
  closed: { rotate: 0 },
  opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
};

export const variants = [topVariant, centerVariant, buttomVariant];
export const listVariants = {
  closed: { x: "100vw" },
  opened: {
    x: "0",
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
};
export const listItemVariants = {
  closed: { x: -10, opacity: 0 },
  opened: { x: 0, opacity: 1 },
};
