import AnimationWrapper from "../../../../shared/PageAnimation";
import { Toaster } from "react-hot-toast";

const PublishForm = () => {
  const handleCloseEvent = () => {};

  return (
    <AnimationWrapper>
      <section className="w-screen min-h-screen grid items-center lg:grid-cols-2 py-16 lg:gap-4">
        <Toaster />
        <button
          className="w-12 h-12 absolute right-[5vw] z-10 top-[5%] lg:top-[10%]"
          onClick={handleCloseEvent}
        >
          <i className="fi fi-br-cross"></i>
        </button>
      </section>
    </AnimationWrapper>
  );
};

export default PublishForm;
