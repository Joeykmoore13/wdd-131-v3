export class CubeState
{
    _pieces;
    _edges;
    _corners;
    _currentCenter = null;

    // Update all cases where CubeState is being created. JS cannot have multiple constructors
    constructor()
    {
        this._pieces = {};
        this._edges = {};
        this._corners = {};
    }
    // public CubeState(Dictionary<string, Corner> cornerList)
    // {
    //     this._pieces = new Dictionary<string, Piece>();
    //     this._edges = new Dictionary<string, Edge>();
    //     this._corners = new Dictionary<string, Corner>(cornerList);
    //     cornerList.ToList().ForEach(x => this._pieces.Add(x.Key, x.Value));
    // }
    // public CubeState(Dictionary<string, Corner> cornerList, Dictionary<string, Edge> edgeList, Center center)
    // {
    //     this._edges = new Dictionary<string, Edge>(edgeList);
    //     this._corners = new Dictionary<string, Corner>(cornerList);
    //     this._currentCenter = center;
    //     this._edges = edgeList;
    //     this._corners = cornerList;
    //     this._pieces = new Dictionary<string, Piece>();
    //     edgeList.ToList().ForEach(x => this._pieces.Add(x.Key, x.Value));
    //     cornerList.ToList().ForEach(x => this._pieces.Add(x.Key, x.Value));
    //     this._pieces.Add("center", center);
    // }

    GetPieces()
    {
        return this._pieces;
    }

    // TODO update this
    GetDataString()
    {

    }
    // GetDataString()
    // {
    //     List<string> pieceKeys = new List<string>(this._pieces.Keys);
    //     string subString = "";
    //     string dataString = "";
    //     var cornerSearch = new Regex(@"\w{1}[c]");
    //     foreach (var key in pieceKeys)
    //     {
    //         if (cornerSearch.IsMatch(key))
    //         {
    //             subString = $"2;{key};{this._corners[key].GetHomePosition()},{this._corners[key].GetColor()},{this._corners[key].GetColorTwo()},{this._corners[key].GetColorThree()},{this._corners[key].GetOrientation()}";
    //         }
    //         else if (key == "center")
    //         {
    //             subString = $"3;{key};{currentCenter.GetOrientation()},{currentCenter.GetColor()}";
    //         }
    //         else
    //         {
    //             subString = $"1;{key};{this._edges[key].GetHomePosition()},{this._edges[key].GetColor()},{this._edges[key].GetColorTwo()},{this._edges[key].IsOriented()}";
    //         }
    //         dataString = dataString + $"|{subString}";
    //     }
    //     return dataString;
    // }
}