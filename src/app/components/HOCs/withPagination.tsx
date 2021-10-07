import { defaultParams } from 'api/task';
import { useAppSelector } from 'app/hooks';
import React, { useEffect, useState } from 'react';

export function withPagination<T>(Component: React.ComponentType<T>) {
  return (hocProps: T) => {
    const [page, setPage] = useState<number>(1);
    const totalRecords = useAppSelector<number>(
      (state) => state.tasks.totalRecords
    );
    const [totalPage, setTotalPage] = useState<number>(1);

    useEffect(() => {
      setTotalPage(Math.ceil(totalRecords / defaultParams._limit) ?? 1);
    }, [page, totalRecords]);

    const nextPage = () => {
      if (page < totalPage) {
        setPage((page) => page + 1);
      }
    };

    const prevPage = () => {
      if (page <= 1) return;
      setPage((page) => page - 1);
    };

    return (
      <Component
        {...hocProps}
        next={{
          isDisabled: page >= totalPage,
          handler: nextPage,
        }}
        prev={{
          isDisabled: page <= 1,
          handler: prevPage,
        }}
        page={page}
        setPage={setPage}
      />
    );
  };
}
