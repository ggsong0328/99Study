import { AiFillSchedule } from "react-icons/ai";
import { GiWhistle } from "react-icons/gi";
import { TbTournament } from "react-icons/tb";
import { FaClipboardList } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdGroups2 } from "react-icons/md";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="flex-col flex gap-10 h-[75%]">
      <div
        className="flex gap-3 justify-start items-center cursor-pointer hover:bg-gray-200 py-5 px-10"
        onClick={() => navigate("/schedule")}
      >
        <AiFillSchedule className="text-[35px]" />
        <span className="text-[20px]">경기 일정 관리</span>
      </div>
      <div
        className="flex gap-3 justify-start items-center cursor-pointer hover:bg-gray-200 py-5 px-10"
        onClick={() => navigate("/referee")}
      >
        <GiWhistle className="text-[35px]" />
        <span className="text-[20px]">심판진 관리</span>
      </div>
      <div
        className="flex gap-3 justify-start items-center cursor-pointer hover:bg-gray-200 py-5 px-10"
        onClick={() => navigate("/tournament")}
      >
        <TbTournament className="text-[35px]" />
        <span className="text-[20px]">대진 관리</span>
      </div>
      <div
        className="flex gap-3 justify-start items-center cursor-pointer hover:bg-gray-200 py-5 px-10"
        onClick={() => navigate("/")}
      >
        <FaClipboardList className="text-[35px]" />
        <span className="text-[20px]">개설 종목</span>
      </div>
      <div
        className="flex gap-3 justify-start items-center cursor-pointer hover:bg-gray-200 py-5 px-10"
        onClick={() => navigate("/results")}
      >
        <FaTrophy className="text-[35px]" />
        <span className="text-[20px]">경기 결과</span>
      </div>

      <div
        className="flex gap-3 justify-start items-center cursor-pointer hover:bg-gray-200 py-5 px-10"
        onClick={() => navigate("/teams")}
      >
        <MdGroups2 className="text-[35px]" />
        <span className="text-[20px]">팀 관리</span>
      </div>
    </div>
  );
}