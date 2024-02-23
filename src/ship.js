class Ship
{
    constructor(length, name)
    {
        this.name = name;
        this.length = length;
        this.numberOfHit = 0;
        this.sunk = false;
    }

    hit()
    {
        return ++this.numberOfHit;
    }

    isSunk()
    {
        if((this.length - this.numberOfHit) === 0) return this.sunk = true;
    }
}

export { Ship }

