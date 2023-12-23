import { tailChase } from "ldrs";

tailChase.register();

function Loader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <l-tail-chase size="70" speed="1.9" color="#42224A"></l-tail-chase>
    </div>
  );
}

export default Loader;
