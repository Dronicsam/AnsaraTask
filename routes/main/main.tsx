import { AddTask } from "widgets/AddTask";
import { AddCompletedTask } from "widgets/AddCompletedTask";
import { ActionButtons } from "features/ActionButtons";
import { InputTask } from "features/InputTask";

export const Main = () => (
  <div className="w-full">
    <div className="mb-5">
      <InputTask />
    </div>
    <AddTask />
    <AddCompletedTask date="Сегодня" time="2ч 45м" />
    <AddCompletedTask date="1 марта, пт" time="2ч 25м" />
    <ActionButtons />
  </div>
);
