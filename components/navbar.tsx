"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, Menu, X, Settings, User, LogOut, Moon, Sun, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { useLanguage } from "./language-provider"

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLanguageChange = (lang: "de" | "en" | "hi") => {
    setLanguage(lang)
    // Close the mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleLogout = () => {
    // In a real application, this would log the user out
    alert("User logged out")
  }

  const navItems = [
    { name: t("nav.dashboard"), path: "/" },
    { name: t("nav.progress"), path: "/page1" },
    { name: t("nav.monitor"), path: "/page2" },
    { name: t("nav.coreProjects"), path: "/page3" },
    { name: t("nav.digitalProgress"), path: "/page4" },
    { name: t("nav.qualityPerformance"), path: "/page5" },
    { name: t("nav.healthDigital"), path: "/page6" },
  ]

  return (
    <nav className="bg-[#0a9daa] dark:bg-gray-800 text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <Activity className="h-4 w-4" />
            </div>
            <div className="hidden md:block">
              <span className="font-bold text-lg">{t("app.title")}</span>
            </div>
            <div className="block md:hidden">
              <span className="font-bold text-lg">Digi 2030</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors ${
                  pathname === item.path ? "bg-white/20" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="flex items-center">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white mr-2">
                  <Languages className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t("language.select")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleLanguageChange("de")}>
                  <span className={language === "de" ? "font-bold" : ""}>Deutsch</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                  <span className={language === "en" ? "font-bold" : ""}>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("hi")}>
                  <span className={language === "hi" ? "font-bold" : ""}>हिन्दी</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            {mounted && (
              <Button variant="ghost" size="sm" onClick={handleThemeChange} className="text-white mr-2">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t("user.account")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>{t("user.profile")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>{t("user.settings")}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>{t("user.logout")}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-white">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a9daa] dark:bg-gray-800 border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors ${
                  pathname === item.path ? "bg-white/20" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
