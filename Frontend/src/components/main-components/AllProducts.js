import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const [paginationState, setPaginationState] = useState(1)
    const { allProducts } = useSelector(state => state.product)
    if (!allProducts.length) {
        return;
    }
    let arr = [];
    const pages = ((allProducts.length / 8) + (allProducts.length % 8 ? 1 : 0)).toFixed(0)
    let pagesTemp = pages
    while (pagesTemp) {
        arr.unshift(pagesTemp)
        --pagesTemp;
    }
    return (
        <>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
                {allProducts
                    ?.slice((paginationState - 1) * 8, paginationState * 8)
                    .map((product) => (
                        <ProductCard productData={product} key={product._id} />
                    ))}
            </div>

            <div className="flex justify-center mt-10 space-x-2">
                {paginationState > 1 && (
                    <button
                        onClick={() => setPaginationState(paginationState - 1)}
                        className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-md hover:opacity-90 transition"
                    >
                        {"<"} Previous
                    </button>
                )}

                {arr.map((e) => (
                    <button
                        key={e}
                        onClick={() => setPaginationState(e)}
                        className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-md transition ${paginationState === e
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        {e}
                    </button>
                ))}

                {paginationState < pages && (
                    <button
                        onClick={() => setPaginationState(paginationState + 1)}
                        className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-md hover:opacity-90 transition"
                    >
                        Next {">"}
                    </button>
                )}
            </div>

        </>
    );
};

export default AllProducts;