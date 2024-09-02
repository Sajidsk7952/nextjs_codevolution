import { type NextRequest } from 'next/server';
import {comments} from './data';

export async function GET(request : NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const comment = query ? comments.filter(comment => comment.text.includes(query)) : comments;
    return  Response.json(comment);
}

export async function POST(request : Request){
    const comment = await request.json();
    const newComment = {
        id: comments.length+1,
        text: comment,
    }
    comments.push(newComment);
    return Response.json(JSON.stringify(newComment),{
        headers: {
            "Content-type" : "application/json"
        },
        status: 201,
    })

}