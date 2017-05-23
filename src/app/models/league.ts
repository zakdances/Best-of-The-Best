
export interface League {
    name: string;
    commissioner: string;
    avatar: {
        class: string
    }
}

export function newLeague(name: string, commissioner: string, avatar: {class: string}): League {
    return {
        name: name,
        commissioner: commissioner,
        avatar: avatar
    };
}