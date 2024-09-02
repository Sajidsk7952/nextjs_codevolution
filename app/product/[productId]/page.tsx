import { Metadata } from "next";

type productIdProps = {
  params: {
    productId: string;
  };
};
export const generateMetadata = async({params} : productIdProps) : Promise<Metadata> => {
    const title = await new Promise(
        (resolve) => {
           setTimeout(()=>{
            resolve(params.productId)
           },300)
        }
    )
    return{
        title: `Product ${title}`
    }
}
export default function Page({ params }: productIdProps) {
  return <h1>{params.productId} details page</h1>;
}
