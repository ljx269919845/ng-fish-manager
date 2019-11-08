export class FishClassifyExtraDesc {
  constructor(public id?: string, public img?: string, public desc?: string) {}
}

export class FishClassify {
  constructor(
    public id?: string,
    public name?: string,
    public price?: number,
    public icon?: string,
    public desc?: string,
    public extraDesc?: Array<FishClassifyExtraDesc>,
    public fishPlaceIds?: Array<string>
  ) {}
}
