import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      {/* HOME PAGE */}
      {page === "home" && (
        <div className="phone-screen">
          <div className="content">
            <h1 className="title">INVENTORY<br />MANAGEMENT<br />SYSTEM</h1>
            <button className="go-btn" onClick={() => setPage("admin")}>
              Go to Admin
            </button>
          </div>
          <footer className="footer">
            Richard C. Cuario, Jovelyn Resco <br />
            Jay N Buban, Bryan Buella, Jody Vista
          </footer>
        </div>
      )}

      {/* ADMIN PAGE */}
      {page === "admin" && (
        <div className="phone-screen admin">
          <h1 className="admin-title">Admin Dashboard</h1>
          <div className="admin-content">
            <input type="text" placeholder="Item name" />
            <input type="number" placeholder="Quantity" />
            <button className="add-btn">➕ Add Item</button>
          </div>
          <button className="back-btn" onClick={() => setPage("home")}>
            ⬅ Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
