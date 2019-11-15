import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = props => (
  <Layout>
    <div>
      <h1 className="title is-1">Welcome to Bitcoin Price Dashboard</h1>
      <h2 className="subtitle is-3">Check current Bitcoin rate</h2>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi
  };
};

export default Index;
