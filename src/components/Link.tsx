import pattern from "../assets/bg-shorten-desktop.svg";

export default function Link() {
  return (
    <>
      <div className="bg-primary-dark-violet py-8 px-10 rounded-md relative overflow-hidden">
        <img
          src={pattern}
          alt=""
          className="absolute top-0 right-0 overflow-hidden z-10"
        />
        <form className="flex gap-3">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="p-2 flex-1 relative rounded-md placeholder:px-3 placeholder:text-sm placeholder:font-medium placeholder:text-bold text-neutral-grayish-violet z-20"
          />
          <button
            type="submit"
            className="bg-primary-cyan rounded-md px-6 py-2 font-bold text-sm text-white z-20"
          >
            Shorten It!
          </button>
        </form>
      </div>
    </>
  );
}
