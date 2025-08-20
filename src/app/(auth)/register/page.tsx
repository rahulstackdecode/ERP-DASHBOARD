"use client";

import { Ban, CircleCheckBig, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import AuthLayout from "@/app/components/AuthLayout";
import { registerErrors } from "@/app/(auth)/constants/errors";
import Logo from "@/app/components/Logo";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState<{ name?: string; email?: string; role?: string; password?: string; confirmPassword?: string; form?: string }>({});
    const [success, setSuccess] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError({});
        setSuccess("");

        if (!name) {
            setError((prev) => ({ ...prev, name: registerErrors.name.empty }));
            return;
        }

        if (!email) {
            setError((prev) => ({ ...prev, email: registerErrors.email.empty }));
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError((prev) => ({ ...prev, email: registerErrors.email.invalid }));
            return;
        }

        if (!role) {
            setError((prev) => ({ ...prev, role: registerErrors.role.empty }));
            return;
        }

        if (!password) {
            setError((prev) => ({ ...prev, password: registerErrors.password.empty }));
            return;
        } else if (password.length < 6) {
            setError((prev) => ({ ...prev, password: registerErrors.password.invalid }));
            return;
        }

        if (!confirmPassword) {
            setError((prev) => ({ ...prev, confirmPassword: registerErrors.confirmPassword.empty }));
            return;
        } else if (confirmPassword !== password) {
            setError((prev) => ({ ...prev, confirmPassword: registerErrors.confirmPassword.mismatch }));
            return;
        }

        setSuccess(registerErrors.form.success);
    };

    return (
        <AuthLayout>
            <div className="sign-up-form px-4 py-10 sm:p-5 md:px-5 md:py-10 w-full">
                <Logo className="mb-8 sm:mb-10 justify-center w-full" />
                <div className="w-full max-w-[600px] bg-white rounded-xl p-6 sm:p-8 shadow-[0px_0px_20px_10px_#00000008] mx-auto">
                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl text-center mb-2 sm:mb-4 font-semibold">
                        Sign Up
                    </h2>
                    <p className=" text-center mb-8 sm:mb-10 text-sm sm:text-base">
                        Please enter below details to create your account
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (error.name && e.target.value) {
                                        setError((prev) => ({ ...prev, name: "" }));
                                    }
                                }}
                                style={{ color: "var(--heading-color)" }}
                                className={`peer w-full px-3 pt-4 pb-4 border border-[#0000000D] rounded-sm outline-none placeholder-transparent focus:ring-2 autofill:!bg-transparent
                                    ${error.name ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}`}
                                placeholder="Full Name"
                            />
                            <label
                                htmlFor="name"
                                style={{ color: "var(--heading-color)" }}
                                className="absolute left-3 -top-2.5 text-sm transition-all
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                            >
                                Full Name
                            </label>
                            {error.name && (
                                <p className="text-sm text-red-600 mt-2 flex items-center">
                                    <Ban size={14} className="me-1" /> {error.name}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (error.email && /\S+@\S+\.\S+/.test(e.target.value)) {
                                        setError((prev) => ({ ...prev, email: "" }));
                                    }
                                }}
                                style={{ color: "var(--heading-color)" }}
                                className={`peer w-full px-3 pt-4 pb-4 border border-[#0000000D] rounded-sm outline-none placeholder-transparent focus:ring-2 autofill:!bg-transparent
                                    ${error.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}`}
                                placeholder="Email"
                            />
                            <label
                                htmlFor="email"
                                style={{ color: "var(--heading-color)" }}
                                className="absolute left-3 -top-2.5 text-sm transition-all
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                            >
                                Email
                            </label>
                            {error.email && (
                                <p className="text-sm text-red-600 mt-2 flex items-center">
                                    <Ban size={14} className="me-1" /> {error.email}
                                </p>
                            )}
                        </div>

                        {/* Role */}
                        <div className="relative">
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => {
                                    setRole(e.target.value);
                                    if (error.role && e.target.value) {
                                        setError((prev) => ({ ...prev, role: "" }));
                                    }
                                }}
                                style={{ color: "var(--heading-color)" }}
                                className={`peer w-full px-3 pt-4 pb-4 border border-[#0000000D] rounded-sm outline-none focus:ring-2
                                    ${error.role ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}`}
                            >
                                <option value="">Select a role</option>
                                  <option value="employee ">Employee </option>
                                <option value="hr">HR</option>
                                <option value="ceo">CEO</option>
                                <option value="team_leader">Team Leader</option>
                            </select>
                            <label
                                htmlFor="role"
                                style={{ color: "var(--heading-color)" }}
                                className="absolute left-3 -top-2.5 text-sm transition-all bg-white px-1
                                    peer-focus:text-blue-500"
                            >
                                Role
                            </label>
                            {error.role && (
                                <p className="text-sm text-red-600 mt-2 flex items-center">
                                    <Ban size={14} className="me-1" /> {error.role}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (error.password && e.target.value.length >= 6) {
                                        setError((prev) => ({ ...prev, password: "" }));
                                    }
                                }}
                                style={{ color: "var(--heading-color)" }}
                                className={`peer w-full px-3 pt-4 pb-4 border border-[#0000000D] rounded-sm outline-none placeholder-transparent focus:ring-2 autofill:!bg-transparent
                                    ${error.password ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}`}
                                placeholder="Password"
                            />
                            <label
                                htmlFor="password"
                                style={{ color: "var(--heading-color)" }}
                                className="absolute left-3 -top-2.5 text-sm transition-all
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                            >
                                Password
                            </label>

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-5 cursor-pointer"
                                style={{ color: "var(--heading-color)" }}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>

                            {error.password && (
                                <p className="text-sm text-red-600 mt-2 flex items-center">
                                    <Ban size={16} className="me-1" /> {error.password}
                                </p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    if (error.confirmPassword && e.target.value === password) {
                                        setError((prev) => ({ ...prev, confirmPassword: "" }));
                                    }
                                }}
                                style={{ color: "var(--heading-color)" }}
                                className={`peer w-full px-3 pt-4 pb-4 border border-[#0000000D] rounded-sm outline-none placeholder-transparent focus:ring-2 autofill:!bg-transparent
                                    ${error.confirmPassword ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}`}
                                placeholder="Confirm Password"
                            />
                            <label
                                htmlFor="confirmPassword"
                                style={{ color: "var(--heading-color)" }}
                                className="absolute left-3 -top-2.5 text-sm transition-all
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                            >
                                Confirm Password
                            </label>

                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-5 cursor-pointer"
                                style={{ color: "var(--heading-color)" }}
                            >
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>

                            {error.confirmPassword && (
                                <p className="text-sm text-red-600 mt-2 flex items-center">
                                    <Ban size={16} className="me-1" /> {error.confirmPassword}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 px-2 font-semibold text-white rounded-sm border border-[#0000000D] transition-colors duration-300 ease-in-out cursor-pointer"
                            style={{ backgroundColor: "var(--primary-color)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--btn-hover-bg)")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-color)")}
                        >
                            Register
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

                    {/* Already have account */}
                    <p className="mt-5 text-sm text-center" style={{ color: "var(--heading-color)" }}>
                        Already have an account?{" "}
                        <a href="/login" className="hover:underline" style={{ color: "var(--primary-color)" }}>
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
}
