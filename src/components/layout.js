import React from "react"
import Navigation from "../components/navigation"
import layout from "./layout.module.scss"

export default function Layout({ children }) {
  return <div>
        <Navigation></Navigation>
        {children}
      </div>
}