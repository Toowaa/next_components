'use client';
import { Accordion, AccordionItem } from "@nextui-org/react";
interface AccordionProps {
    Question: string;
    Answer: string;
    }

export default function AccordionComponent({Question, Answer}: AccordionProps) {
  
    
  return (
    <Accordion  className="rounded-lg ">
      <AccordionItem key="1" aria-label="Accordion 1" title={Question}>
        {Answer}
      </AccordionItem>
      
    </Accordion>
  );
}
