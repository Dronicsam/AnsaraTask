"use client"
// Этот файл не соответствует стандартам FSD. Не хватило времени, чтобы сделать всё как нужно

import { Trash, SaveIcon, Logout, Cross, Eye, EyeOff } from "shared/icons";
import { Input } from "shared/ui";
import { useState } from "react";

export const Modals = () => {
  const [showEye, setShowEye] = useState(true)
  return(
    <div className="grid grid-cols-3">
    {/* Редактирование задачи без времени */}
    <div className="w-96 bg-[#D9D9D9]/[.10] mb-5 p-6 rounded-lg gap-y-5 grid grid-cols-1">
      <div className="flex justify-between">
        <p>Редактирование задачи</p>
        <Cross />
      </div>
      <Input />
      <div className="flex justify-between">
        <div
          className={`bg-white gap-2 w-fit h-fit flex items-center rounded-lg px-6 py-2`}
        >
          <SaveIcon />
          <p className={`text-black`}>Сохранить</p>
        </div>
        <div
          className={`border-1 border-[#7A7A7A] gap-2 w-fit h-fit flex items-center rounded-lg px-6 py-2`}
        >
          <Trash />
          <p className={`text-[#7A7A7A]`}>Удалить</p>
        </div>
      </div>
    </div>
    {/* Редактирование задачи со временем */}
    <div className="w-96 bg-[#D9D9D9]/[.10] mb-5 p-6 rounded-lg gap-y-5 grid grid-cols-1">
      <div className="flex justify-between">
        <p>Редактирование задачи</p>
        <Cross />
      </div>
      <Input />
      <div className="flex justify-between">
        <div
          className={`bg-white gap-2 w-fit h-fit flex items-center rounded-lg px-6 py-2`}
        >
          <SaveIcon />
          <p className={`text-black`}>Сохранить</p>
        </div>
        <div
          className={`border-1 border-[#7A7A7A] gap-2 w-fit h-fit flex items-center rounded-lg px-6 py-2`}
        >
          <Trash />
          <p className={`text-[#7A7A7A]`}>Удалить</p>
        </div>
      </div>
    </div>
    {/* Редактирование профиля */}
    <div className="w-96 bg-[#D9D9D9]/[.10] mb-5 p-6 rounded-lg gap-y-5 grid grid-cols-1">
      <div className="flex justify-between">
        <p>Редактирование профиля</p>
        <Cross />
      </div>
      <Input placeholder="Login" />
      <div className="relative w-full">
        <Input placeholder="Password" />
        <Eye onClick={()=>setShowEye(false)} className={`h-6 w-10 absolute top-3 right-0 ${showEye ? "" : "hidden"}`} />
        <EyeOff onClick={()=>setShowEye(true)} className={`h-6 w-10 absolute top-3 right-0 ${showEye ? "hidden" : ""}`} />
      </div>
      <div className="flex justify-between">
        <div
          className={`bg-white gap-2 w-fit h-fit flex items-center rounded-lg px-6 py-2`}
        >
          <SaveIcon />
          <p className={`text-black`}>Сохранить</p>
        </div>
        <div
          className={`border-1 border-[#7A7A7A] gap-2 w-fit h-fit flex items-center rounded-lg px-6 py-2`}
        >
          <Logout />
          <p className={`text-[#7A7A7A]`}>Выйти</p>
        </div>
      </div>
    </div>
    {/* Добавление выполненной задачи */}
    <div className="w-96 bg-[#D9D9D9]/[.10] mb-5 p-6 rounded-lg gap-y-5 grid grid-cols-1">
      <div className="flex justify-between">
        <p>Добавление выполненной задачи</p>
        <Cross />
      </div>
      <Input />
      <div className="flex justify-between">
        <div
          className={`bg-white gap-2 w-fit h-fit flex items-center rounded-lg px-6 py-2`}
        >
          <SaveIcon />
          <p className={`text-black`}>Сохранить</p>
        </div>
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
  )
}
