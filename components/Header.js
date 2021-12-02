import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full text-white bg-gray-800 shadow-sm p-3">
      <div className="flex flex-row justify-between mx-2 md:mx-4">
        <div className="flex items-center mx-auto">
          <Link href="/">
            <a className="text-2xl md:text-4xl font-bold hover:text-yellow-500">
              Tesla News
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
