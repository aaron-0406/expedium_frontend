import { ChevronDown, ChevronRight } from "lucide-react";
import * as React from "react";

interface AccordionContextType {
  openValue: string | null;
  setOpenValue: (value: string | null) => void;
  type: "single" | "multiple";
  collapsible: boolean;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined
);

interface AccordionProps {
  type: "single" | "multiple";
  collapsible: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  type,
  collapsible,
  children,
  className,
}) => {
  const [openValue, setOpenValue] = React.useState<string | null>(null);

  return (
    <AccordionContext.Provider
      value={{ openValue, setOpenValue, type, collapsible }}
    >
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * El primer hijo es el encabezado (trigger) y
 * el resto es el contenido a mostrar.
 */
export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
  className,
}) => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const isOpen = context.openValue === value;
  const childrenArray = React.Children.toArray(children);
  const header = childrenArray[0];
  const content = childrenArray.slice(1);

  const toggle = () => {
    if (isOpen) {
      if (context.collapsible) {
        context.setOpenValue(null);
      }
    } else {
      context.setOpenValue(value);
    }
  };

  return (
    <div className={`${className} + ${isOpen ? " bg-gray-200" : ""}`}>
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggle}
      >
        {header}
        {isOpen ? (
          <ChevronDown className="text-[#d1ae6e]" />
        ) : (
          <ChevronRight className="text-[#d1ae6e]" />
        )}
      </div>
      {isOpen && content}
    </div>
  );
};
