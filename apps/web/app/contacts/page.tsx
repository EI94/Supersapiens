"use client";

import { useState } from "react";

export default function ContactsPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name || !message) {
      setStatus("error");
      setErrorMessage("Tutti i campi sono obbligatori");
      return;
    }

    setIsLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setName("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Errore nell'invio del messaggio");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Errore di connessione. Riprova più tardi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-1 justify-center px-40 py-5">
      <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
        {/* Status Messages */}
        {status === "success" && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="flex items-center">
              <div className="mr-3 text-green-600">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-green-800">
                  Messaggio inviato con successo! 🎉
                </h3>
                <p className="mt-1 text-sm text-green-700">
                  Ti risponderemo entro 24 ore. Controlla anche la tua email per
                  la conferma.
                </p>
              </div>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
            <div className="flex items-center">
              <div className="mr-3 text-red-600">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-red-800">Errore nell'invio</h3>
                <p className="mt-1 text-sm text-red-700">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}

        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="@[480px]:gap-8 @[480px]:rounded-lg flex min-h-[480px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_FE_O6CWNlZcXy6G9OGqI2TGrCwbLKpPko3wxbXQvdvVB89VXV71F-CDLdYEsmue7-k-FC7muXdSXSYqULz5N5d7d7G-mnXTSCYXUozsfF4pYV2RYN_glRF62wCkAhXmMDkPSzi5a7BUU4wvSd2pNOw50LEufepYWnY0qROLlKH97TRxaJS8xBunqZZRmRUh-8vIJHupgyXG_rjhsWAJIbZ-6zQu2RFHpZCHIa71OAQEyAZ6Uoz34GWXR4_cZAZX4DSEi7z0b583b")',
              }}
            >
              <h1 className="@[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center text-4xl font-black leading-tight tracking-[-0.033em] text-white">
                Start Your AI Transformation
              </h1>
              <label className="@[480px]:h-16 flex h-14 w-full min-w-40 max-w-[480px] flex-col">
                <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                  <div
                    className="flex items-center justify-center rounded-l-lg border border-r-0 border-[#cedbe8] bg-slate-50 pl-[15px] text-[#49739c]"
                    data-icon="MagnifyingGlass"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Work email"
                    className="form-input @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none rounded-r-none border border-l-0 border-r-0 border-[#cedbe8] bg-slate-50 px-[15px] pl-2 pr-2 text-sm font-normal leading-normal text-[#0d141c] placeholder:text-[#49739c] focus:border-[#cedbe8] focus:outline-0 focus:ring-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                  <div className="flex items-center justify-center rounded-r-lg border border-l-0 border-[#cedbe8] bg-slate-50 pr-[7px]">
                    <button
                      className="@[480px]:h-12 @[480px]:px-5 @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#0c7ff2] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                      onClick={handleSubmit}
                      disabled={isLoading}
                    >
                      <span className="truncate">
                        {isLoading ? "Invio..." : "Submit"}
                      </span>
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex min-w-40 flex-1 flex-col">
              <input
                placeholder="Name"
                className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-none bg-[#e7edf4] p-4 text-base font-normal leading-normal text-[#0d141c] placeholder:text-[#49739c] focus:border-none focus:outline-0 focus:ring-0"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
                required
              />
            </label>
          </div>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex min-w-40 flex-1 flex-col">
              <textarea
                placeholder="Tell us about your needs"
                className="form-input flex min-h-36 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-none bg-[#e7edf4] p-4 text-base font-normal leading-normal text-[#0d141c] placeholder:text-[#49739c] focus:border-none focus:outline-0 focus:ring-0"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isLoading}
                required
              />
            </label>
          </div>

          <div className="flex justify-center px-4 py-3">
            <button
              type="submit"
              className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#0c7ff2] px-5 text-base font-bold leading-normal tracking-[0.015em] text-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isLoading}
            >
              <span className="truncate">
                {isLoading ? "Invio in corso..." : "Submit"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
