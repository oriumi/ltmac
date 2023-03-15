import Input from "@/components/Input";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import image from "@/../public/laboratory.jpg";
import ErrorMessage from "@/components/ErrorMessage";
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorInput, setErrorInput] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorLogin, setErrorLogin] = React.useState("");

  const router = useRouter();

  const regex = {
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!errorInput && !errorPassword) {
      setErrorLogin("Usuário ou senha incorreto");
      console.log(`User: ${user} | Password: ${password}`);
      const data = new FormData(e.currentTarget);
      console.log(Object.fromEntries(data.entries()));
      if (user === "ltmac@ltmac.com" && password === "Ltmac123") {
        setErrorLogin("");
        console.log("Autenticado com sucesso!");
        localStorage.setItem("isLoggedIn", "true");
        router.push("/");

        setTimeout(() => {
          localStorage.removeItem("isLoggedIn");
        }, 1000 * 10);
      }
    }
  }

  function validateUser() {
    if (user.length === 0) {
      setErrorInput(true);
    } else if (!regex.email.test(user)) {
      setErrorInput(true);
    } else {
      setErrorInput(false);
    }
  }

  function validatePassword() {
    if (password.length === 0) {
      setErrorPassword(true);
    } else if (!regex.password.test(password)) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  }

  function handleUserChange(e: ChangeEvent<HTMLInputElement>) {
    setUser(e.target.value);
    validateUser();
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    validatePassword();
  }

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <Image
        src={image}
        className="object-cover hidden sm:block sm:w-1/2"
        alt={""}
      />

      <section className="w-1/2 ml-[10%] mt-[5%] block mr-[10%]">
        <h2 className="text-5xl mb-12 text-gray-600 font-bold">Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <Input
            label="Usuário"
            type="email"
            name="username"
            onChange={handleUserChange}
            onBlur={validateUser}
            value={user}
          />
          {errorInput && <ErrorMessage message="Preencha um email válido." />}
          <Input
            label="Senha"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            onBlur={validatePassword}
            value={password}
          />
          {errorPassword && (
            <ErrorMessage message="A senha deve conter 6 caracteres, com pelo menos 1 letra maiúscula e 1 minúscula." />
          )}
          <Button value="Logar" />
        </form>
        <p className="mt-6 mb-8">Perdeu sua senha? Clique aqui!</p>
        <Link href="/cadastro">
          <Button value="Cadastre-se" />
        </Link>
        {errorLogin && <ErrorMessage message={errorLogin} />}
      </section>
    </div>
  );
}
