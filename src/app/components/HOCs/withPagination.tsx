import { useAppSelector } from 'app/hooks';
import React, { useState } from 'react';

export function withPagination<T>(Component: React.ComponentType<T>) {
  return (hocProps: T) => {
    const [page, setPage] = useState<number>(1);
    const totalPage = useAppSelector<number>((state) => state.tasks.totalPage);

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
