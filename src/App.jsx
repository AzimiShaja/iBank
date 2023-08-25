import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function lazyWithTimeout(importFunction) {
  return lazy(() =>
    Promise.all([
      importFunction(),
      new Promise((resolve) => setTimeout(resolve, 600)),
    ]).then(([moduleExports]) => moduleExports)
  );
}

const LazyIndexPage = lazyWithTimeout(() => import("./Pages/IndexPage"));
const LazyRegister = lazyWithTimeout(() => import("./Pages/Register"));
const LazyLoginPage = lazyWithTimeout(() => import("./Pages/LoginPage"));
const LazyAbout = lazyWithTimeout(() => import("./Pages/About"));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen bg-gray-100 flex justify-center items-center flex-col gap-5">
          <Link to="/" className="cursor-pointer">
            <h1 className="text-7xl font-bold font-pacifico">
              <span className="text-orange-500 font-pacifico mr-1 text-7xl">
                i
              </span>
              Bank
            </h1>
          </Link>
          <AiOutlineLoading3Quarters className="animate-spin text-7xl" />
        </div>
      }
    >
      {isLoading ? (
        <div className="h-screen bg-gray-100 flex justify-center items-center flex-col gap-5">
          <Link to="/" className="cursor-pointer">
            <h1 className="text-7xl font-bold font-pacifico">
              <span className="text-orange-500 font-pacifico mr-1 text-7xl">
                i
              </span>
              Bank
            </h1>
          </Link>
          <AiOutlineLoading3Quarters className="animate-spin text-7xl" />
        </div>
      ) : (
        <Routes>
          <Route path="/">
            <Route index element={<LazyIndexPage />} />
            <Route path="register" element={<LazyRegister />} />
            <Route path="login" element={<LazyLoginPage />} />
            <Route path="about" element={<LazyAbout />} />
          </Route>
        </Routes>
      )}
    </Suspense>
  );
}
