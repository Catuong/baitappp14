export default function CTA() {
  return (
    <div className=" max-w-screen-xl mx-auto my-auto pt-32 sm:pt-44">
      <div>
      <img
        src="https://split-xi.vercel.app/split.svg"
        alt=""
        className=""
        />
      </div>
      <div className="space-y-4 flex justify-between">
        <div>
          <div className="space-y-4">
            <h4 className="text-gray-800 text-lg font-semibold sm:text-2xl">Websites optimization tool</h4>
            <p className="max-w-md">We help companies around the world to get the best strategies to improve their marketing.</p>
          </div>
          <div class="icon pt-2 flex items-center gap-x-6 text-gray-400 ">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
          </div>
        <div className="space-y-4">
        <h4 className="text-gray-800 text-lg font-semibold sm:text-2xl">Sign up for our newsletter.</h4>
        <div className="flex gap-4">
        <input className="pl-12 pr-3 focus:border-sky-500 px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg" type="text" name="" placeholder="Enter your email"></input>
        <button className="px-4 py-2.5 font-medium text-sm text-center text-white bg-blue-600 hover:bg-blue-500 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg  ">Subscribe</button>
        </div>
        </div>
      </div>
      </div>
    );
  }
