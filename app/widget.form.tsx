"use client"
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type EditorPage = "base" | "";
export function WidgetForm() {
  const [page, setPage] = useState<EditorPage>("base");
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex gap-2 bg-slate-500 rounded-xl p-2">
        <button onClick={() => setPage("base")} className={`hover:text-sky-500 p-1 ${page === "base" && "bg-slate-600 rounded-xl"}`}><FontAwesomeIcon icon={faTableCellsLarge} /></button>
      </div>
    </div>
  );
}