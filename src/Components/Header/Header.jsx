

const Header = () => {
    return (
        <div>
            <div className="m-4">
                <div className=" bg-base-100 flex flex-col lg:flex-row items-center justify-center">

                    <div className="flex-1 flex items-center justify-center lg:items-start lg:justify-start">
                        <a className="btn btn-ghost text-xl">
                            <h1 className="text-5xl mulishFont font-extrabold text-[#12132D] mb-4">Farmer Health</h1>
                        </a>
                    </div>

                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 items-center justify-center">
                            <li className="">
                                <a>
                                    <div className="tooltip" data-tip="Home">
                                        <i
                                            className="fa-solid fa-house rounded-full border-2 border-[#0307121A] p-3 text-[#12132D99]"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <div className="tooltip" data-tip="Edit">
                                        <i
                                            className="fa-solid fa-pencil rounded-full border-2 border-[#0307121A] p-3 text-[#12132D99]"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <div className="tooltip" data-tip="Person">
                                        <i
                                            className="fa-solid fa-user rounded-full border-2 border-[#0307121A] p-3 text-[#12132D99]"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <div className="tooltip" data-tip="Report">
                                        <i
                                            className="fa-regular fa-flag rounded-full border-2 border-[#0307121A] p-3 text-[#12132D99]"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className=""><button className="btn bg-[#797DFC] text-white px-8 rounded-full">Sign
                                    In</button></a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;