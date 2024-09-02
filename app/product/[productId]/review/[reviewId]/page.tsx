"use client"

function getNumber(count: number) : number{
    return Math.floor(Math.random()*count);
}
export default function Page({params} : {params : {productId: string,reviewId: string}}){
    const num = getNumber(2);
    if(num === 1){
        throw new Error("Error in getting review");
    }
    return(
        <h1>{params.reviewId} review of product {params.productId}</h1>
    )
}