import tick from "../assets/tick_icon.svg";
import not_tick from "../assets/not_tick_icon.svg";
import delete_icon from "../assets/delete_icon.svg";

const ToDoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img className="w-7" src={isComplete ? tick : not_tick} alt="tick" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      <img
        className="w-3.5 cursor-pointer"
        src={delete_icon}
        alt="delete_icon"
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
};
export default ToDoItems;
