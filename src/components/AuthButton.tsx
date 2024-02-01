"use client"

import React from "react"

import { authenticate } from "@/app/_actions/authenticate"

import { Button } from "./ui/button"

interface LoginButtonProps {
  icon: React.ReactNode
}

export function AuthButton({ icon }: LoginButtonProps) {
  return (
    <Button variant="outline" onClick={() => authenticate()}>
      {icon}
    </Button>
  )
}
