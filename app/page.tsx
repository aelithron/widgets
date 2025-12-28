import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WidgetForm } from "./widget.form";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-8 md:p-16">
      <h1 className="font-semibold text-4xl">Widgets</h1>
      <p className="text-lg italic">Create aesthetic widgets for your websites <FontAwesomeIcon icon={faHeart} /></p>
      <WidgetForm />
    </main>
  );
}
