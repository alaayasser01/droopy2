/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import WedgetsList from '../WedgetsList';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  // eslint-disable-next-line no-unused-vars
  const [wedgets, setWedgets] = useState([
    { title: 'Header', content: 'This is the header', id: 1 },
  ]);

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
      <div className="flex justify-between items-center">
        <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
          <SiShopware /> <span>Widgets</span>
        </Link>
        <TooltipComponent content="Menu" position="BottomCenter">
          <button
            type="button"
            onClick={() => setActiveMenu(!activeMenu)}
            style={{ color: currentColor }}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      )}
      <div className="justify-content items-center">
          <WedgetsList wedgets={wedgets} />
      </div>
    </div>
  );
};

export default Sidebar;
