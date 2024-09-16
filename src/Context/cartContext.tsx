import { createContext, useEffect, useState } from "react";
import { ProductType } from "../Components/Product.types";

type CartContextProviderProps = {
    children: React.ReactNode;
};

type CartContextType = {
    UserCart: ProductType[];
    addProduct: (id: number) => void;
    removeProduct: (id: number) => void;
    removeAll: () => void;
    shop: ProductType[];
};

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [UserCart, setUserCart] =
        useState<ProductType[]>([]);
    const [shop, setShop] = useState<ProductType[]>([]);
    useEffect(() => {
        (async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json() as ProductType[]
            setShop(data)


        })()
        // fetch('https://fakestoreapi.com/products').
        // then(res => res.json()).
        // then(data => setShop(data))

    }, [])

    const addProduct = (id: number) => {
        setUserCart((prevProduct) => {

            const mainProductInCart = UserCart.find(product => product.id === id)
            if (mainProductInCart) {
                return prevProduct.map(product => {
                    if (product.id === id) {
                        return { ...product, count: product.count + 1 }

                    }
                    else {
                        return product
                    }
                })
            }
            else {
                const mainProductInShop = shop.find(
                    (product) => product.id === id
                ) as ProductType
                return [...prevProduct, { ...mainProductInShop, count: 1 }]
            }
            return []
        })
    };

    const removeProduct = (id: number) => {

        setUserCart(prevProduct => prevProduct.filter(product => product.id != id))
    };
    const removeAll = () => {
        setUserCart([])
    };

    return (
        <CartContext.Provider
            value={{
                addProduct,
                removeProduct,
                removeAll,
                shop,
                UserCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
