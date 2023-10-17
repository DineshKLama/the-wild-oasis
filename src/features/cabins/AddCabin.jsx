import { useState } from 'react';
import Button from '../../ui/Button';
import Model from '../../ui/Modal';
import CreateCabinForm from '../../features/cabins/CreateCabinForm';

function AddCabin() {
  return (
    <Model>
      <Model.Open opens='cabin-form'>
        <Button>Add new cabin</Button>
      </Model.Open>

      <Model.Window name='cabin-form'>
        <CreateCabinForm />
      </Model.Window>
    </Model>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenModel, setIsOpenModel] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModel((show) => !show)}>
//         {isOpenModel ? 'Close form' : 'Add new cabin'}
//       </Button>

//       {isOpenModel && (
//         <Model onClose={() => setIsOpenModel(false)}>
//           <CreateCabinForm onCloseModel={() => setIsOpenModel(false)} />
//         </Model>
//       )}
//     </div>
//   );
// }

// export default AddCabin;
