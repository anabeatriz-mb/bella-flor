import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface CardProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  destaque?: boolean;
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  destaque,
}: CardProdutoProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Card className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {destaque && (
        <Badge className="absolute top-4 right-4 z-30 bg-[#C88E82] text-white shadow-md">
          Destaque
        </Badge>
      )}

      {/* Imagem */}
      <div className="relative h-80 w-full overflow-hidden bg-white">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Gradiente para dar mais sofisticação */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
      </div>

      {/* Conteúdo */}
      <CardHeader className="space-y-3 p-6">
        <CardTitle className="line-clamp-1 text-xl font-bold text-[#8f584e]">
          {title}
        </CardTitle>

        <CardDescription className="line-clamp-2 text-sm leading-relaxed text-slate-600">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Rodapé */}
      <CardFooter className="flex flex-col gap-4 px-6 pb-6 pt-0">
        <div className="w-full text-center">
          <span className="text-2xl font-bold text-[#8f584e]">
            {formattedPrice}
          </span>
        </div>

        <Button className="w-full rounded-2xl bg-[#8f584e] py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-[#7a433f] hover:shadow-lg">
          Comprar Agora
        </Button>
      </CardFooter>
    </Card>
  );
}