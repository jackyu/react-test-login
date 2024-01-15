import React, { lazy } from "react";
import SelectButton from "./SelectButton";
import Tab from "../atoms/Tab";

import './TabPanel.css';

const VersionInfo = lazy(() => import('./VersionInfo'));
const ProfileInfo = lazy(() => import('./ProfileInfo'));

const tabsInfo = [
  {
    id: 'version',
    label: '版本資訊',
    component: (<VersionInfo />)
  },
  {
    id: 'profile',
    label: '登入資訊',
    component: (<ProfileInfo />)
  }
]

function TabPanel() {
  return (
    <div className="container">
      <SelectButton name="請選擇">
        <Tab data={tabsInfo} />
      </SelectButton>
    </div>
  );
}

export default TabPanel;