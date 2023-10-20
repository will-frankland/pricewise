import { connectToDB } from "@/lib/mongoose"
import Product from "@/lib/models/product.model";

export async function GET() {
  try {
    connectToDB();

    const products = await Product.find({});

    if(!products) throw new Error("No products found")

  } catch (error: any) {
    throw new Error(`Error in GET: ${error}`)
  }
}