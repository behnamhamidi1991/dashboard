"use client";
import { AuthContext } from "@/Context/authContext";

const AuthProvider = ({ children }: any) => {
  return <AuthContext>{children}</AuthContext>;
};

export default AuthProvider;
