"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, CircleDollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  "/images/Captura1.png",
  "/images/Captura2.png",
  "/images/Captura3.png",
];

const steps = [
  { id: 1, title: "Paso 1", description: "Crea una cuenta." },
  { id: 2, title: "Paso 2", description: "Completa tu perfil." },
  { id: 3, title: "Paso 3", description: "Explora las opciones." },
  { id: 4, title: "Paso 4", description: "Comienza a usar la app." },
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-gray-100 dark:bg-gray-900">
      <h1 className="block px-4 sm:px-8 md:px-16 lg:px-60 text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white text-center">
        Gestiona, Colabora y Conéctate:{" "}
        <span className="text-[#d1ae6e]">Todo en un Solo Lugar</span>
      </h1>
      <p className="px-6 mt-8 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
        Gestiona tus expedientes, colabora con colegas y amplía tu red de
        contactos en un solo lugar. Expedium te ayuda a optimizar tu práctica
        legal con herramientas eficientes y conectividad.
      </p>

      <Link href="/register">
        <Button className="my-8 px-6 py-3 text-lg font-semibold text-white bg-[#d1ae6e] hover:bg-[#b8935b] rounded-lg transition">
          ¡Regístrate Ya!
        </Button>
      </Link>

      <div className="w-full max-w-4xl mx-auto px-4 mb-16 md:px-0">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="rounded-lg object-cover"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>

      <div className="w-full bg-gray-50 dark:bg-slate-800 py-24 px-4 md:px-10">
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          ¿Cómo empiezo?
        </h2>
        <div className="p-12 flex justify-between items-center text-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#d1ae6e] text-white rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <p className="mt-2 font-semibold text-gray-800 dark:text-gray-300">
                  {step.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="text-gray-400 dark:text-gray-500 w-6 h-6 mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
