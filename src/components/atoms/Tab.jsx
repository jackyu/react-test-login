import cx from 'classnames';
import React, { useState, Suspense } from 'react';
import Loading from '../atoms/Loading';

import './Tab.css';

const EmptyContent = () => (
  <div className="empty-content">
    沒有內容
  </div>
);

const LoadingComponent = () => (
  <div className="loading-content">
    <Loading />
  </div>
);

function Tab({ data }) {
  const [active, setActive] = useState(0);

  const onClickTabHandler = (index) => () => {
    setActive(index);
  }

  const currentTab = data[active];

  return (
    <div className="tabs">
      <nav>
        {data.map((item, index) => (
          <button
            key={item.id}
            className={cx('tab', { active: index === active } )}
            onClick={onClickTabHandler(index)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="tab-content">
        {currentTab.component ? (
          <Suspense fallback={<LoadingComponent />}>
            {currentTab.component}
          </Suspense>
        ) : <EmptyContent />}
      </div>
    </div>
  )
}

export default Tab;