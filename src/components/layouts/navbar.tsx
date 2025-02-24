"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/theme-toggle";
import { DialogDescription, DialogTitle } from "../ui/dialog";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-lg font-bold dark:text-white flex items-center"
        >
          <img src="/logo.png" alt="Logo" width={50} />
          Expedium
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/equipos"
            className="hover:text-blue-600 transition dark:text-white"
          >
            ¿Cómo empiezo?
          </Link>
          <Link
            href="/reservas"
            className="hover:text-blue-600 transition dark:text-white"
          >
            Plataforma
          </Link>
          <Link
            href="/reservas"
            className="hover:text-blue-600 transition dark:text-white"
          >
            Preguntas
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Más</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/campeonatos">Sobre Nosotros</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/apuestas">Contáctanos</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/login">Iniciar Sesión</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <DialogTitle className="sr-only">Menú de navegación</DialogTitle>
              <DialogDescription className="sr-only">
                Usa los enlaces a continuación para navegar por la aplicación.
              </DialogDescription>

              <div className="flex flex-col space-y-4 mt-6">
                <Link href="/equipos" onClick={() => setIsOpen(false)}>
                  Equipos
                </Link>
                <Link href="/reservas" onClick={() => setIsOpen(false)}>
                  Reservas
                </Link>
                <Link href="/campeonatos" onClick={() => setIsOpen(false)}>
                  Campeonatos
                </Link>
                <Link href="/apuestas" onClick={() => setIsOpen(false)}>
                  Apuestas
                </Link>
                <ThemeToggle />
                <Button asChild>
                  <Link href="/login">Iniciar Sesión</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
