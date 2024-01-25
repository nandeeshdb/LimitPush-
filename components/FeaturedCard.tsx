interface FeaturedCardProps{
    id:number
    image:String
    name:String
}

function FeaturedCard({id,image,name}:FeaturedCardProps) {
  return (
    <div className="grid grid-cols-2">
        <div className="border border-black rounded-xl">
            {name}
        </div>

    </div>
  )
}

export default FeaturedCard