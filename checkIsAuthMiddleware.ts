import { GetServerSidePropsContext } from "next";
import { IncomingMessage } from "http";
import { decodeToken } from "./app/utils/authDecode";

// Create a generic request type that works for both SSR and API routes
type AuthRequest = IncomingMessage & {
  cookies: Partial<{
    [key: string]: string;
  }>;
};

export const checkAuth = async (
  context: GetServerSidePropsContext | { req: AuthRequest }
) => {
  const token = context.req.cookies.token;

  if (!token) {
    return { authenticated: false, user: null };
  }

  const decoded = decodeToken(token);
  if (!decoded || decoded.exp * 1000 < Date.now()) {
    return { authenticated: false, user: null };
  }

  return {
    authenticated: true,
    user: decoded,
  };
};
