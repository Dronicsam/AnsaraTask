import { Input } from "shared/ui";
import { PlayIcon, PlusIcon } from "shared/icons";

export const InputTask = () => (
  <div className="flex items-center">
    <div className="relative w-full">
      <Input />
      <PlusIcon className="h-6 w-10 absolute top-3 right-0" />
    </div>
    <PlayIcon className="ml-5" />
  </div>
);
