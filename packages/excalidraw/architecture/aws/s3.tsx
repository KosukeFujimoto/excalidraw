import { register } from "../register";

export const s3 = register({
  name: "s3",
  label: "s3",
  keywords: ["s3"],
  icon: null,
  trackEvent: { category: "element" },
  keyPriority: 40,
});
