export const pizzaPrice = {
    small: 150,
    medium: 200,
    large: 300
  };
  export const minOrderValue = 200;
  export const maxOrderValue = 1000;
  
  
  export const handleCustomerCountChange = (customerCount: any) => {
    const { adults, children } = customerCount;
    const totalPieces = adults * 2 + children * 1;

    let large = Math.floor(totalPieces / 4);
    let medium = Math.floor((totalPieces - large * 4) / 2);
    let small = Math.floor(totalPieces - (large * 4 + medium * 2));
  
  
    return {
      pizzaCount: {
        small,
        medium,
        large
      },
      customerCount: {
        adults,
        children
      }
    };
  };
  
  export const handlePizzaCountChange = (pizzaCount: any) => {
    const { small, medium, large } = pizzaCount;
    const totalPieces = small + (medium * 2 + large * 4);

  
    let largeCount = Math.floor(totalPieces / 4);
    let mediumCount = Math.floor((totalPieces - largeCount * 4) / 2);
    let smallCount = Math.floor(totalPieces - (largeCount * 4 + mediumCount * 2));
  
    let adults = largeCount * 2 + mediumCount;
    let children = smallCount;
  
  
    return {
      pizzaCount: {
        small: smallCount,
        medium: mediumCount,
        large: largeCount
      },
      customerCount: {
        adults,
        children
      }
    };
  };
  
  export const calculatePrize = (pizzaCount: any, customerCount: any) => {
    const { adults, children } = customerCount;
    return adults * pizzaPrice.medium + children * pizzaPrice.small;
  };
  