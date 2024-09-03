type UnionTypeProps = {
  status: "success" | "error" | "loading";
};
const DataFetch = ({ status }: UnionTypeProps) => {
  return (
    <div style={{ border: "1px solid black", margin: "10px 0" }}>
      {status === "success" ? (
        <h3 style={{ color: "green" }}>Data fetched successfully</h3>
      ) : status === "error" ? (
        <h3 style={{ color: "red" }}>Error!! Data could not be fetched</h3>
      ) : (
        <h3 style={{ color: "blue" }}>Data is fetching.......</h3>
      )}
    </div>
  );
};

export default DataFetch;
