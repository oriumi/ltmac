import Input from "@/components/Input";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import image from "@/../public/laboratory.jpg";
import ErrorMessage from "@/components/ErrorMessage";
import Button from "@/components/Button";

export default function Home() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [registerKey, setRegisterKey] = React.useState("");

  const [errorInput, setErrorInput] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = React.useState(false);
  // const [errorRegisterKey, setErrorRegisterKey] = React.useState(false);

  const regex = {
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !errorInput &&
      !errorPassword &&
      !errorConfirmPassword
      // !errorRegisterKey
    ) {
      // console.log(`User: ${user} | Password: ${password}`);
      const data = new FormData(e.currentTarget);
      console.log(Object.fromEntries(data.entries()));
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

  function validateConfirmPassword() {
    if (confirmPassword.length === 0) {
      setErrorConfirmPassword(true);
    } else if (password !== confirmPassword) {
      setErrorConfirmPassword(true);
    } else {
      setErrorConfirmPassword(false);
    }
  }

  function handleUserChange(e: ChangeEvent<HTMLInputElement>) {
    setUser(e.target.value);
    validateUser();
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    validatePassword();
    console.log(password);
  }

  function handleConfirmPasswChange(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
    validateConfirmPassword();
    console.log(confirmPassword);
  }

  function handleConfirmVerifyKey(e: ChangeEvent<HTMLInputElement>) {
    setRegisterKey(e.target.value);
    // validateConfirmPassword();
    console.log(registerKey);
  }

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <Image
        src={image}
        className="object-cover hidden sm:block sm:w-1/2"
        alt={""}
      />

      <section className="w-1/2 ml-[10%] mt-[5%] block mr-[10%]">
        <h2 className="text-5xl mb-12 text-gray-600 font-bold">Cadastro</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <Input
            label="Email"
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
          <Input
            label="Confirmar Senha"
            type="password"
            name="confirmPassword"
            onChange={handleConfirmPasswChange}
            onBlur={validateConfirmPassword}
            value={confirmPassword}
          />
          {errorConfirmPassword && (
            <ErrorMessage message="As senhas não coincidem." />
          )}
          <Input
            label="Chave de verificação"
            type="text"
            name="verifyKey"
            onChange={handleConfirmVerifyKey}
            // onBlur={validateConfirmPassword}
            value={registerKey}
          />
          <Button value="Enviar" />
        </form>
      </section>
    </div>
  );
}
