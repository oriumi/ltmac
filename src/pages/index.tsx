import React from "react";
import Search from "@/../public/search.svg";
import Card from "@/components/Card";
import peg4000 from "@/../public/peg4000.png";
import dankfix from "@/../public/dankfix.webp";
import ErrorMessage from "@/components/ErrorMessage";
import Link from "next/link";

const Index = () => {
  const [search, setSearch] = React.useState("");
  const [logado, setLogado] = React.useState("");

  React.useEffect(() => {
    const verificarLogin = localStorage.getItem("isLoggedIn");

    if (verificarLogin) {
      setLogado("true");
    }
  }, []);

  return (
    <div className="max-w-screen-lg px-8 mt-12 mx-auto sm:px-14 sm:mt-16">
      <h2 className="text-5xl mb-10 text-gray-600 font-bold sm:mb-12">
        Estoque
      </h2>
      <div className="flex flex-row">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-solid rounded-l-lg border border-gray-400 p-3 bg-slate-100 transition-all focus:outline-none focus:border-gray-800 focus:bg-white focus:shadow-[0_0_0_3px_gray-800] hover:outline-none hover:border-gray-800 hover:bg-white hover:shadow-sm"
          placeholder="Pesquisar..."
        />
        <button className="rounded-r-lg border flex-shrink-0 border-black p-3">
          <Search />
        </button>
      </div>
      <p className="mt-8 mb-4">Produto pesquisado: {search}</p>

      {logado ? (
        <p className="text-green-600">Você está logado!</p>
      ) : (
        <ErrorMessage message="Você não está logado! Por favor utilize o usuário ltmac@ltmac.com e a senha Ltmac123 para logar." />
      )}
      {!logado && (
        <p className="mb-5">
          <Link className="text-blue-600" href="/login">
            Clique aqui{" "}
          </Link>
          para logar ou em login/criar no menu.
        </p>
      )}

      <div className="grid lg:grid-cols-2 gap-4 justify-center">
        <Card
          imageUrl={dankfix}
          title="Em construção"
          quantity="???"
          classification="???"
          comments="O site ainda está em construção."
        />
        <Card
          imageUrl={peg4000}
          title="PEG 4000"
          quantity="200g"
          classification="Polímero"
          comments="Propiletilenoglicol, plastificante"
        />
      </div>
    </div>
  );
};

{
  /* <input
type="text"
// value={searchTerm}
// onChange={handleInputChange}
className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
placeholder="Pesquisar..."
/>
<button
type="button"
// onClick={handleSearch}
className="flex-shrink-0 px-4 py-2 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
>
<Image src={Plus} alt="" />
</button> */
}

export default Index;
