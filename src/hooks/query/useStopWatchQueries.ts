import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';

export const useStopWatchQueries = () => {
  const query = useQuery<any>({
    queryKey: ['stopWatchList'],
    queryFn: () => axios.get('/api'),
  });
  const addStopWatch = useMutation({
    mutationFn: (body: {start_time: number; elapsed_time: number; name: string}) =>
      axios.post('/api', body),
  });
  const deleteStopWatch = useMutation({
    mutationFn: (body: {name: string}) => axios.delete(`/api?name=${body.name}`, {}),
    onSuccess: () => {
      query.refetch();
    },
  });
  return {query, addStopWatch, deleteStopWatch};
};
