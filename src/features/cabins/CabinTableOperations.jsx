import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import Sortby from '../../ui/Sortby';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='discount'
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'Discount' },
        ]}
      />

      <Sortby
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', lable: 'Sort by name (Z-A)' },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
