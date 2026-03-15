import { Piece } from './piece.js'

export class Corner extends Piece {
    _orientation;
    _colorTwo;
    _colorThree;

    // TODO Fix all the places a corner is being created. JS cannot have multiple constructors
    // constructor() {
    //     super()
    //     this._orientation = 1;
    //     this._colorTwo = "rgb(130, 130, 130)";
    //     this._colorThree = "rgb(130, 130, 130)";
    // }
    constructor(homePosition, color, colorTwo, colorThree)
    {
        super(homePosition, color)
        this._orientation = 1;
        this._colorTwo = colorTwo;
        this._colorThree = colorThree;
    }
    // public Corner(string dataString) : base()
    // {
    //     Dictionary<string, ConsoleColor> colorInterpreter = new Dictionary<string, ConsoleColor>{["White"] = ConsoleColor.White, ["DarkRed"] = ConsoleColor.DarkRed, ["Green"] = ConsoleColor.Green, ["Red"] = ConsoleColor.Red, ["Blue"] = ConsoleColor.Blue, ["Yellow"] = ConsoleColor.Yellow};
    //     string[] components = dataString.Split(",");
    //     _homePosition = components[0];
    //     _color = colorInterpreter[components[1]];
    //     this._colorTwo = colorInterpreter[components[2]];
    //     this._colorThree = colorInterpreter[components[3]];
    //     this._orientation = Convert.ToInt32(components[4]);
    // }

    TwistClockwise() {
        this._orientation = (this._orientation + 1) % 3 + 1;
        let tempColorOne = this._color;
        let tempColorTwo = this._colorTwo;
        let tempColorThree = this._colorThree;

        this._color = tempColorThree;
        this._colorTwo = tempColorOne;
        this._colorThree = tempColorTwo;
    }
    TwistCounterClockwise() {
        this._orientation = (this._orientation - 1) % 3 + 1;
        let tempColorOne = this._color;
        let tempColorTwo = this._colorTwo;
        let tempColorThree = this._colorThree;

        this._color = tempColorTwo;
        this._colorTwo = tempColorThree;
        this._colorThree = tempColorOne;
    }
    GetColorTwo() {
        return this._colorTwo;
    }
    GetColorThree() {
        return this._colorThree;
    }
    GetOrientation() {
        return this._orientation;
    }
}