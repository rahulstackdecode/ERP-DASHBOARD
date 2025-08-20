"use client";

import { useState } from "react";
import { Ban, CircleCheckBig } from "lucide-react";
import AuthLayout from "@/app/components/AuthLayout";
import Logo from "@/app/components/Logo";
import { verifyErrors } from "@/app/(auth)/constants/errors";

export default function VerifyCodePage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState<{ code?: string; form?: string }>({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError({});
    setSuccess("");

    if (!code) {
      setError((prev) => ({ ...prev, code: verifyErrors.code.empty }));
      return;
    } else if (code.length < 6) {
      setError((prev) => ({ ...prev, code: verifyErrors.code.invalid }));
      return;
    }

    setSuccess(verifyErrors.form.success);
  };

  return (
    <AuthLayout>
      <div className="sign-in-form px-4 py-10 sm:p-5 md:px-5 md:py-10 w-full">
        <Logo className="mb-8 sm:mb-10 justify-center w-full" />

        <div className="w-full max-w-[600px] bg-white rounded-xl p-6 sm:p-8 sm:pb-10 shadow-[0px_0px_20px_10px_#00000008] mx-auto">
          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl text-center mb-2 sm:mb-4 font-semibold"
            style={{ color: "var(--heading-color)" }}
          >
            Verify Code
          </h2>
          <p className="text-center mb-8 sm:mb-12 text-sm sm:text-base">
            An authentication code has been sent to your email.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Code Input */}
            <div className="relative mb-3">
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  if (error.code && e.target.value.length >= 6) {
                    setError((prev) => ({ ...prev, code: "" }));
                  }
                }}
                style={{ color: "var(--heading-color)" }}
                className={`peer w-full px-4 pt-4 pb-4 border border-[#0000000D] rounded-sm outline-none placeholder-transparent focus:ring-2
                  ${error.code ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}`}
                placeholder="Enter Code"
              />
              <label
                htmlFor="code"
                style={{ color: "var(--heading-color)" }}
                className="absolute left-3 -top-2.5 text-sm transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                  peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
              >
                Enter Code
              </label>
              {error.code && (
                <p className="text-sm text-red-600 mt-2 flex items-center">
                  <Ban size={14} className="me-1" /> {error.code}
                </p>
              )}
            </div>

            {/* Resend */}
            <p className="text-sm" style={{ color: "var(--heading-color)" }}>
              Didn’t receive a code?{" "}
              <button
                type="button"
                className="hover:underline cursor-pointer"
                style={{ color: "var(--primary-color)" }}
              >
                Resend
              </button>
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-2 mt-2 font-semibold text-white rounded-sm border border-[#0000000D] transition-colors duration-300 ease-in-out cursor-pointer"
              style={{ backgroundColor: "var(--primary-color)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--btn-hover-bg)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--primary-color)")
              }
            >
              Verify Code
            </button>
          </form>

          {/* Messages */}
          {success && (
            <p className="mt-4 text-green-600 text-center font-normal flex items-center justify-center">
              <CircleCheckBig size={16} className="me-1" /> {success}
            </p>
          )}
          {error.form && (
            <p className="mt-4 text-red-600 text-center font-normal flex items-center justify-center">
              <Ban size={16} className="me-1" /> {error.form}
            </p>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}
