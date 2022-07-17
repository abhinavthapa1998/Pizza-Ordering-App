import Head from "next/head";

export default function IndexPage() {
  return (
    <div className="container">
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best Pizza Shop in town!" />
      </Head>
      Homepage
      <img src="https://img.freepik.com/free-vector/flying-slice-pizza-cartoon-vector-illustration-fast-food-concept-isolated-vector-flat-cartoon-style_138676-1934.jpg?w=2000" />
    </div>
  );
}
