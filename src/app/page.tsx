import Carrossel from "@/components/Carrosel";
import CardProduto from "@/components/CardProduto";
import produtos from "../../produtos.json"

export default function Home() {

  const produtosEmDestaque = produtos.filter(
    (produto) => produto.destaque === true
  )

  return (
    <div className="w-full min-h-screen bg-slate-50 pb-12">
      {/* Carrossel de Banner no Topo */}
      <Carrossel />

      {/* Título da Seção */}
      <div className="text-center my-10">
        <h1 className="text-5xl md:text-6xl text-[#8f584e] font-bold tracking-wide">
          Produtos em destaque
        </h1>
        <p className="text-[#C88E82] mt-2">
          Os itens mais procurados 
        </p>
      </div>

      {/* Grid Responsivo para os Cards:
          1 coluna no celular | 2 colunas no tablet | 3 colunas em telas grandes
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

        {/* Card 1: Blush */}
        <CardProduto
          id={1}
          title="Blush Bella Flor"
          description="Blush com acabamento natural."
          price={39.90}
          imageSrc="/produtos/blush.png"
          destaque={true}
        />

        {/* Card 2: Estojo */}
        <CardProduto
          id={2}
          title="Base Bella Flor"
          description="Base de alta cobertura com acabamento natural."
          price={84.90}
          imageSrc="/produtos/base.png"
          destaque={true}
        />

        {/* Card 3: Canetas */}
        <CardProduto
          id={3}
          title="Rímel Bella Flor"
          description="Rimel que aumenta o volume do cílios."
          price={49.90}
          imageSrc="/produtos/rimel.png"
          destaque={true}
        />

        {
          produtosEmDestaque.map(
            (produto) => (
              <CardProduto 
              key={produto.id}
              id={produto.id}
              title={produto.title}
              description={produto.description}
              price={produto.price}
              imageSrc={produto.imageSrc}
              destaque={produto.destaque}
              />
            )
          )
        }
      </div>
    </div>
  );
}
