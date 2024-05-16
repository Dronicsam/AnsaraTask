import { CompletedTask } from "entities/CompletedTask"; 
import clsx from "clsx";
import { CompletedTaskInfo } from "features/ComTaskInfo";

interface AddCompletedTaskType {
  date: string;
  time: string;
}

export const AddCompletedTask = (props: AddCompletedTaskType) => {
  return (
    <div className="mb-5">
      <CompletedTaskInfo date={props.date} time={props.time} />
      <div
        className={clsx(
          "divide-y",
          "border-t-1",
          "border-b-1",
          "border-[#FFFFFF]/20",
          "divide-[#FFFFFF]/20",
          "flex",
          "flex-col",
        )}
      >
        <CompletedTask taskName="Текст для выполненной задачи" />
        <CompletedTask
          taskName="Текст для ещё одной задачи"
          elapsedTime="15:47"
          betweenTime="6:50-7:05"
        />
        <CompletedTask
          taskName="Длинный текст для второй задачи, написанный в две строчки"
          elapsedTime="15:47"
          betweenTime="6:50-7:05"
        />
      </div>
    </div>
  );
};
