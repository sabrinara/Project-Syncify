
import { FaBoxTissue, FaChalkboard } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaListUl } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { IoHomeSharp, IoPeopleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const DynamicSidebar = ({ sidebarToggle, id }) => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "bg-blue-500 text-white dark:text-[#8401A1] dark:bg-white"
      : "text-black dark:text-white";
  };

  return (
    <div
      className={`${sidebarToggle ? "hidden" : "block"
        }w-40 md:w-60  bg-gradient-to-b from-[#73e9fe] dark:from-[#8401A1] to-[#78118f] dark:to-[#73e9fe] absolute top-20 left-0 h-full px-4 py-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-xl font-bold text-center">Project Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 font-bold">
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass("/")}`}>
          <Link to="/" className="px-3">
            <IoHomeSharp className="inline-block w-6 h-6 mr-2 -mt-2" />
            Home
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass(`/workspace/${id}/profile`)}`}>
          <Link to={`/workspace/${id}/profile`} className="px-3">
            <CgProfile className="inline-block w-6 h-6 mr-2 -mt-2" />
            Profile
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass(`/board`)}`}>
          <Link to={`/board`} className="px-3">
            <FaChalkboard className="inline-block w-6 h-6 mr-2 -mt-2" />
            Boards
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass(`/workspace/${id}`)}`}>
          <Link to={`/workspace/${id}`} className="px-3">
            <IoPeopleSharp className="inline-block w-6 h-6 mr-2 -mt-2" />
            Members
          </Link>
        </li>

        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass(`/workspace/${id}/board`)}`}>
          <Link to={`/workspace/${id}/board`} className="px-3">
            <FaListUl className="inline-block w-6 h-6 mr-2 -mt-2" />
            Tasks
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass("/timeline")}`}>
          <Link to="/timeline" className="px-3">
            <CiViewTimeline className="inline-block w-6 h-6 mr-2 -mt-2" />
            Plans
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass("/dashboard/calendar")}`}>
          <Link to="/dashboard/calendar" className="px-3">
            <SlCalender className="inline-block w-6 h-6 mr-2 -mt-2" />
            Calendar
          </Link>
        </li>
        {/* <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass("/list")}`}>
          <Link to="/list" className="px-3">
            <FaListUl className="inline-block w-6 h-6 mr-2 -mt-2" />
            List
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass("/issues")}`}>
          <Link to="/issues" className="px-3">
            <FaBoxTissue className="inline-block w-6 h-6 mr-2 -mt-2" />
            Issues
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default DynamicSidebar;
