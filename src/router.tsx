import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // For GitHub Pages deployment under a repo subpath, Vite injects BASE_URL
  // (e.g. "/bhiveai_scaleai_partnership/"). Strip trailing slash for router basepath.
  const baseUrl = import.meta.env.BASE_URL ?? "/";
  const basepath = baseUrl.replace(/\/$/, "") || "/";

  const router = createRouter({
    routeTree,
    context: { queryClient },
    basepath,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
