import { Cube } from './cube.js';
import { Corner } from './corner.js';
import { Edge } from './edge.js';
import { Center } from './center.js';

export class ThreeXThree extends Cube {
    _center;
    _edgeList;

    constructor() {
        super();
        // TODO fix this and reset cube so it creates the pieces correctly for javascript
        // White: rgb(255,255,255)
        // Green: rgb(10, 245, 41)
        // Red: rgb(228, 26, 26)
        // Blue: rgb(34, 34, 255)
        // Orange: rgb(255, 149, 0)
        // Yellow: rgb(255, 234, 0)
        this._center = new Center("rgb(255,255,255)");
        this._edgeList = {};
        this._edgeList["A"] = new Edge("A", "rgb(255,255,255)", "rgb(34, 34, 255)");
        this._edgeList["B"] = new Edge("B", "rgb(255,255,255)", "rgb(228, 26, 26)");
        this._edgeList["C"] = new Edge("C", "rgb(255,255,255)", "rgb(10, 245, 41)");
        this._edgeList["D"] = new Edge("D", "rgb(255,255,255)", "rgb(255, 149, 0)");
        this._edgeList["L"] = new Edge("L", "rgb(10, 245, 41)", "rgb(255, 149, 0)");
        this._edgeList["J"] = new Edge("J", "rgb(10, 245, 41)", "rgb(228, 26, 26)");
        this._edgeList["R"] = new Edge("R", "rgb(34, 34, 255)", "rgb(255, 149, 0)");
        this._edgeList["T"] = new Edge("T", "rgb(34, 34, 255)", "rgb(228, 26, 26)");
        this._edgeList["U"] = new Edge("U", "rgb(255, 234, 0)", "rgb(10, 245, 41)");
        this._edgeList["V"] = new Edge("V", "rgb(255, 234, 0)", "rgb(228, 26, 26)");
        this._edgeList["W"] = new Edge("W", "rgb(255, 234, 0)", "rgb(34, 34, 255)");
        this._edgeList["X"] = new Edge("X", "rgb(255, 234, 0)", "rgb(255, 149, 0)");
    }

    // TODO Implement this method
    SetCubeState(state) {
        // Make this so it takes the state in as the argument instead of asking for what the state should be
    }
    // public override void SetCubeState() {
    //     int input;
    //     string[] cubeDataStrings;
    //     string currentLoad;
    //     int counter = 1;
    //     while (true) {
    //         Console.WriteLine("How would you like to set the cube state?: ");
    //         Console.WriteLine("1) Reset cube");
    //         Console.WriteLine("2) Load cube state");
    //         Console.WriteLine("3) Algorithm");
    //         Console.WriteLine("4) Scramble cube");
    //         try {
    //             input = Convert.ToInt32(Console.ReadLine());
    //         }
    //         catch {
    //             Console.WriteLine("Please make a valid selection");
    //             Console.WriteLine();
    //             Console.Clear();
    //             continue;
    //         }
    //         if (input == 1) {
    //             ResetCube();
    //             return;
    //         }
    //         else if (input == 2) {
    //             counter = 1;
    //             cubeDataStrings = System.IO.File.ReadAllLines("..\\..\\..\\3x3cubestates.txt");
    //             List < string[] > names = new List < string[] > ();
    //             foreach(string line in cubeDataStrings)
    //             {
    //                 names.Add(line.Split(":"));
    //                 Console.WriteLine($"{counter}) {names.Last()[0]}");
    //                 counter++;
    //             }
    //             if (names.Count() == 0) {
    //                 Console.WriteLine("No states to load");
    //                 Console.ReadLine();
    //                 Console.Clear();
    //                 return;
    //             }
    //             while (true) {
    //                 Console.WriteLine();
    //                 Console.WriteLine("Which cube state would you like to load?");
    //                 try {
    //                     currentLoad = names[Convert.ToInt32(Console.ReadLine()) - 1][1];
    //                     break;
    //                 }
    //                 catch {
    //                     Console.WriteLine("Please make a valid selection");
    //                     Console.ReadLine();
    //                     Console.Clear();
    //                     continue;
    //                 }
    //             }
    //             ModifyCubeState(currentLoad);
    //             return;
    //         }
    //         else if (input == 3) {
    //             while (true) {
    //                 Console.WriteLine("Possible moves: R, U, F, L, B, D");
    //                 Console.WriteLine("Possible move modifiers: ' and 2");
    //                 Console.WriteLine("Which moves would you like to make?(Seperate moves with commas): ");
    //                 string alg = Console.ReadLine();
    //                 if (ParseAlgorithm(alg) == "") {
    //                     continue;
    //                 }
    //                 ResetCube();
    //                 ParseAlgorithm(alg);
    //                 return;
    //             }
    //         }
    //         else if (input == 4) {
    //             List < string > moveList = new List < string > (["R", "U", "F", "L", "D", "B"]);
    //             List < string > moveModifier = new List < string > (["", "2", "'"]);
    //             Random randomMove = new Random();
    //             string scramble = moveList[randomMove.Next(0, moveList.Count)];
    //             moveList.Remove(scramble);
    //             string nextMove = $"{moveList[randomMove.Next(0, moveList.Count)]}";
    //             scramble = $"{scramble}, {nextMove}{moveModifier[randomMove.Next(0, 2)]}";
    //             for (int i = 0; i < 20; i++)
    //             {
    //                 moveList = new List < string > (["R", "U", "F", "L", "D", "B"]);
    //                 moveList.Remove(nextMove);
    //                 nextMove = moveList[randomMove.Next(0, moveList.Count)];
    //                 scramble = $"{scramble}, {nextMove}{moveModifier[randomMove.Next(0, 2)]}";
    //             }
    //             ParseAlgorithm(scramble);
    //             return;
    //         }
    //         else {
    //             Console.WriteLine("Please make a valid selection");
    //             Console.ReadLine();
    //             Console.Clear();
    //         }
    //     }
    // }

    // TODO Implement this method
    SaveCubeState() {
        // Figure out how to save states to the user's device
    }
    // public override void SaveCubeState() {
    //     Console.WriteLine("What would you like to call this cube state?: ");
    //     string input = Console.ReadLine();
    //     Console.Clear();
    //     using(StreamWriter outputFile = new StreamWriter("..\\..\\..\\3x3cubestates.txt", false))
    //     {
    //         outputFile.WriteLine($"{input}:" + GenerateCubeState().GetDataString());
    //     }
    // }

    // TODO Implement this method
    InputAlg() {
        // Take the input from the alg box on the page and run it.
        // Also add an option to load a preset alg instead of having to type them all in. Make a drop down menu for preset algs? Pll, OLL dropdowns?
    }
    // public override void InputAlgorithm() {
    //     Console.WriteLine("Possible moves: R, U, F, L, B, D, Rw, Lw, M");
    //     Console.WriteLine("Possible move modifiers: ' and 2");
    //     Console.WriteLine("Which moves would you like to make?(Seperate moves with commas): ");
    //     string alg = Console.ReadLine();
    //     Console.Clear();
    //     string input;
    //     while (true) {
    //         Console.WriteLine("Would you like to add this algorithm the the loaded list?(Y/N): ");
    //         input = Console.ReadLine();
    //         Console.Clear();
    //         if (input.ToLower() == "y") {
    //             Console.WriteLine("What would you like to call the algorithm?: ");
    //             alg = ParseAlgorithm(alg);
    //             if (alg == "") {
    //                 return;
    //             }
    //             _algList.Add(new Algorithm(Console.ReadLine(), alg));
    //         }
    //         else if (input.ToLower() == "n") {
    //             ParseAlgorithm(alg);
    //         }
    //         else {
    //             Console.WriteLine("Please make a valid selection");
    //             Console.ReadLine();
    //             Console.Clear();
    //             continue;
    //         }
    //         return;
    //     }
    // }

    // TODO implement this method
    SaveAlgorithms() {
        // Same problem as above
    }
    // public override void SaveAlgorithms() {
    //     if (_algList.Count() < 1) {
    //         Console.WriteLine("No algorithms loaded to save");
    //         Console.ReadLine();
    //         Console.Clear();
    //     }
    //     else {
    //         string input;
    //         while (true) {
    //             Console.WriteLine("Are you sure you would like to save?(This overrides previous saved data)(Y/N): ");
    //             input = Console.ReadLine().ToLower();
    //             Console.Clear();
    //             if (input == "y") {
    //                 using(StreamWriter outputFile = new StreamWriter("..\\..\\..\\3x3algs.txt", false))
    //                 {
    //                     string dataString;
    //                     foreach(Algorithm alg in _algList)
    //                     {
    //                         dataString = $"{alg.GetAlgName()}; {alg.GetMoves().ToUpper()}";
    //                         outputFile.WriteLine(dataString);
    //                     }
    //                 }
    //                 return;
    //             }
    //             else if (input == "n") {
    //                 return;
    //             }
    //             else {
    //                 Console.WriteLine("Please make a valid selection.");
    //                 Console.ReadLine();
    //                 Console.Clear();
    //             }
    //         }
    //     }
    // }

    // TODO implement this method
    LoadAlgorithms() {
        // Same problem as above
    }
    // public override void LoadAlgorithms() {
    //     _algList.Clear();
    //     string[] lines = System.IO.File.ReadAllLines("..\\..\\..\\3x3algs.txt");
    //     foreach(string line in lines)
    //     {
    //         _algList.Add(new Algorithm(line));
    //     }
    // }

    // TODO implement this method
    // Add the 3x3 moves in addition to the regular 2x2 moves
    ParseAlgorithm(rawAlg) {

    }
    //     public override string ParseAlgorithm(string rawAlg) {
    //         Dictionary < string, System.Action > movesDict = new Dictionary < string, System.Action > { { "r", R }, { "r'", Rp }, { "r2", R2 }, { "u", U }, { "u'", Up }, { "u2", U2 }, { "f", F }, { "f'", Fp }, { "f2", F2 }, { "l", L }, { "l'", Lp }, { "l2", L2 }, { "b", B }, { "b'", Bp }, { "b2", B2 }, { "d", D }, { "d'", Dp }, { "d2", D2 }, { "rw", Rw }, { "rw'", Rwp }, { "rw2", Rw2 }, { "lw", Lw }, { "lw'", Lwp }, { "lw2", Lw2 }, { "m", M }, { "m'", Mp }, { "m2", M2 }
    //     };
    //         string[] splitAlg = rawAlg.ToLower().Split(",");
    //     List<string> moves = new List < string > (movesDict.Keys);
    //     foreach(string alg in splitAlg) {
    //         if (!moves.Contains(alg.Trim())) {
    //             Console.WriteLine("Failed to parse algorithm. An invalid move was detected.");
    //             Console.ReadLine();
    //             Console.Clear();
    //             return "";
    //         }
    //     }

    //     foreach(string alg in splitAlg) {
    //         movesDict[alg.Trim()]();
    //     }

    //         string cleanAlg = splitAlg[0];
    // foreach(string alg in splitAlg.Skip(1))
    // {
    //     cleanAlg = cleanAlg + $",{alg}";
    // }
    // return cleanAlg;
    //     }

    // I cant actually reember what this does. Ignore for now 

    // public override void ModifyCubeState(string dataString) {
    //     string[] pieces = dataString.Trim().Split("|");
    //     string[] components;
    //     foreach(string piece in pieces)
    //     {
    //         components = piece.Split(";");
    //         if (components[0] == "1") {
    //             this._edgeList[components[1].Trim()] = new Edge(components[2]);
    //         }
    //         else if (components[0] == "2") {
    //             this._cornerList[components[1].Trim()] = new Corner(components[2]);
    //         }
    //         else if (components[0] == "3") {
    //             this._center = new Center(components[2]);
    //         }
    //     }
    // }

    ResetCube() {
        this._cornerList.Clear();
        this._cornerList.Add("ac", new Corner("ac", "rgb(255,255,255)", "rgb(255, 149, 0)", "rgb(34, 34, 255)"));
        this._cornerList.Add("bc", new Corner("bc", "rgb(255,255,255)", "rgb(34, 34, 255)", "rgb(228, 26, 26)"));
        this._cornerList.Add("cc", new Corner("cc", "rgb(255,255,255)", "rgb(228, 26, 26)", "rgb(10, 245, 41)"));
        this._cornerList.Add("dc", new Corner("dc", "rgb(255,255,255)", "rgb(10, 245, 41)", "rgb(255, 149, 0)"));
        this._cornerList.Add("uc", new Corner("uc", "rgb(255, 234, 0)", "rgb(255, 149, 0)", "rgb(10, 245, 41)"));
        this._cornerList.Add("vc", new Corner("vc", "rgb(255, 234, 0)", "rgb(10, 245, 41)", "rgb(228, 26, 26)"));
        this._cornerList.Add("wc", new Corner("wc", "rgb(255, 234, 0)", "rgb(228, 26, 26)", "rgb(34, 34, 255)"));
        this._cornerList.Add("xc", new Corner("xc", "rgb(255, 234, 0)", "rgb(34, 34, 255)", "rgb(255, 149, 0)"));

        this._edgeList.Clear();
        this._edgeList.Add("A", new Edge("A", "rgb(255,255,255)", "rgb(34, 34, 255)"));
        this._edgeList.Add("B", new Edge("B", "rgb(255,255,255)", "rgb(228, 26, 26)"));
        this._edgeList.Add("C", new Edge("C", "rgb(255,255,255)", "rgb(10, 245, 41)"));
        this._edgeList.Add("D", new Edge("D", "rgb(255,255,255)", "rgb(255, 149, 0)"));
        this._edgeList.Add("L", new Edge("L", "rgb(10, 245, 41)", "rgb(255, 149, 0)"));
        this._edgeList.Add("J", new Edge("J", "rgb(10, 245, 41)", "rgb(228, 26, 26)"));
        this._edgeList.Add("R", new Edge("R", "rgb(34, 34, 255)", "rgb(255, 149, 0)"));
        this._edgeList.Add("T", new Edge("T", "rgb(34, 34, 255)", "rgb(228, 26, 26)"));
        this._edgeList.Add("U", new Edge("U", "rgb(255, 234, 0)", "rgb(10, 245, 41)"));
        this._edgeList.Add("V", new Edge("V", "rgb(255, 234, 0)", "rgb(228, 26, 26)"));
        this._edgeList.Add("W", new Edge("W", "rgb(255, 234, 0)", "rgb(34, 34, 255)"));
        this._edgeList.Add("X", new Edge("X", "rgb(255, 234, 0)", "rgb(255, 149, 0)"));

        this._center = new Center("rgb(255,255,255)");
    }



    _GetCornerColor(piece, color_num) {
        // console.log(`${piece}: ${color_num}`);
        if (piece in this._cornerList) {

            if (color_num == 1) {
                return this._cornerList[piece].GetColor();
            }
            else if (color_num == 2) {
                return this._cornerList[piece].GetColorTwo();
            }
            else if (color_num == 3) {
                return this._cornerList[piece].GetColorThree();
            }
        }
        else {
            return "rgb(68, 67, 67)";
        }
    }



    // TODO Implement this
    _GetCenterColor(piece, color_num) {

    }

    GetDisplayColors() {
        // ULFRDB
        let colors = []
        let centerColors = this._center.GetColors();
        let pieces = {}

        // Fix the center colors system here
        // console.log("======");
        // Fix the orange and red center displays. They are constant right now
        let displayLocations = [["xc", 2], ["W", 2], ["wc", 3], ["R", 1], [centerColors[0], 0], ["T", 1], ["ac", 3], ["A", 2], ["bc", 2], ["xc", 3], ["R", 2], ["ac", 2], ["ac", 1], ["A", 1], ["bc", 1], ["bc", 3], ["T", 2], ["wc", 2], ["X", 2], ["rgb(255, 149, 0)", 0], ["D", 2], ["D", 1], [centerColors[1], 0], ["B", 1], ["B", 2], ["rgb(228, 26, 26)", 0], ["V", 2], ["uc", 2], ["L", 2], ["dc", 3], ["dc", 1], ["C", 1], ["cc", 1], ["cc", 2], ["J", 2], ["vc", 3], ["dc", 2], ["C", 2], ["cc", 3], ["L", 1], [centerColors[2], 0], ["J", 1], ["uc", 3], ["U", 2], ["vc", 2], ["uc", 1], ["U", 1], ["vc", 1], ["X", 1], [centerColors[3], 0], ["V", 1], ["xc", 1], ["W", 1], ["wc", 1]];
        for (let i = 0; i < displayLocations.length; i++) {
            // console.log(displayLocations[i]);
            if (displayLocations[i][0].includes('rgb')) {
                colors.push(displayLocations[i][0]);
                // console.log(`Pushed center color for ${displayLocations[i]}`);
            }
            else if (displayLocations[i][0].includes('c')) {
                colors.push(this._GetCornerColor(displayLocations[i][0], displayLocations[i][1]));
                // console.log(`Pushed corner color for ${displayLocations[i]}`);
            }
            else if(displayLocations[i][0].length == 1)
            {
                colors.push(this._GetEdgeColor(displayLocations[i][0], displayLocations[i][1]));
                // console.log(`Pushed edge color  for ${displayLocations[i]}`);
            }
            // console.log("======");
        }
        // colors.push(this._GetEdgeColor(displayLocations[1][0], displayLocations[1][1]));
        return colors;
    }

    // This is going to be the tough one
    Display() {

    }
    // public override void Display() {
    //     Console.WriteLine("\n");
    //     List < (string, int) > displayLocationList = new List < (string, int) > ();
    //     string[] centerColors = this._center.GetColors();
    //     displayLocationList.AddRange([("blank", 0), ("blank", 0), ("blank", 0), ("xc", 2), ("W", 2), ("wc", 3), ("blank", 0), ("blank", 0), ("blank", 0), ("newline", 0), ("blank", 0), ("blank", 0), ("blank", 0), ("R", 1), (centerColors[0], 0), ("T", 1), ("blank", 0), ("blank", 0), ("blank", 0), ("newline", 0), ("blank", 0), ("blank", 0), ("blank", 0), ("ac", 3), ("A", 2), ("bc", 2), ("blank", 0), ("blank", 0), ("blank", 0), ("newline", 0), ("xc", 3), ("R", 2), ("ac", 2), ("ac", 1), ("A", 1), ("bc", 1), ("bc", 3), ("T", 2), ("wc", 2), ("newline", 0), ("X", 2), ("orange", 0), ("D", 2), ("D", 1), (centerColors[1], 0), ("B", 1), ("B", 2), ("red", 0), ("V", 2), ("newline", 0), ("uc", 2), ("L", 2), ("dc", 3), ("dc", 1), ("C", 1), ("cc", 1), ("cc", 2), ("J", 2), ("vc", 3), ("newline", 0), ("blank", 0), ("blank", 0), ("blank", 0), ("dc", 2), ("C", 2), ("cc", 3), ("blank", 0), ("blank", 0), ("blank", 0), ("newline", 0), ("blank", 0), ("blank", 0), ("blank", 0), ("L", 1), (centerColors[2], 0), ("J", 1), ("blank", 0), ("blank", 0), ("blank", 0), ("newline", 0), ("blank", 0), ("blank", 0), ("blank", 0), ("uc", 3), ("U", 2), ("vc", 2), ("blank", 0), ("blank", 0), ("blank", 0), ("newline", 0), ("blank", 0), ("blank", 0), ("blank", 0), ("uc", 1), ("U", 1), ("vc", 1), ("blank", 0), ("blank", 0), ("blank", 0), ("newline", 0), ("blank", 0), ("blank", 0), ("blank", 0), ("X", 1), (centerColors[3], 0), ("V", 1), ("blank", 0), ("blank", 0), ("blank", 0), ("newline", 0), ("blank", 0), ("blank", 0), ("blank", 0), ("xc", 1), ("W", 1), ("wc", 1), ("blank", 0), ("blank", 0), ("blank", 0)]);
    //     CubeState cubeState = GenerateCubeState();

    //     foreach((string, int) key in displayLocationList)
    //     {
    //         switch (key.Item1) {
    //             case "blue":
    //                 Console.ForegroundColor = "rgb(34, 34, 255)";
    //                 Console.Write("\u2588\u2588");
    //                 break;
    //             case "orange":
    //                 Console.ForegroundColor = "rgb(255, 149, 0)";
    //                 Console.Write("\u2588\u2588");
    //                 break;
    //             case "white":
    //                 Console.ForegroundColor = "rgb(255,255,255)";
    //                 Console.Write("\u2588\u2588");
    //                 break;
    //             case "red":
    //                 Console.ForegroundColor = "rgb(228, 26, 26)";
    //                 Console.Write("\u2588\u2588");
    //                 break;
    //             case "green":
    //                 Console.ForegroundColor = "rgb(10, 245, 41)";
    //                 Console.Write("\u2588\u2588");
    //                 break;
    //             case "yellow":
    //                 Console.ForegroundColor = "rgb(255, 234, 0)";
    //                 Console.Write("\u2588\u2588");
    //                 break;
    //             case "newline":
    //                 Console.ForegroundColor = "rgb(34, 34, 255)";
    //                 Console.WriteLine("");
    //                 break;
    //             case "blank":
    //                 Console.ForegroundColor = ConsoleColor.Black;
    //                 Console.Write("\u2588\u2588");
    //                 break;
    //             default:
    //                 if (key.Item2 == 1) {
    //                     Console.ForegroundColor = cubeState.GetPieces()[key.Item1].GetColor();
    //                 }
    //                 else if (key.Item2 == 2) {
    //                     Console.ForegroundColor = cubeState.GetPieces()[key.Item1].GetColorTwo();
    //                 }
    //                 else if (key.Item2 == 3) {
    //                     Console.ForegroundColor = cubeState.GetPieces()[key.Item1].GetColorThree();
    //                 }

    //                 Console.Write("\u2588\u2588");
    //                 break;
    //         }
    //     }
    //     Console.ResetColor();
    // }

    // TODO fix this
    GenerateCubeState() {
        return new CubeState(this._cornerList, this._edgeList, this._center);
    }

    R() {
        this.ClockwiseTurn("cc", "bc", "wc", "vc", "B", "T", "V", "J");
        this._cornerList["cc"].TwistCounterClockwise();
        this._cornerList["bc"].TwistClockwise();
        this._cornerList["wc"].TwistCounterClockwise();
        this._cornerList["vc"].TwistClockwise();
        this.Display();
    }
    Rp() {
        this.CounterClockwiseTurn("cc", "bc", "wc", "vc", "B", "T", "V", "J");
        this._cornerList["cc"].TwistCounterClockwise();
        this._cornerList["bc"].TwistClockwise();
        this._cornerList["wc"].TwistCounterClockwise();
        this._cornerList["vc"].TwistClockwise();
        this.Display();

    }
    R2() {
        this.DoubleTurn("cc", "bc", "wc", "vc", "B", "T", "V", "J");
        this.Display();
    }
    U() {
        this.ClockwiseTurn("ac", "bc", "cc", "dc", "A", "B", "C", "D");
        this.Display();
    }
    Up() {
        this.CounterClockwiseTurn("ac", "bc", "cc", "dc", "A", "B", "C", "D");
        this.Display();
    }
    U2() {
        this.DoubleTurn("ac", "bc", "cc", "dc", "A", "B", "C", "D");
        this.Display();
    }
    F() {
        this.ClockwiseTurn("dc", "cc", "vc", "uc", "C", "J", "U", "L");
        this._cornerList["dc"].TwistCounterClockwise();
        this._cornerList["cc"].TwistClockwise();
        this._cornerList["vc"].TwistCounterClockwise();
        this._cornerList["uc"].TwistClockwise();

        this._edgeList["C"].FlipEdge();
        this._edgeList["J"].FlipEdge();
        this._edgeList["U"].FlipEdge();
        this._edgeList["L"].FlipEdge();
        this.Display();
    }
    Fp() {
        this.CounterClockwiseTurn("dc", "cc", "vc", "uc", "C", "J", "U", "L");
        this._cornerList["dc"].TwistCounterClockwise();
        this._cornerList["cc"].TwistClockwise();
        this._cornerList["vc"].TwistCounterClockwise();
        this._cornerList["uc"].TwistClockwise();

        this._edgeList["C"].FlipEdge();
        this._edgeList["J"].FlipEdge();
        this._edgeList["U"].FlipEdge();
        this._edgeList["L"].FlipEdge();
        this.Display();
    }
    F2() {
        this.DoubleTurn("dc", "cc", "vc", "uc", "C", "J", "U", "L");
        this.Display();
    }
    M() {
        this._center.M();
        let tempEdge1 = this._edgeList["C"];
        let tempEdge2 = this._edgeList["A"];
        let tempEdge3 = this._edgeList["W"];
        let tempEdge4 = this._edgeList["U"];

        this._edgeList["A"] = tempEdge3;
        this._edgeList["W"] = tempEdge4;
        this._edgeList["U"] = tempEdge1;
        this._edgeList["C"] = tempEdge2;

        this._edgeList["A"].FlipEdge();
        this._edgeList["W"].FlipEdge();
        this._edgeList["U"].FlipEdge();
        this._edgeList["C"].FlipEdge();
        this.Display();
    }
    Mp() {
        this._center.Mp();
        let tempEdge1 = this._edgeList["C"];
        let tempEdge2 = this._edgeList["A"];
        let tempEdge3 = this._edgeList["W"];
        let tempEdge4 = this._edgeList["U"];

        this._edgeList["A"] = tempEdge1;
        this._edgeList["W"] = tempEdge2;
        this._edgeList["U"] = tempEdge3;
        this._edgeList["C"] = tempEdge4;

        this._edgeList["A"].FlipEdge();
        this._edgeList["W"].FlipEdge();
        this._edgeList["U"].FlipEdge();
        this._edgeList["C"].FlipEdge();
        this.Display();
    }
    M2() {
        this._center.M2();
        let tempEdge1 = this._edgeList["C"];
        let tempEdge2 = this._edgeList["A"];
        let tempEdge3 = this._edgeList["W"];
        let tempEdge4 = this._edgeList["U"];

        this._edgeList["A"] = tempEdge4;
        this._edgeList["W"] = tempEdge1;
        this._edgeList["U"] = tempEdge2;
        this._edgeList["C"] = tempEdge3;
        this.Display();
    }
    L() {
        this.ClockwiseTurn("ac", "dc", "uc", "xc", "D", "L", "X", "R");
        this._cornerList["ac"].TwistCounterClockwise();
        this._cornerList["dc"].TwistClockwise();
        this._cornerList["uc"].TwistCounterClockwise();
        this._cornerList["xc"].TwistClockwise();
        this.Display();
    }
    Lp() {
        this.CounterClockwiseTurn("ac", "dc", "uc", "xc", "D", "L", "X", "R");
        this._cornerList["ac"].TwistCounterClockwise();
        this._cornerList["dc"].TwistClockwise();
        this._cornerList["uc"].TwistCounterClockwise();
        this._cornerList["xc"].TwistClockwise();
        this.Display();
    }
    L2() {
        this.DoubleTurn("ac", "dc", "uc", "xc", "D", "L", "X", "R");
        this.Display();
    }
    B() {
        this.ClockwiseTurn("bc", "ac", "xc", "wc", "A", "R", "W", "T");
        this._cornerList["bc"].TwistCounterClockwise();
        this._cornerList["ac"].TwistClockwise();
        this._cornerList["xc"].TwistCounterClockwise();
        this._cornerList["wc"].TwistClockwise();

        this._edgeList["A"].FlipEdge();
        this._edgeList["R"].FlipEdge();
        this._edgeList["W"].FlipEdge();
        this._edgeList["T"].FlipEdge();
        this.Display();
    }
    Bp() {
        this.CounterClockwiseTurn("bc", "ac", "xc", "wc", "A", "R", "W", "T");
        this._cornerList["bc"].TwistCounterClockwise();
        this._cornerList["ac"].TwistClockwise();
        this._cornerList["xc"].TwistCounterClockwise();
        this._cornerList["wc"].TwistClockwise();

        this._edgeList["A"].FlipEdge();
        this._edgeList["R"].FlipEdge();
        this._edgeList["W"].FlipEdge();
        this._edgeList["T"].FlipEdge();
        this.Display();
    }
    B2() {
        this.DoubleTurn("bc", "ac", "xc", "wc", "A", "R", "W", "T");
        this.Display();
    }
    D() {
        this.ClockwiseTurn("uc", "vc", "wc", "xc", "U", "V", "W", "X");
        this.Display();
    }
    Dp() {
        this.CounterClockwiseTurn("uc", "vc", "wc", "xc", "U", "V", "W", "X");
        this.Display();
    }
    D2() {
        this.DoubleTurn("uc", "vc", "wc", "xc", "U", "V", "W", "X");
        this.Display();
    }
    Rw() {
        this.R();
        this.Mp();
        this.Display();
    }
    Rwp() {
        this.Rp();
        this.M();
        this.Display();
    }
    Rw2() {
        this.R2();
        this.M2();
        this.Display();
    }
    Lw() {
        this.L();
        this.M();
        this.Display();
    }
    Lwp() {
        this.Lp();
        this.Mp();
        this.Display();
    }
    Lw2() {
        this.L2();
        this.M2();
        this.Display();
    }
    ClockwiseTurn(...pieces) {
        // Check to see if base works here (or if there is an equivalent)
        // super.ClockwiseTurn(pieces);
        let tempEdge1 = this._edgeList[pieces[4]];
        let tempEdge2 = this._edgeList[pieces[5]];
        let tempEdge3 = this._edgeList[pieces[6]];
        let tempEdge4 = this._edgeList[pieces[7]];

        this._edgeList[pieces[5]] = tempEdge1;
        this._edgeList[pieces[6]] = tempEdge2;
        this._edgeList[pieces[7]] = tempEdge3;
        this._edgeList[pieces[4]] = tempEdge4;

        let tempCorner1 = this._cornerList[pieces[0]];
        let tempCorner2 = this._cornerList[pieces[1]];
        let tempCorner3 = this._cornerList[pieces[2]];
        let tempCorner4 = this._cornerList[pieces[3]];

        this._cornerList[pieces[1]] = tempCorner1;
        this._cornerList[pieces[2]] = tempCorner2;
        this._cornerList[pieces[3]] = tempCorner3;
        this._cornerList[pieces[0]] = tempCorner4;
    }
    CounterClockwiseTurn(...pieces) {
        // Check to see if base works here (or if there is an equivalent)
        // super.CounterClockwiseTurn(pieces);
        let tempEdge1 = this._edgeList[pieces[4]];
        let tempEdge2 = this._edgeList[pieces[5]];
        let tempEdge3 = this._edgeList[pieces[6]];
        let tempEdge4 = this._edgeList[pieces[7]];

        this._edgeList[pieces[5]] = tempEdge3;
        this._edgeList[pieces[6]] = tempEdge4;
        this._edgeList[pieces[7]] = tempEdge1;
        this._edgeList[pieces[4]] = tempEdge2;

        let tempCorner2 = this._cornerList[pieces[1]];
        let tempCorner1 = this._cornerList[pieces[0]];
        let tempCorner3 = this._cornerList[pieces[2]];
        let tempCorner4 = this._cornerList[pieces[3]];

        this._cornerList[pieces[1]] = tempCorner3;
        this._cornerList[pieces[2]] = tempCorner4;
        this._cornerList[pieces[3]] = tempCorner1;
        this._cornerList[pieces[0]] = tempCorner2;
    }
    DoubleTurn(...pieces) {
        // Check to see if base works here (or if there is an equivalent)
        // super.DoubleTurn(pieces);
        let tempEdge1 = this._edgeList[pieces[4]];
        let tempEdge2 = this._edgeList[pieces[5]];
        let tempEdge3 = this._edgeList[pieces[6]];
        let tempEdge4 = this._edgeList[pieces[7]];

        this._edgeList[pieces[5]] = tempEdge4;
        this._edgeList[pieces[6]] = tempEdge1;
        this._edgeList[pieces[7]] = tempEdge2;
        this._edgeList[pieces[4]] = tempEdge3;

        let tempCorner1 = this._cornerList[pieces[0]];
        let tempCorner2 = this._cornerList[pieces[1]];
        let tempCorner3 = this._cornerList[pieces[2]];
        let tempCorner4 = this._cornerList[pieces[3]];

        this._cornerList[pieces[1]] = tempCorner4;
        this._cornerList[pieces[2]] = tempCorner1;
        this._cornerList[pieces[3]] = tempCorner2;
        this._cornerList[pieces[0]] = tempCorner3;
    }
    IsSolved() {
        for (let i = 0; i < this._cornerList.length; i++) {
            if (corner.Key != corner.Value.GetHomePosition()) {
                return false;
            }
        }

        for (let i = 0; i < this._edgeList.length; i++) {
            if (edge.Key != edge.Value.GetHomePosition()) {
                return false;
            }
        }
        if (this._center.GetOrientation() != 0) {
            return false;
        }
        return true;
    }
}