import { AnimatePresence, motion } from "framer-motion";

function getRouteTheme(pathname) {
  if (pathname.startsWith("/eventos/casamento")) {
    return {
      bg: "linear-gradient(180deg, rgba(250,249,246,0.90) 0%, rgba(250,249,246,0.74) 100%)",
    };
  }

  if (pathname.startsWith("/eventos/corporativo")) {
    return {
      bg: "linear-gradient(180deg, rgba(14,14,14,0.90) 0%, rgba(14,14,14,0.82) 100%)",
    };
  }

  if (pathname.startsWith("/eventos/sociais")) {
    return {
      bg: "linear-gradient(180deg, rgba(14,14,14,0.90) 0%, rgba(14,14,14,0.84) 100%)",
    };
  }

  return {
    bg: "linear-gradient(180deg, rgba(14,14,14,0.90) 0%, rgba(14,14,14,0.84) 100%)",
  };
}

export default function RouteTransitionOverlay({ pathname }) {
  const theme = getRouteTheme(pathname);

  return (
    <AnimatePresence mode="sync" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0.1, scale: 1.005 }}
        animate={{ opacity: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.46,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none fixed inset-0 z-40"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background: theme.bg,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
