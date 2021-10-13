import { defaultParams } from 'api/task';

export const calcTotalPage = (records: number): number => {
  let calc = Math.ceil(records / defaultParams._limit);
  return calc > 0 ? calc : 1;
};
