import { useRouter } from "next/router";
import { useAppContext } from "@/context/AppContext";
import Cookies from "js-cookie";

import Head from "next/head";
import Link from "next/link";

function Navigation() {
  const { user, setUser } = useAppContext();
  const router = useRouter();

  const handleLogOut = () => {
    setUser(null);
    Cookies.remove("token");
    router.push('/');
  }

  return (
    <nav className="container mx-auto flex justify-between p-6 px-4">
      <div className="flex justify-between items-center w-full">
        <div className="xl:w-1/3">
          <Link
            className="block text-lg max-w-max ext-coolGray-500 hover:text-coolGray-900 font-medium"
            href="/"
          >
            Food Order App
          </Link>
        </div>

        <div className="xl:block xl:w-1/3">
          <div className="flex items-center justify-end">
            <Link
              className="text-coolGray-500 hover:text-coolGray-900 font-medium"
              href="/"
            >
              Home
            </Link>
            <div className="hxl:block">
              {
                user ? (
                  <div className="flex items-center justify-end">
                    <span className="inline-block py-2 px-4 mr-2 leading-5 text-gray-50 hover:text-gray-100 bg-transparent font-medium rounded-sm">
                      {user.username}
                    </span>
                    <button className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-opacity-50 rounded-md focus:ring-green-500"
                      onClick={handleLogOut}>
                      Log out
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-end">
                  <Link
                    className="inline-block py-2 px-4 mr-2 leading-5 text-gray-50  hover:text-yellow-200 font-bold bg-transparent rounded-md"
                    href="/login"
                  >
                    Log In
                  </Link>
                  <Link
                    className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-600 hover:bg-green-700 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
                    href="/register"
                  >
                    Sign Up
                  </Link>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Layout(props) {
  const title = "Welcome to Nextjs";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <div className="container mx-auto px-4">{props.children}</div>
    </div>
  );
}