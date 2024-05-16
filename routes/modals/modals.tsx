// Этот файл не соответствует стандартам FSD. Не хватило времени, чтобы сделать всё как нужно

import { Trash, SaveIcon, Logout, Cross } from "shared/icons";
import { Input } from "shared/ui";

export const Modals = () => (
  <div>
    {/* Редактирование задачи без времени */}
    <div className="w-80 bg-[#D9D9D9]/[.10] mb-5 p-5 rounded-lg gap-y-5 grid grid-cols-1">
      <div className="flex justify-between">
        <p>Редактирование задачи</p>
        <Cross />
      </div>
      <Input />
      <div className="flex gap-5">
        <div
          className={`bg-white gap-2 w-fit h-fit flex items-center rounded-lg px-4 py-2`}
        >
          <SaveIcon />
          <p className={`text-black`}>Сохранить</p>
        </div>
        <div
          className={`bg-white gap-2 w-fit h-fit flex items-center rounded-lg px-4 py-2`}
        >
          <Trash />
          <p className={`text-black`}>Удалить</p>
        </div>
      </div>
    </div>
    {/* Редактирование задачи со временем */}
    <div className="flex gap-5">
      <div
        className={`bg-white gap-2 w-fit h-fit flex items-center rounded-lg px-4 py-2`}
      >
        <SaveIcon />
        <p className={`text-black`}>Сохранить</p>
      </div>
      <div
        className={`bg-white gap-2 w-fit h-fit flex items-center rounded-lg px-4 py-2`}
      >
        <Trash />
        <p className={`text-black`}>Удалить</p>
      </div>
    </div>
    {/* Добавление выполненной задачи */}
    <div className="flex gap-5">
      <div
        className={`bg-white gap-2 w-fit h-fit flex items-center rounded-lg px-4 py-2`}
      >
        <SaveIcon />
        <p className={`text-black`}>Сохранить</p>
      </div>
    </div>
    {/* Редактирование профиля */}
    <div className="flex gap-5">
      <div
        className={`bg-white gap-2 w-fit h-fit flex items-center rounded-lg px-4 py-2`}
      >
        <SaveIcon />
        <p className={`text-black`}>Сохранить</p>
      </div>
      <div
        className={`bg-white gap-2 w-fit h-fit flex items-center rounded-lg px-4 py-2`}
      >
        <Logout />
        <p className={`text-black`}>Выйти</p>
      </div>
    </div>
    <div>
      <p>lorem</p>
      <p>x</p>
    </div>
    <div>
      <p>lorem</p>
      <p>x</p>
    </div>
  </div>
);
