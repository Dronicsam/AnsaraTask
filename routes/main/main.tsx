import { AddTask } from "widgets/AddTask";
import { AddCompletedTask } from "widgets/AddCompletedTask";

export const Main = () => {
  return (
    <div className="w-full">
      <AddTask />
      <AddCompletedTask date="Сегодня" time="2ч 45м" />
      <AddCompletedTask date="1 марта, пт" time="2ч 25м" />
    </div>
  );
};
