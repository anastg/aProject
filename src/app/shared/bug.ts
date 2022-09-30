export class bug {
  private _Title: String;
  private _Priority: String;
  private _Reporter: String;
  private _DateCreated: String;
  private _Status: String;
  
  constructor(Title: String,  Priority:String, Reporter:String, DateCreated:String, Status:String,) {
    this._Title = Title;
    this._Priority = Priority;
    this._Reporter = Reporter;
    this._DateCreated = DateCreated;
    this._Status = Status;
  }

  get Title(): String {
    return this._Title;
  }

  get Priority(): String {
    return this._Priority;
  }

  get Reporter(): String {
    return this._Reporter;
  }

  get DateCreated(): String {
    return this._DateCreated;
  }

  get Status(): String {
    return this._Status;
  }


}