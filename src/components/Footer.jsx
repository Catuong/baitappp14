export default function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto my-auto pt-32 sm:pt-44">
      <div className="flex justify-between mt-10 py-10 border-t items-center sm:flex">
      <div className="">
        <p>© 2023 Starboard. All rights reserved.</p>
      </div>
      <div>
        <ul className="flex gap-4 font-medium text-gray-700">
          <li>Features</li>
          <li>Pricing</li>
          <li>FAQs</li>
        </ul>
      </div>
      </div>
    </footer>
  );
}
