export type StartDate = number;
export type EndDate = number;

export interface CvItem {
  dateTimestamp: [StartDate, EndDate];
  company: string;
  location: string;
  jobTitle: string;
  description: string;
  isStartItem: boolean;
}

// ?: FAKE API CALL
export const getCvItems = async (): Promise<CvItem[]> => {
  return [
    {
      dateTimestamp: [1425164400, 1433023200],
      company: 'companies.myself.name',
      location: 'companies.myself.location',
      jobTitle: 'timeline.myself.jobTitle',
      description: 'timeline.myself.description',
      isStartItem: true,
    },
    {
      dateTimestamp: [1433109600, 1435615200],
      company: 'companies.myself.name',
      location: 'companies.myself.location',
      jobTitle: 'timeline.myself2.jobTitle',
      description: 'timeline.myself2.description',
      isStartItem: false,
    },
    {
      dateTimestamp: [1441058400, 1456614000],
      company: 'companies.lumilab.name',
      location: 'companies.lumilab.location',
      jobTitle: 'timeline.lumilab.jobTitle',
      description: 'timeline.lumilab.description',
      isStartItem: true,
    },
    {
      dateTimestamp: [1427839200, 1462053600],
      company: 'companies.bitaly.name',
      location: 'companies.bitaly.location',
      jobTitle: 'timeline.bitaly.jobTitle',
      description: 'timeline.bitaly.description',
      isStartItem: true,
    },
    {
      dateTimestamp: [1462053600, 1467237599],
      company: 'companies.lastingdynamics.name',
      location: 'companies.lastingdynamics.location',
      jobTitle: 'timeline.lastingdynamics.jobTitle',
      description: 'timeline.lastingdynamics.description',
      isStartItem: true,
    },
    {
      dateTimestamp: [1467237600, 1488236400],
      company: 'companies.bitaly.name',
      location: 'companies.bitaly.location',
      jobTitle: 'timeline.bitaly2.jobTitle',
      description: 'timeline.bitaly2.description',
      isStartItem: true,
    },
    {
      dateTimestamp: [1489100400, 1577833199],
      company: 'companies.bit4id.name',
      location: 'companies.bit4id.location',
      jobTitle: 'timeline.bit4id.jobTitle',
      description: 'timeline.bit4id.description',
      isStartItem: true,
    },
    {
      dateTimestamp: [1577833200, 1640905200],
      company: 'companies.bit4id.name',
      location: 'companies.bit4id.location',
      jobTitle: 'timeline.bit4id2.jobTitle',
      description: 'timeline.bit4id2.description',
      isStartItem: false,
    },
    {
      dateTimestamp: [1640991600, 1690840799],
      company: 'companies.kineton.name',
      location: 'companies.kineton.location',
      jobTitle: 'timeline.kineton.jobTitle',
      description: 'timeline.kineton.description',
      isStartItem: true,
    },
    {
      dateTimestamp: [1690840800, 1706655600],
      company: 'companies.kineton.name',
      location: 'companies.kineton.location',
      jobTitle: 'timeline.kineton2.jobTitle',
      description: 'timeline.kineton2.description',
      isStartItem: false,
    },
    {
      dateTimestamp: [1706742000, 0],
      company: 'companies.kineton.name',
      location: 'companies.kineton.location',
      jobTitle: 'timeline.kineton3.jobTitle',
      description: 'timeline.kineton3.description',
      isStartItem: false,
    },
  ];
};
