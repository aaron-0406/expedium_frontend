"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link
            href="/"
            className="text-lg font-bold dark:text-white flex items-center"
          >
            <img src="/logo.png" alt="Logo" width={50} />
            Expedium
          </Link>
          <p className="mt-2 text-gray-400">
            Simplifica la gestión de expedientes con nuestra plataforma
            intuitiva y segura.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Plataforma</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/expedientes" className="hover:text-white">
                  Expedientes
                </Link>
              </li>
              <li>
                <Link href="/soporte" className="hover:text-white">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <Link href="/terminos" className="hover:text-white">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-white">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Suscríbete a nuestro boletín</h3>
          <div className="mt-2 flex items-center space-x-2">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              className="bg-gray-800 border-none focus:ring-2 focus:ring-blue-500"
            />
            <Button>
              <Mail className="w-4 h-4 mr-2" />
              Suscribirse
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Expedium. Todos los derechos
          reservados.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="w-5 h-5 hover:text-white" />
          </Link>
          <Link href="https://github.com" target="_blank">
            <Github className="w-5 h-5 hover:text-white" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="w-5 h-5 hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
