import { useForm } from 'react-hook-form';

export default function Form(): JSX.Element {
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(): Promise<void> {
    reset();
  }

  return (
    <>
      <form className="flex flex-col w-full gap-7">
        <div className="w-full form-control ">
          <label className="label">
            <span className="font-semibold text-white label-text">What is name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full text-black bg-white input input-bordered"
            {...register('senderName')}
          />
        </div>

        <div className="form-control w-full mt-[-1rem]">
          <label className="text-white label">
            <span className="font-semibold text-white label-text">What is address?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full text-black bg-white input input-bordered"
            {...register('senderAddress')}
          />
        </div>

        <div className="form-control w-full mt-[-1rem]">
          <label className="text-white label">
            <span className="font-semibold text-white label-text">What is job title?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full text-black bg-white input input-bordered"
            {...register('senderTitle')}
          />
        </div>

        <div className="form-control w-full mt-[-1rem]">
          <label className="text-white label">
            <span className="font-semibold text-white label-text">What is contact number?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full text-black bg-white input input-bordered"
            {...register('senderContactNum')}
          />
        </div>
        <div className="form-control w-full mt-[-1rem]">
          <label className="text-white label">
            <span className="font-semibold text-white label-text">What is email?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full text-black bg-white input input-bordered"
            {...register('senderEmail')}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            type="submit"
            className=" rounded-md w-fit font-semibold bg-subyellow text-black px-10 pt-3 py-3 h-fit transition-all duration-200 hover:bg-yellow-600 hover:scale-[1.03]"
          >
            <label htmlFor="my_modal_6">Apply Changes</label>
          </button>
        </div>
      </form>
    </>
  );
}
