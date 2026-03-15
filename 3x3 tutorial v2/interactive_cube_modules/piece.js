export class Piece
{
    _homePosition;
    _color;

    // TODO update all cases where a piece is being created. JS cannot have multiple constructors
    // constructor()
    // {
    //     this._homePosition = "";
    //     this._color = "rgb(130, 130, 130)";
    // }
    constructor(homePosition, color)
    {
        this._homePosition = homePosition;
        this._color = color;
    }

    GetHomePosition()
    {
        return this._homePosition;
    }
    GetColor()
    {
        return this._color;
    }
    GetColorTwo()
    {
        return ConsoleColor.Gray;
    }
    GetColorThree()
    {
        return ConsoleColor.Gray;
    }
    DisablePiece()
    {
        //Change the display colors
    }
    EnablePiece()
    {
        //Change the display colors
    }
}