import { Dots, PlayIcon } from "shared/icons";

interface TaskProps {
  taskName: string;
  betweenTime?: string;
  elapsedTime?: string;
}

export const Task = (props: TaskProps) => (
  <div className="flex pb-5 pt-5 justify-between items-center hover:bg-white/[.08]">
    <p className="text-[16px] w-72">{props.taskName}</p>
    <div className="gap-5 hidden sm:flex">
      <p className="text-[16px] text-center">{props.betweenTime}</p>
      <p className="text-[16px] text-center text-[#547CFB]">
        {props.elapsedTime}
      </p>
    </div>
    <div className="gap-5 flex sm:hidden">
      <PlayIcon />
      <Dots />
    </div>
  </div>
);
