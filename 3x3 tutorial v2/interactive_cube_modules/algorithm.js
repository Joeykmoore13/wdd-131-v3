export class Algorithm
{
    _algName;
    _moves;

    // TODO update all instances where this constructor is used. JS cannot have multiple constructors
    constructor()
    {
        this._algName = "";
        this._moves = "";
    }
    // public Algorithm(string algName, string moves)
    // {
    //     this._algName = algName;
    //     this._moves = moves;
    // }
    // public Algorithm(string dataString)
    // {
    //     string[] splitData = dataString.Split(";");
    //     this._algName = splitData[0].Trim();
    //     this._moves = splitData[1];
        
    // }
    GetMoves()
    {
        return this._moves;
    }
    GetAlgName()
    {
        return this._algName;
    }
}