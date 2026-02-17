
import { useEffect, useState } from "react";
import "./healthCheckButton.css";
 
export default function BackendStatus() {
  const [status, setStatus] = useState("checking");
 
  useEffect(() => {
    async function check() {
        try {
          const response = await fetch("/api/healthcheck", { method: "GET" });
     
          // Must return JSON (our API will do this later)
          const contentType = response.headers.get("content-type");
     
          if (!response.ok || !contentType?.includes("application/json")) {
            throw new Error("Not a real API response");
          }
     
          setStatus("online");
        } catch {
          setStatus("offline");
        }
      }
 
    check();
  }, []);
 
  return (
    <div className="container">
      <div className="title">Backend Health Check</div>
 
      {status === "checking" && (
        <div className="checking">Checking backend…</div>
      )}
 
      {status === "online" && (
        <div className="online">API is online ✔️</div>
      )}
 
      {status === "offline" && (
        <div className="offline">
          API is offline!!!
          <div className="subtext">
            This is expected — we have not built the backend layer yet...
          </div>
        </div>
      )}
    </div>
  );
}
 
 
