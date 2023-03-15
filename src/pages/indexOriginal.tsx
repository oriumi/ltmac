import Input from "@/components/InputOriginal";
import Image from "next/image";
import React from "react";
import image from "../../public/laboratory.jpg";

export default function Home() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const regex = {
    email: /^[^s@]+@[^s@]+.[^s@]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{6,}$/,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`User: ${user} | Password: ${password}`);

    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <Image
        src={image}
        className="object-cover hidden sm:block sm:w-1/2"
        alt={""}
      />

      {/* <div className="sm:w-1/2 flex items-center justify-center flex-col"> */}
      <section className="w-1/2 ml-[10%] mt-[5%] block">
        {/* <section className="w-1/2 flex items-center justify-center flex-col"> */}
        <h2 className="text-5xl mb-12 text-gray-600 font-bold">Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Usuário"
            onChange={(value) => setUser(value)}
            // onChange={handleUserChange}
            // onBlur={handleUserBlur}
            value={user}
            placeholder="Digite seu usuário"
            regex={regex.email}
            errorMessage="Insira um email válido"
          />
          <Input
            type="password"
            label="Senha"
            onChange={(value) => setPassword(value)}
            // onChange={handleUserChange}
            // onBlur={handleUserBlur}
            value={password}
            placeholder="*********"
            regex={regex.password}
            errorMessage="Insira uma senha com 6 caracteres e uma letra maiúscula e outra minúscula"
          />
          <button className="bg-gray-800 text-gray-100 hover:text-gray-200 w-3/5 mt-3 p-3">
            Enviar
          </button>
        </form>
        <p className="mt-8">Perdeu sua senha? Clique aqui!</p>
        <button className="bg-gray-800 text-gray-100 hover:text-gray-200 w-3/5 mt-8 p-3">
          Cadastre-se
        </button>
      </section>
    </div>
  );
}

{
  /* <p className="">Usuário</p>
<input type="text" />
<p className="p-2">Senha</p>
<button>Entrar</button>
<p>Perdeu a Senha?</p>
<h1>Cadastre-se</h1>
<p className="p-2">Index</p> */
}
