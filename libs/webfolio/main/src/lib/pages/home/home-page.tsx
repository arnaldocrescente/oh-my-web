import React from 'react';
import { Trans } from 'react-i18next';

import { Divider, Space, Typography } from 'antd';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';

import styles from './home-page.module.scss';

const { Title, Text, Link } = Typography;

/* eslint-disable-next-line */
export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div className={styles['container']}>
      <Title className={styles['full-name']}>Arnaldo Crescente</Title>
      <Title level={3} className={styles['role']}>
        Senior Full Stack Engineer & Solution Architect
      </Title>
      <p>
        <Text>
          <Trans i18nKey="home.description" ns="main" />
        </Text>
      </p>
      <Divider />
      <Space>
        <Link
          href="https://www.linkedin.com/in/arnaldocrescente/"
          className={styles['social-icon']}
          title="Linkedin"
          target="_blank"
        >
          <LinkedinFilled />
        </Link>
        <Link
          href="https://github.com/arnaldocrescente"
          className={styles['social-icon']}
          title="Github"
          target="_blank"
        >
          <GithubFilled />
        </Link>
      </Space>
      <div className={styles['bg']}>
        <img src="/assets/img/bg-home.jpg"></img>
      </div>
    </div>
  );
};
