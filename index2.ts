// EXERCISE 2
interface IProduct {
    productName: string;
    productId: number;
    productPrice: number;
    productDate: number;
  }
  
  class Product implements IProduct {
    constructor(
      public productName: string,
      public productId: number,
      public productPrice: number,
      public productDate: number
    ) {}
  }
  
  class Cart {
    private static instance: Cart;
    public static productList: Product[];
  
    private constructor() {}
  
    public static createInstance(product: Product) {
      if (!Cart.instance) {
        Cart.instance = new Cart();
        return Cart;
      }
  
      throw new Error("Cart is already created.");
    }
  
    public static addProductToCart(
      productName: string,
      productPrice: string,
      productDate: string
    ): void {}
  }
  
  let isFirstVisit = true;
  let cart = Cart.createInstance;
  let button = <HTMLInputElement>document.querySelector(".submit-input");
  button.addEventListener("click", () => {
    Cart.addProductToCart(
      (<HTMLInputElement>document.querySelector('[name = "product-name"]')).value,
      (<HTMLInputElement>document.querySelector('[name = "product-price"]'))
        .value,
      (<HTMLInputElement>document.querySelector('[name = "product-date"]')).value
    );
  });
  

  