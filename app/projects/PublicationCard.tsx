import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface PublicationCardProps {
  title: string;
  date: string;
  description: string;
  authors: string;
  link: string;
}

const PublicationCard = (props: PublicationCardProps) => {
  return (
    <Card className="duration-300 transition-all transform hover:translate-y-1 hover:shadow-2xl hover:shadow-indigo-900 hover:border-gray-300 dark:bg-gradient-to-bl from-slate-900 to-neutral-900">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-justify">{props.description}</p>
      </CardContent>
      <Separator />

      <CardFooter>
        <div className="w-full flex justify-around items-center mt-2">
          <Link href="/about" className="me-2">{props.authors}</Link>
          <Button asChild variant="outline" className="group" >
          <Link href={props.link}>View PDF
            <svg
              className="transition-all transform group-hover:translate-x-1 group-hover:shadow-2xl duration-300 rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PublicationCard;
