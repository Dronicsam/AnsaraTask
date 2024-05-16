interface TaskProps {
  taskName: string;
  betweenTime?: string;
  elapsedTime?: string;
}

export const CompletedTask = (props: TaskProps) => (
  <div className="grid pb-5 pt-5 grid-cols-[auto_repeat(2,_70px)]">
    <p className="text-[16px] line-through text-[#7A7A7A] w-72">{props.taskName}</p>
    <p className="text-[16px] text-center">{props.betweenTime}</p>
    <p className="text-[16px] text-center text-[#547CFB]">{props.elapsedTime}</p>
  </div>
);
