export class FishPlaceExtraDesc {
  constructor(public id?: string, public img?: string, public desc?: string) {}
}

export class FishPlace {
  constructor(
    public id?: string,
    public name?: string,
    public price?: number,
    public icon?: string,
    public desc?: string,
    public extraDesc?: Array<FishPlaceExtraDesc>,
    public fishClassifyIds?: Array<string>
  ) {}
}
