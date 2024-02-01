export function helpLeo(money, gifts){
    gifts.sort((a, b) => a - b);
    let totalSpent = 0;

    for(let i = 0; i < gifts.length; i++){
        totalSpent += gifts[i];

        if(totalSpent > money) {
            return i;
        }
    }

    return gifts.length;
}