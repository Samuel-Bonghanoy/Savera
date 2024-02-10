import Form from './components/Form';
import Modal from './components/Modal';

export default function FormModal(): JSX.Element {
  return (
    <div>
      <Modal>
        <Form />
      </Modal>
    </div>
  );
}
