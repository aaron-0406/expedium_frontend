"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Clock,
  FileText,
  Shield,
  Users,
} from "lucide-react";
import { Fragment } from "react";

const images = [
  "/images/Captura1.png",
  "/images/Captura2.png",
  "/images/Captura3.png",
];

const steps = [
  {
    id: 1,
    title: "Paso 1",
    description:
      "Crea una cuenta gratuita en la plataforma ingresando tu correo electrónico y estableciendo una contraseña segura.",
  },
  {
    id: 2,
    title: "Paso 2",
    description:
      "Completa tu perfil con tu información personal, foto y preferencias para mejorar tu experiencia en la aplicación.",
  },
  {
    id: 3,
    title: "Paso 3",
    description:
      "Explora las opciones disponibles, encuentra eventos, partidos o comunidades que se adapten a tus intereses.",
  },
  {
    id: 4,
    title: "Paso 4",
    description:
      "Comienza a usar la app, únete a eventos, crea equipos, reserva canchas y disfruta de la experiencia.",
  },
];

const plans = [
  {
    name: "Básico",
    price: "S/59.90",
    discountPrice: "S/49.90",
    description:
      "Ideal para abogados individuales que manejan pocos expedientes.",
    benefits: [
      "Hasta 25 expedientes principales",
      "Sin límite de miembros",
      "2 horarios de notificación",
    ],
  },
  {
    name: "Estándar",
    price: "S/79.90",
    discountPrice: "S/69.90",
    description: "Para estudios jurídicos pequeños que requieren más control.",
    benefits: [
      "Hasta 50 expedientes principales",
      "Sin límite de miembros",
      "2 horarios de notificación",
      "Historial de notificaciones",
    ],
  },
  {
    name: "Corporativo",
    price: "S/139.90",
    discountPrice: "S/119.90",
    description:
      "Perfecto para estudios jurídicos grandes con alta carga de expedientes.",
    benefits: [
      "Hasta 100 expedientes principales",
      "Sin límite de miembros",
      "2 horarios de notificación",
      "Historial de notificaciones",
      "Soporte prioritario",
    ],
  },
  {
    name: "Premium",
    price: "Personalizado",
    discountPrice: "",
    description:
      "Diseñado a medida para grandes firmas con necesidades especiales.",
    benefits: [
      "Más de 100 expedientes principales",
      "Sin límite de miembros",
      "2 horarios de notificación",
      "Historial de notificaciones",
      "Soporte prioritario",
      "Funciones exclusivas a medida",
    ],
  },
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-gray-100 dark:bg-gray-900">
      <h1 className="block px-4 sm:px-8 md:px-16 lg:px-60 text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white text-center">
        Gestiona, Colabora y Conéctate:{" "}
        <span className="text-main">Todo en un Solo Lugar</span>
      </h1>
      <p className="px-6 mt-8 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
        Gestiona tus expedientes, colabora con colegas y amplía tu red de
        contactos en un solo lugar. Expedium te ayuda a optimizar tu práctica
        legal con herramientas eficientes y conectividad.
      </p>

      <Link href="/register">
        <Button className="my-8 px-6 py-3 text-lg font-semibold text-white bg-main hover:bg-main rounded-lg transition">
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

      <div
        className="w-full bg-gray-50 dark:bg-slate-800 py-24 px-4 md:px-6 lg:px-20"
        id="home-como-empiezo"
      >
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          ¿Cómo empiezo?
        </h2>
        <div className="px-16 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-0 text-center items-center">
          {steps.map((step, index) => (
            <Fragment key={step.id}>
              <div
                key={step.id}
                className="flex flex-col items-center md:px-3 lg:px-0"
              >
                <div className="w-12 h-12 bg-main text-white rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <p className="mt-2 font-semibold text-gray-800 dark:text-gray-300">
                  {step.title}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-justify">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex justify-center">
                  <ArrowRight className="text-gray-400 dark:text-gray-500 w-6 h-6" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="w-full py-28 px-6 md:px-10" id="home-plataforma">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl text-left font-semibold">
              Gestión de expedientes fácil
            </h2>
            <p className="mt-4 text-left text-gray-700 dark:text-gray-300">
              Diseñado para que agregues, administres y compartas expedientes
              sin complicaciones. No necesitas capacitación ni configuraciones
              complejas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center">
                <FileText className="text-main" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-left">
                  Sube y organiza expedientes
                </h3>
                <p className="mt-4 text-left text-gray-700 dark:text-gray-300">
                  Agrega los códigos de expedientes y nuestra plataforma los
                  organizará y notificará sobre actualizaciones.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center">
                <Clock className="text-main" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-left">
                  Notificaciones a tu medida
                </h3>
                <p className="mt-4 text-left text-gray-700 dark:text-gray-300">
                  Configura horarios específicos para recibir notificaciones y
                  estar siempre informado de cambios importantes.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center">
                <Users className="text-main" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-left">
                  Colabora con tu equipo
                </h3>
                <p className="mt-4 text-left text-gray-700 dark:text-gray-300">
                  Comparte expedientes con tu equipo, asigna roles y gestiona
                  permisos fácilmente dentro de la plataforma.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center">
                <Shield className="text-main" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-left">
                  Seguridad y respaldo
                </h3>
                <p className="mt-4 text-left text-gray-700 dark:text-gray-300">
                  Tus expedientes estarán siempre disponibles y protegidos con
                  cifrado de última generación.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:px-8 lg:px-16 mt-24">
          <Image
            src="/images/Captura4.png"
            alt="Plataforma"
            className="rounded-lg object-cover w-full"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>

      <section className="w-full bg-gray-50 dark:bg-slate-800 py-24 px-4 md:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Elige un plan a tu medida
          </h2>
          <p className="text-gray-400 mt-2">
            Utiliza un plan dependiendo de la cantidad de expedientes que
            necesites revisar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-sm text-gray-400">{plan.description}</p>
              <p className="text-3xl font-bold mt-2">
                {plan.price}{" "}
                <span className="text-lg font-normal">
                  {plan.discountPrice && "/ mes"}
                </span>
              </p>
              {plan.discountPrice && (
                <p className="text-gray-400 text-sm">
                  S/{plan.discountPrice} / mes si se paga por seis meses
                </p>
              )}

              <ul className="mt-4 space-y-2 text-sm">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-main mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button className="mt-6 w-full bg-main hover:bg-main/90 text-white py-2 rounded-lg">
                Suscribirme
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-28 px-6 md:px-10" id="home-preguntas">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl text-left font-semibold mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-700 text-left dark:text-gray-300">
              Diseñado para que agregues, administres y compartas expedientes
              sin complicaciones. No necesitas capacitación ni configuraciones
              complejas.
            </p>
          </div>

          <div>
            <Accordion
              type="single"
              collapsible
              className="grid grid-cols-1 gap-4"
            >
              <AccordionItem
                value="item-1"
                className="hover:bg-gray-200 dark:[&[data-state=open]]:bg-gray-800 dark:bg-gray-800 rounded-lg [&[data-state=open]]:bg-gray-200"
              >
                <AccordionTrigger>¿Qué nos diferencia?</AccordionTrigger>

                <AccordionContent className="p-4 dark:text-gray-300 text-left">
                  A diferencia de otros servicios, nuestra plataforma es fácil
                  de usar y sin capacitaciones. Además, ofrecemos tarifas
                  accesibles para todos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="hover:bg-gray-200 dark:[&[data-state=open]]:bg-gray-800 dark:bg-gray-800 rounded-lg [&[data-state=open]]:bg-gray-200"
              >
                <AccordionTrigger>
                  ¿Mi información es confidencial?
                </AccordionTrigger>

                <AccordionContent className="p-4 dark:text-gray-300 text-left">
                  Toda la información está protegida con cifrado y medidas de
                  seguridad de última generación.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="hover:bg-gray-200 dark:[&[data-state=open]]:bg-gray-800 dark:bg-gray-800 rounded-lg [&[data-state=open]]:bg-gray-200"
              >
                <AccordionTrigger>
                  ¿Qué pasa si el CEJ no funciona?
                </AccordionTrigger>

                <AccordionContent className="p-4 dark:text-gray-300 text-left">
                  Puedes seguir consultando la información actualizada dentro de
                  nuestra plataforma.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="hover:bg-gray-200 dark:[&[data-state=open]]:bg-gray-800 dark:bg-gray-800 rounded-lg [&[data-state=open]]:bg-gray-200"
              >
                <AccordionTrigger>
                  ¿Qué pasa con los cuadernos incidentales?
                </AccordionTrigger>

                <AccordionContent className="p-4 dark:text-gray-300 text-left">
                  También puedes gestionarlos y compartirlos con tu equipo,
                  igual que cualquier expediente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="hover:bg-gray-200 [&[data-state=open]]:bg-gray-200 dark:[&[data-state=open]]:bg-gray-800 dark:bg-gray-800 rounded-lg "
              >
                <AccordionTrigger>¿Cómo me suscribo?</AccordionTrigger>

                <AccordionContent className="p-4 dark:text-gray-300 text-left">
                  El proceso es muy sencillo. Contáctanos y te guiaremos paso a
                  paso.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </section>
  );
}
