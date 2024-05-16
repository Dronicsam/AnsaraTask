import { Task } from "entities/Task";
import { InputTask } from "features/InputTask";
import clsx from "clsx";

interface AddTaskProps{
  
}

export const AddTask = () => {
  return (
    <div>
      <div className="mb-5">
        <InputTask />
      </div>
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
          taskName="Длинный текст для второй задачи, написанный в две строчкич"
          elapsedTime="15:47"
          betweenTime="6:50-7:05"
        />
      </div>
    </div>
  );
};
