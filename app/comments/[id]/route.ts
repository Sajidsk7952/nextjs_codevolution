import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(_request : Request,{params} : {params : {id: string}}){
    if(parseInt(params.id)>comments.length){
        redirect('/comments');
    }
    const comment = comments.find(com => parseInt(params.id) === com.id);
    return new Response(JSON.stringify(comment), {
        headers : {
            'Content-Type' : 'application/json',
        },
        status: 200
    });
}

export async function PATCH(request: Request,{params} : {params : {id: string}}){
    const body = await request.json();
    const {text} = body;
    const idx = comments.findIndex(com => com.id === parseInt(params.id));
    comments[idx].text = text;
    return Response.json(comments[idx]);
}

export async function DELETE(request : Request,{params}: {params : {id: string}}){
    const idx = comments.findIndex(com => com.id === parseInt(params.id));
    const deletedComment = comments[idx];
    comments.splice(idx,1);
    return Response.json(deletedComment);
}