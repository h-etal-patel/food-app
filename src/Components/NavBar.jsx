import Link from "next/link";
import { UserButton, SignInButton, SignUpButton, SignIn, SignedOut, SignedIn } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server";


export default async function NavBar() {
  const { userId } = await auth();
  const profile ="/profile/"+userId;
  return (
    <>
      <div className="navbar bg-base-100 border-b border-gray-200">
        <div className="flex-1">
          <Link href='/' className="btn btn-ghost text-xl">Home</Link>
          <Link href='/menu' className="btn btn-ghost text-xl">Menu</Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <Link href={'/cart'}>
              
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
                
                </Link>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://week9-assignment-five.vercel.app/_next/image?url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTJBTeHtGkoY3_a-PM2Jh85tB8HKsmNiUMJXVk1YAv8dkJ7Q7FFPBDSoTD-vQ98eh6pup4%26usqp%3DCAU&w=640&q=75" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
            </ul>
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>Sign In</SignInButton>
            <SignUpButton>Sign Up</SignUpButton>
          </SignedOut>
        </div>
      </div>

    </>
  );

} 
