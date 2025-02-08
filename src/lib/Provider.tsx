"use client";

import { ThemeProvider } from "next-themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar
        height="3px"
        color="transparent"
        options={{ showSpinner: true }}
        shallowRouting
      />
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </>
  );
};

export default Provider;
