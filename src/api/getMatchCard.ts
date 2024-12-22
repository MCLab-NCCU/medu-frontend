import { userMatch } from "../datatype/User";

async function getMatchCard(token: string) {
    const res = await fetch(
        import.meta.env.VITE_SERVER_URL + "match/matchcard",
        {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token!,
        },
        }
    );

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    
    return res.json() as Promise<userMatch>;
}

export default getMatchCard;