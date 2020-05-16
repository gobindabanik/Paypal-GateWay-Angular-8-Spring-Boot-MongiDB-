export class Order {
  public price : number ;
	public currency :String ;
	public method: String ;
	public intent : String ;
  public description : String ;
    
    constructor(order?: Order) {
		Object.assign(this, order);
	}
}
