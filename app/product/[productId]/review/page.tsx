export default function Page({params} : {params : {productId : string}}){
    return(
        <h1>Reviews Page of {params.productId}</h1>
    )
}