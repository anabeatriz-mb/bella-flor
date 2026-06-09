import CardProduto from "../../components/CardProduto"
import produtos from "../../../produtos.json"

export default function Produtos() {
  return (
    <div className="w-full min-h-screen bg-[#FDF9F7] pb-24">
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl text-[#B89B67] font-light tracking-wide">
          Produtos Bella Flor
        </h1>
        <p className="mt-4 text-lg text-[#8A6F63] italic">
          Descubra nossos items
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-10">
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            id={produto.id}
            title={produto.title}
            description={produto.description}
            price={produto.price}
            imageSrc={produto.imageSrc}
            destaque={produto.destaque}
          />
        ))}
      </div>
    </div>
  )
}