import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-20 bg-gradient-to-br from-mp-sky to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <span className="text-white font-bold text-2xl">MP</span>
        </motion.div>
        <h1 className="text-7xl font-display font-bold text-foreground mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-2">Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page <span className="font-mono text-sm bg-muted px-2 py-1 rounded">{location.pathname}</span> doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Button asChild className="bg-mp-navy hover:bg-mp-sky gap-2">
            <Link to="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
