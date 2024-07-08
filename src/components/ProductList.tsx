import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";


const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
    categoryId, 
    limit,
}:{
    categoryId: string;
     limit? : number;
    }) => {

        
    const wixClient = await wixClientServer();

    const res =  wixClient.products.queryProducts().limit(limit || PRODUCT_PER_PAGE).find();

    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image 
                        src="https://images.pexels.com/photos/26065764/pexels-photo-26065764/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image 
                        src="https://images.pexels.com/photos/23932715/pexels-photo-23932715/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-levi text-levi w-max py-2 px-4 text-xs hover:bg-levi hover:text-white">Add to Cart</button>
            </Link>

            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image 
                        src="https://images.pexels.com/photos/26065764/pexels-photo-26065764/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image 
                        src="https://images.pexels.com/photos/23932715/pexels-photo-23932715/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-levi text-levi w-max py-2 px-4 text-xs hover:bg-levi hover:text-white">Add to Cart</button>
            </Link>

            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image 
                        src="https://images.pexels.com/photos/26065764/pexels-photo-26065764/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image 
                        src="https://images.pexels.com/photos/23932715/pexels-photo-23932715/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-levi text-levi w-max py-2 px-4 text-xs hover:bg-levi hover:text-white">Add to Cart</button>
            </Link>

            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image 
                        src="https://images.pexels.com/photos/26065764/pexels-photo-26065764/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image 
                        src="https://images.pexels.com/photos/23932715/pexels-photo-23932715/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-levi text-levi w-max py-2 px-4 text-xs hover:bg-levi hover:text-white">Add to Cart</button>
            </Link>

            
        </div>
    )
}

export default ProductList;