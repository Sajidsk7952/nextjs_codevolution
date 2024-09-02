export default function Page({params} : {params: {slug? : string[]}}){
    const slug = params.slug || [];
    if(slug.length === 2){
        return (
            <h1>Docs for {slug[1]} of {slug[0]}</h1>
        )
    }else if(slug.length === 1){
        return(
            <h1>Docs for {slug[0]}</h1>
        )
    }
    return(
        <h1>Docs Home page</h1>
    )
}