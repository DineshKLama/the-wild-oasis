import { useSearchParams } from 'react-router-dom';
import Select from './Select';

/* eslint-disable react/prop-types */
function Sortby({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      onChange={handleChange}
      type='white'
    />
  );
}

export default Sortby;
