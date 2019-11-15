import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>Bitcoin Dashboard</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    <div className="container is-fluid">{props.children}</div>
  </div>
);

export default Layout;
