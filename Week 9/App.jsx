import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./api.jsx";

function App() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return (
      <div>
        <h2>Failed to fetch users.</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Dashboard</h1>

      <button onClick={refetch}>
        Refresh
      </button>

      <br />
      <br />

      {data.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default App;