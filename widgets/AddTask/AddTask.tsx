import { Task } from "entities/Task";
import clsx from "clsx";

export const AddTask = () => {
  return (
    <div className="mb-5">
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
        <Task taskName="Текст для выполненной задачи" />
        <Task
          taskName="Текст для ещё одной задачи"
          elapsedTime="15:47"
          betweenTime="6:50-7:05"
        />
        <Task
          taskName="Длинный текст для второй задачи, написанный в две строчки"
          elapsedTime="15:47"
          betweenTime="6:50-7:05"
        />
      </div>
    </div>
  );
};
