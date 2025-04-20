"use client"

import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <Button variant="outline" className="print:hidden" onClick={handlePrint}>
      <Printer className="mr-2 h-4 w-4" /> Drucken
    </Button>
  )
}
