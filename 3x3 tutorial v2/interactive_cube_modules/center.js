import { Piece } from './piece.js'

export class Center extends Piece
{
    _orientation;

    // TODO Update where center is being created. JS cannot have multiple constructors
    // constructor()
    // {
    //     super()
    //     this._orientation = 0;
    // }
    constructor(color)
    {
        super("1", color);
        this._orientation = 0;
    }
    // public Center(string dataString) :base()
    // {
    //     Dictionary<string, ConsoleColor> colorInterpreter = new Dictionary<string, ConsoleColor>{["rgb(255,255,255)"] = ConsoleColor.White, ["DarkRed"] = ConsoleColor.DarkRed, ["rgb(10, 245, 41)"] = ConsoleColor.Green, ["rgb(228, 26, 26)"] = ConsoleColor.Red, ["rgb(34, 34, 255)"] = ConsoleColor.Blue, ["rgb(255, 234, 0)"] = ConsoleColor.Yellow};
    //     string[] components = dataString.Split(",");
    //     this._orientation = Convert.ToInt32(components[0]);
    //     _color = colorInterpreter[components[1]];
    // }

    GetOrientation()
    {
        return this._orientation;
    }
    GetColors()
    {
        // White: rgb(255,255,255)
        // Green: "rgb(10, 245, 41)"
        // Red: "rgb(228, 26, 26)"
        // Blue: rgb(34, 34, 255)
        // Orange: rgb(255, 149, 0) 
        // Yellow: rgb(255, 234, 0)
        if (this._orientation == 1)
        {
            return ["rgb(255,255,255)", "rgb(10, 245, 41)", "rgb(255, 234, 0)", "rgb(34, 34, 255)"];
        }
        else if (this._orientation == 2)
        {
            return ["rgb(10, 245, 41)", "rgb(255, 234, 0)", "rgb(34, 34, 255)", "rgb(255,255,255)"];

        }
        else if (this._orientation == 3)
        {
            return ["rgb(255, 234, 0)", "rgb(34, 34, 255)", "rgb(255,255,255)", "rgb(10, 245, 41)"];
        }
        else
        {
            return ["rgb(34, 34, 255)", "rgb(255,255,255)", "rgb(10, 245, 41)", "rgb(255, 234, 0)"];
        }
    }
    M()
    {
        this._orientation = (this._orientation - 1) % 4;
    }
    Mp()
    {
        this._orientation = (this._orientation + 1) % 4;
    }
    M2()
    {
        this._orientation = (this._orientation + 2) % 4;
    }
}