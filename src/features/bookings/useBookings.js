import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
  const [searchParams] = useSearchParams();

  // 1) FILTER
  const currentFilterValue =
    !searchParams.get('status') || searchParams.get('status') === 'all'
      ? null
      : searchParams.get('status');
  const filter = { field: 'status', value: currentFilterValue };

  // 2) SORT
  const currentSortBy = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = currentSortBy.split('-');
  const sortBy = { field, direction };

  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { bookings, isLoading, error };
}
