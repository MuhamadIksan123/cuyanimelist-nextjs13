import prisma from '@/libs/prisma'

const CommentBox = async ({anime_mal_id}) => {
    const comments = await prisma.comment.findMany({where: {anime_mal_id}});
    return (
        <div className="grid grid-cols-4 gap-4 mb-4">
            {comments.map(comment => {
                return (
                    <div key={comment.id} className="bg-color-primary p-4">
                        <p className="text-md">{comment.username}</p>
                        <p className="italic">{comment.comment}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentBox