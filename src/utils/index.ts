import { defaultParams } from 'api/task';

export const calcTotalPage = (records: number): number =>
  Math.ceil(records / defaultParams._limit) ?? 1;
