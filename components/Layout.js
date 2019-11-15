import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>Bitcoin Dashboard</title>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    <div className="container mx-auto">{props.children}</div>
  </div>
);

export default Layout;
