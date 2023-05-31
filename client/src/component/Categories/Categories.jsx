import React from 'react';
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxFGpfekE52XkmQuA_v14vP9tlcCd9hQcEJAWu9ZsZg&usqp=CAU&ec=48600112" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8X0LBaSuADMslWiuAk_TNL2B10FsBEqNeVc08-e7Nw&usqp=CAU&ec=48600112" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51gkpBmCsZP1LK7boH3hEN19OL9SyctlIYFZZ6BSSSA&usqp=CAU&ec=48600112" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            New Session
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-1">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-VXESR220kJcp5_0cM9JF-ZJl9x0IOjKGq8tkwj6zFJ_v9Nhdx2tWG5kgVg03Eio5YGVFE5tobQ&usqp=CAU&ec=48600112" alt="" />
                            <button>
                                <Link className="link" to="/products/1">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QT6-ix5Yo1cNKLtIRteEw0w9h5GM13v5TrmTKgqj6w&usqp=CAU&ec=48600112" alt="" />
                            <button>
                                <Link className="link" to="/products/1">
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldN3mr9kuoTI4sX8aH5nlFnd1L13Yui3H4DTENZQGMw&usqp=CAU&ec=48600112" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Shoes
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories
