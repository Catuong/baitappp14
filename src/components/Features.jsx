export default function Features() {
  return (
    <div className="w-100% bg-gray-900 py-28 my-16 sm:py-32 text-white">
      <div className="max-w-screen-xl mx-auto my-auto"> 
      <div className=" text-gray-300 justify-between gap-24 lg:flex ">
            <div className="max-w-xl">
              <h2 className="text-white text-3xl font-semibold sm:text-4xl">make your website in front of more people</h2>
              <p>split is a new, revolutionary way to generate website traffic. 
                We offer a variety of packages to suit your needs.</p>
            </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="cot2">
            <div className="flex gap-x-4">
              <div className=" bg-gray-700 rounded-lg w-12 h-12 flex items-center justify-center">
                <ion-icon name="document-text-outline"></ion-icon>
              </div>
              <div>
                <p className="text-lg text-gray-100 font-semibold">Email and Slack reports</p>
                <p className="mt-3">With weekly and/or monthly statistics, you can keep track of your traffic.</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className=" bg-gray-700 rounded-lg w-12 h-12 flex items-center justify-center">
                <ion-icon name="swap-vertical-outline"></ion-icon>
              </div>
              <div>
                <p className="text-lg text-gray-100 font-semibold">A powerful and flexible API</p>
                <p className="mt-3" >Our API allows you to obtain your statistics programmatically, send them wherever you want.</p>
              </div>
            </div>
          </div>
   
          <div className="cot3">
            <div className="flex gap-x-4">
              <div className=" bg-gray-700 rounded-lg w-12 h-12 flex items-center justify-center">
                <ion-icon name="server-outline"></ion-icon>
              </div>
              <div>
                <p className="text-lg text-gray-100 font-semibold">Own and control your data</p>
                <p className="mt-3">We guarantee that your website data will never be shared or sold to a third party.</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className=" bg-gray-700 rounded-lg w-12 h-12 flex items-center justify-center">
                <ion-icon name="stats-chart-outline"></ion-icon>
              </div>
              <div>
                <p className="text-lg text-gray-100 font-semibold">Analyze marketing campaigns</p>
                <p className="mt-3">We help you understand how well your marketing campaigns are performing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  
    );
  }
  