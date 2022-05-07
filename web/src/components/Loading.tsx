import { CircleNotch } from "phosphor-react";

const Loading = () => (
  <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
    <CircleNotch className="w-4 h-4 animate-spin" weight="bold" />
  </div>
);

export { Loading };
