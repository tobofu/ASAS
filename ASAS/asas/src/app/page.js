"use client"
import React from "react"
import App from "./App"
import Header from "@/components/header"
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <Header/>
      <App/>
    </NextUIProvider>
  )
}
