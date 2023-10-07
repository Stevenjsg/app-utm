import Link from 'next/link';
import React from 'react';

function LeftMenu({isShow}: {isShow: boolean}) {
  return (
    <aside
      className={`${
        isShow ? '' : 'translate-x-[-100%]'
      } absolute left-0 z-10 flex min-h-[100vh] w-full flex-col flex-wrap justify-between bg-green-800 pt-20 transition-transform duration-700 ease-in-out md:w-[40%] lg:w-[20%]`}
    >
      <section>
        <h3 className="pb-4 pl-1 text-xl font-semibold text-white">Left Menu</h3>
        <hgroup className="flex flex-col flex-wrap justify-center gap-2">
          <Link className="my-2 w-full border-b p-1  hover:bg-slate-200/50" href="">
            Link
          </Link>

          <Link className="my-2 w-full border-b p-1 hover:bg-slate-200/50" href="">
            Link
          </Link>

          <Link className="my-2 w-full border-b p-1 hover:bg-slate-200/50" href="">
            Link
          </Link>
        </hgroup>
      </section>
      <Link
        className="flex items-center justify-center rounded-md border p-4 font-semibold text-white hover:bg-gray-100/20"
        href=""
      >
        Configuracion
      </Link>
    </aside>
  );
}

export default LeftMenu;
