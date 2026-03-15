import { Piece } from './piece.js';

export class Edge extends Piece
{
    _oriented;
    _colorTwo;

    // TODO update all cases where Edge is being created. JS cannot have multiple constructors
    // constructor()
    // {
    //     super()
    //     this._oriented = true;
    //     this._colorTwo = "rgb(130, 130, 130)";
    // }
    constructor(homePosition, color, colorTwo)
    {
        super(homePosition, color);
        this._oriented = true;
        this._colorTwo = colorTwo;
    }

    // public Edge(string dataString) :base()
    // {
    //     Dictionary<string, ConsoleColor> colorInterpreter = new Dictionary<string, ConsoleColor>{["White"] = ConsoleColor.White, ["DarkRed"] = ConsoleColor.DarkRed, ["Green"] = ConsoleColor.Green, ["Red"] = ConsoleColor.Red, ["Blue"] = ConsoleColor.Blue, ["Yellow"] = ConsoleColor.Yellow};
    //     string[] components = dataString.Split(",");
    //     _homePosition = components[0];
    //     _color = colorInterpreter[components[1]];
    //     this._colorTwo = colorInterpreter[components[2]];
    //     this._oriented = Convert.ToBoolean(components[3]);
    // }

    FlipEdge()
    {
        // TODO see if there is a way to condense this code
        this._oriented = !this._oriented;
        let tempColor1 = this._color;
        let tempColor2 = this._colorTwo;
        this._color = tempColor2;
        this._colorTwo = tempColor1;
    }
    // Are these methods needed here?:
    IsOriented()
    {
        return this._oriented;
    }
    GetColorTwo()
    {
        return this._colorTwo;
    }
}