import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import { Space, TimelineItemProps, Typography } from 'antd';

import { getCvItems, CvItem } from './static-items';
import { History } from '../../history/history';

import styles from './history.module.scss';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { DownloadLink } from '../../download-link/download-link';

export interface HistoryPageProps {}

export const HistoryPage: React.FC<HistoryPageProps> = (props) => {
  const { t, i18n } = useTranslation(['cv']);
  const [cvItems, setCvItems] = useState<CvItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cvItemsResponse = await getCvItems();

      // check if response has success

      setCvItems(cvItemsResponse);
    };

    // Manage errors
    fetchData().catch(console.error);
  }, []);

  const renderDate = (date: Date) => {
    return DateTime.fromJSDate(date)
      .setLocale(i18n.language)
      .toLocaleString({ month: 'long', year: 'numeric' });
  };

  const mapItems = (): TimelineItemProps[] => {
    const response: TimelineItemProps[] = [];

    for (const item of cvItems) {
      const hasEnd = item.dateTimestamp[1] !== 0;
      const startDate = new Date(item.dateTimestamp[0] * 1000);
      const endDate = new Date(item.dateTimestamp[1] * 1000);
      response.push({
        color: item.isStartItem ? 'blue' : 'gray',
        children: (
          <>
            <i>
              {`${renderDate(startDate)} - ${
                hasEnd ? renderDate(endDate) : t('now')
              }`}
            </i>
            <br />
            <b>
              {t(item.jobTitle)} @ {t(item.company)}, {t(item.location)}
            </b>
            <p>{t(item.description)}</p>
          </>
        ),
      });
    }

    return response.reverse();
  };

  const renderList = () => {
    return t('intro.list')
      .split('|')
      .map((item, i) => <li key={i}>{item}</li>);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <Typography.Title>{t('aboutme')}</Typography.Title>
        <div className={styles['download-link-wrap']}>
          <DownloadLink />
        </div>
      </div>
      <Typography.Text>
        <div style={{ marginBottom: '3em' }}>
          <p>{t('intro.main')}</p>
          <ul>{renderList()}</ul>
          <p>{t('intro.middle')}</p>
        </div>
      </Typography.Text>
      <Typography.Title level={2}>{t('experience')}</Typography.Title>
      <History items={mapItems()}></History>
    </div>
  );
};
