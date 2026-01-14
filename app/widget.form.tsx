"use client"
import { Widget } from "@/widgets";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type EditorPage = "base" | "";
export function WidgetForm() {
  const [page, setPage] = useState<EditorPage>("base");
  const [type, setType] = useState<Widget>("time")
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex gap-2 bg-slate-500 rounded-xl p-2">
        <button onClick={() => setPage("base")} className={`hover:text-sky-500 p-1 ${page === "base" && "bg-slate-600 rounded-xl"}`}><FontAwesomeIcon icon={faTableCellsLarge} /></button>
      </div>
      <form className="mt-2 rounded-xl p-2 flex bg-slate-400 dark:bg-slate-700">
        {page === "base" && <div className="grid grid-cols-3 gap-4 items-center">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="type">Widget Type</label>
            <select className="bg-slate-500 rounded-lg p-1" id="type" value={type} onChange={(e) => setType(e.target.value as Widget)}>
              <option value="time">Time</option>
              <option value="weather">Weather</option>
            </select>
          </div>
        </div>}
      </form>
    </div>
  );
}
