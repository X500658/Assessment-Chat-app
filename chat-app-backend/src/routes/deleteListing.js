import { db } from "../database";

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        // const id = req.params.id
        const {id} = req.params
        await db.query(
            `DELETE FROM listings WHERE listings.id=?`,
            [id]
        )
        return {message: 'Successfully deleted'};
    }
}