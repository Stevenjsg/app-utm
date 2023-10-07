'use client';
import Imagen from 'next/image';

import prueba from '@/../public/prueba.jpg';

function LoginForm(): JSX.Element {
  const haddlerbutton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('click');
  };

  return (
    <section className="mx-auto flex min-h-[32rem] min-w-[25rem] flex-col flex-wrap items-center rounded-md bg-green-800 shadow-2xl xl:w-2/12">
      <div className="flex h-full w-full flex-wrap justify-center overflow-hidden">
        <Imagen
          priority
          alt="logo-bussines"
          className="aspect-square h-56 w-full  rounded-t-md object-cover"
          height={200}
          src={prueba}
        />
      </div>
      <form className="flex h-full flex-col items-center gap-4">
        <hgroup className="g-2 flex h-full flex-col justify-center gap-2 p-4">
          <label className="text-lg text-white" htmlFor="userEmail">
            Correo electronico:
          </label>
          <input
            className="h-10 w-80 rounded-lg border p-2 hover:border-2 hover:border-yellow-400"
            id="userEmail"
            name="userEmail"
            placeholder="Correo electronico"
            type="email"
          />
        </hgroup>
        <hgroup className="g-2 flex flex-col">
          <label className="text-lg text-white" htmlFor="userPass">
            Contrasena:
          </label>
          <input
            className="h-10 w-80 rounded-lg border  p-2 hover:border-2 hover:border-yellow-400"
            id="userPass"
            name="userPass"
            placeholder="Contrasena"
            type="password"
          />
        </hgroup>

        <button
          className="rounded-md border-2 border-solid border-green-900 p-4 text-white shadow-lg"
          type="submit"
          onClick={haddlerbutton}
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
