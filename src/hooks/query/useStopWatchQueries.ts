import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';

export type StopWatchRecords = {
  data: Record<
    string,
    {
      start_time: number;
      elapsed_time: number;
      name: string;
    }
  >;
};
export const useStopWatchQueries = () => {
  const query = useQuery<StopWatchRecords>({
    queryKey: ['stopWatchRecord'],
    queryFn: () => axios.get('/api'),
  });
  const {mutate: addStopWatch, status: addStopWatchStatus} = useMutation({
    mutationFn: (body: {start_time: number; elapsed_time: number; name: string}) =>
      axios.post('/api', body),
    onSuccess: () => {
      query.refetch();
    },
  });
  const {mutate: deleteStopWatch, status: deleteStopWatchStatus} = useMutation({
    mutationFn: (body: {name: string}) => axios.delete(`/api?name=${body.name}`, {}),
    onSuccess: () => {
      query.refetch();
    },
  });
  return {query, addStopWatch, addStopWatchStatus, deleteStopWatch, deleteStopWatchStatus};
};
