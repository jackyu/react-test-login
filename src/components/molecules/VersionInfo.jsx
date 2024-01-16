import { memo } from "react";

import './VersionInfo.css';

/**
 * 版號資訊
 */
function VersionInfo() {
  return (
    <ul className="versions">
      <li>v0.1.0</li>
    </ul>
  );
}

export default memo(VersionInfo);