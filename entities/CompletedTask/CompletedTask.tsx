interface TaskProps {
  taskName: string;
  betweenTime?: string;
  elapsedTime?: string;
}

export const CompletedTask = (props: TaskProps) => (
  <div className="flex pb-5 pt-5 justify-between items-center hover:bg-white/[.08]">
    <p className="text-[16px] line-through text-[#7A7A7A] w-72">
      {props.taskName}
    </p>
    <div className="flex gap-5">
      <p className="text-[16px] text-center">{props.betweenTime}</p>
      <p className="text-[16px] text-center text-[#547CFB]">
        {props.elapsedTime}
      </p>
    </div>
  </div>
);
