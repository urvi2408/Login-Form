import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [entries, setEntries] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    const newEntry = { fname: name, email, psw: password };
    setEntries((prev) => [...prev, newEntry]);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-block">
      <form onSubmit={submitForm}>
        <div className="demo-card">
          <div className="card-head">
            <h2>Sign In</h2>
            <span className="file-tag mono">Form.jsx</span>
          </div>

          <div className="card-body">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </div>

          <div className="state-strip">
            <span className="state-label mono">state</span>
            <span className="state-value mono">
              {`{ name: "${name}", email: "${email}" }`}
            </span>
          </div>
        </div>
      </form>

      <div className="demo-card results-block">
        <div className="card-head">
          <h2>Submitted Entries</h2>
          <span className="count-badge">{entries.length}</span>
        </div>

        <div className="card-body">
          {entries.length === 0 ? (
            <p className="results-empty">No submissions yet — try logging in above.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, i) => (
                  <tr key={i}>
                    <td>{entry.fname}</td>
                    <td>{entry.email}</td>
                    <td className="password-cell">{"•".repeat(entry.psw.length)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;