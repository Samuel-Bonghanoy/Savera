import { useForm } from 'react-hook-form';
import DropDown from './DropDown';

export default function Form(): JSX.Element {
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(): Promise<void> {
    reset();
  }

  return (
    <>
      <form className="flex flex-col w-full gap-4">
        <div className="w-full form-control ">
          <label className="label">
            <span className="font-semibold text-white label-text">Amount Spent</span>
          </label>
          <input
            type="number"
            className="w-full text-black bg-white input input-bordered"
            {...register('senderName')}
          />
        </div>

        <div className="form-control w-full mt-[-1rem]">
          <label className="text-white label">
            <span className="font-semibold text-white label-text">Description</span>
          </label>
          <input
            type="text"
            className="w-full text-black bg-white input input-bordered"
            {...register('senderAddress')}
          />
        </div>
        <div className="w-full mt-[-1rem]">
          <label className="label">
            <span className="font-semibold text-white label-text">Type of expense</span>
          </label>
          <DropDown />
        </div>
        <div className="w-full mt-[-1rem]">
          <label className="label">
            <span className="font-semibold text-white label-text">Account Type</span>
          </label>
          <DropDown />
        </div>

        <div className="flex items-center justify-center w-full gap-3 mt-2">
          <button
            type="submit"
            className=" rounded-md w-full font-semibold bg-blue-300 text-black px-10 pt-3 py-2 h-fit transition-all duration-200 hover:bg-green-300 hover:scale-[1.03]"
          >
            <label htmlFor="my_modal_6">Save</label>
          </button>
        </div>
      </form>
    </>
  );
}
