import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem } from '../Redux/Slices/navSlice';
import { FaTachometerAlt, FaBook, FaCalendarAlt, FaClipboard, FaSignOutAlt } from 'react-icons/fa';
import { MdGroups, MdLeaderboard } from 'react-icons/md';
import { IoMdTrophy } from 'react-icons/io';

const navItems = [
  { id: 1, name: 'Dashboard', icon: <FaTachometerAlt /> },
  { id: 2, name: 'Courses', icon: <FaBook /> },
  { id: 3, name: 'Events', icon: <FaCalendarAlt /> },
  { id: 4, name: 'Assignment', icon: <FaClipboard /> },
  { id: 5, name: 'Study Group', icon: <MdGroups /> },
  { id: 6, name: 'Leaderboard', icon: <MdLeaderboard /> },
  { id: 7, name: 'Rewards & Badges', icon: <IoMdTrophy /> },
];

function NavItem({ name, icon, isActive, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`flex items-center space-x-3 px-4 py-2 rounded-xl cursor-pointer
                  ${isActive 
                    ? 'bg-primary text-white' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{name}</span>
    </li>
  );
}

function ProgressCard() {
  return (
    <div className="bg-blue-900 dark:bg-blue-800 rounded-xl p-3 text-white">
      <div className="text-4xl font-bold mb-2">76 <span className='text-lg text-blue-200'>learning hours</span></div>
      <div className="pl-2 text-lg font-medium mt-2">Keep it up!</div>
      <img
        src="https://api.dicebear.com/7.x/thumbs/svg?seed=happy"
        alt="Learning progress"
        className="w-20 h-20 mx-auto mt-4"
      />
    </div>
  );
}

function Sidebar() {
  const dispatch = useDispatch();
  const activeItem = useSelector((state) => state.navigation.activeItem); 
  const handleNavClick = (name) => {
    dispatch(setActiveItem(name)); 
  };

  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300">
        <div className="flex items-center space-x-3">
          <img
            src="../src/assets/Websitelogo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 transition-colors duration-300">
            Studify
          </span>
        </div>
      </div>
    
      <nav className="flex-1 mt-8 px-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              onClick={() => handleNavClick(item.name)}
            />
          ))}
        </ul>
      </nav>

      <div className="mt-2 p-2">
        <ProgressCard />
      </div>

      <div className="ml-4 pb-4"> 
        <button
          className="w-48 mx-4 my-3 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300
                     hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex flex-row justify-center items-center "
        >
          <FaSignOutAlt className="w-5 h-5" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
