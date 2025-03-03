"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Register = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-6 md:p-10 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <div className={cn("flex flex-col gap-6")}>
          <Card className="dark:bg-[#1E2A3A] dark:border-[#2E3A4B] border-gray-500 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Registro</CardTitle>
              <CardDescription className="text-center">
                Regístrate y comienza a disfrutar de nuestros servicios.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Correo</Label>
                    <Input
                      className="dark:border-slate-400 border-gray-300"
                      id="email"
                      type="email"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2 h-16">
                    <div className="flex items-center">
                      <Label htmlFor="password">Contraseña</Label>
                    </div>
                    <Input
                      className="dark:border-slate-400 border-gray-300"
                      id="password"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Registrarme
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full dark:bg-gray-700 border-gray-600"
                  >
                    Iniciar Sesión con Google
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  ¿Ya tiene una cuenta?{" "}
                  <a
                    href="/iniciar-sesion"
                    className="underline underline-offset-4"
                  >
                    Iniciar Sesión
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
