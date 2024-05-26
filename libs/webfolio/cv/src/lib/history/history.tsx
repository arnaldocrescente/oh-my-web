import React from 'react';

import { Timeline, TimelineItemProps, Grid } from 'antd';

const { useBreakpoint } = Grid;

export interface HistoryProps {
  items: TimelineItemProps[];
}

export const History: React.FC<HistoryProps> = (props) => {
  const { items } = props;

  const screens = useBreakpoint();

  const getMode = (): 'alternate' | 'left' => {
    return screens.md ? 'alternate' : 'left';
  };

  return (
    <>
      <Timeline mode={getMode()} items={items} />
    </>
  );
};
