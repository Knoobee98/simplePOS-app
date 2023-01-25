import Logo from './../assets/snackmart.png'
import { RxDashboard } from 'react-icons/rx'
import { FiUserPlus } from 'react-icons/fi'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { FiBell, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiArrowDownSLine } from 'react-icons/ri'

export default function HomeAdmin() {
    return (
        <>
            <div className="flex">

                {/* Sidebar */}
                <div className="basis-1/6 bg-neutral-100 h-screen flex flex-col items-center border-r-2">

                    {/* Logo */}
                    <div>
                        <img src={Logo} className="w-24 mt-2 rounded-full" alt="Logo" />
                    </div>

                    {/* Menu */}
                    <div className='w-full'>
                        {/* Dashboard */}
                        <div className='' style={{ marginTop: "30px" }}>
                            <div className=''>
                                <button className='flex items-center text-gray-600 font-semibold py-3 px-14 w-full hover:shadow-md'> {/*active belum dipasang */}
                                    <RxDashboard className='mr-2' /> Dashboard
                                </button>
                            </div>
                            <button className='flex items-center text-gray-600 font-semibold py-3 my-3 px-14 w-full hover:shadow-md'>
                                <FiUserPlus className='mr-2' />New Cashier
                            </button>
                            <button className='flex items-center text-gray-600 font-semibold py-3 px-14 w-full hover:shadow-md'>
                                <MdOutlineAttachMoney className='mr-2' /> Sales
                            </button>
                        </div>

                    </div>



                </div>

                {/* Main Page */}
                <div className="basis-5/6">

                    {/* Navbar */}
                    <div className='flex items-center justify-end text-gray-600 shadow-lg py-5 pr-4 bg-neutral-100'>
                        {/* Search */}
                        <div>
                            <input type="text" className="border-2 border-neutral-300 rounded-full px-3 py-1 mr-10 text-sm w-60" />
                        </div>
                        {/* Alert */}
                        <div>
                            <FiBell className='text-xl mr-3' />
                        </div>
                        {/* Account */}
                        <div className='flex items-center'>
                            <HiOutlineUserCircle className='text-2xl mr-2' />
                            <p className='text-sm font-semibold'>Username</p>
                            <RiArrowDownSLine className='text-xl font-semibold' />
                        </div>
                    </div>

                    {/* Under Navbar */}
                    <div className='bg-indigo-200 px-10 py-3 flex text-indigo-500 text-sm'>
                        <p className='font-bold mr-1'>
                            Hello,
                        </p>
                        <p>
                            Welcome Back Username
                        </p>
                    </div>

                    {/* Filter & Sort & Add */}
                    <div className='mx-24 mt-10 flex items-center'>
                        {/* Filter */}
                        <select className="form-select form-select-sm appearance-none block w-32 px-2 py-1 text-sm font-normal first-letter:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none mr-5" aria-label=".form-select-sm example text-gray-800">
                            <option selected>Select Filter</option>
                            <option value="1">Product Name</option>
                            <option value="2">Category</option>
                        </select>
                        {/* Sort */}
                        <select className="form-select form-select-sm appearance-none block w-40 px-2 py-1 text-sm font-normal first-letter:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none mr-5" aria-label=".form-select-sm example text-gray-800">
                            <option selected>Sort By</option>
                            <option value="1">Product Name: A-Z</option>
                            <option value="1">Product Name: Z-A</option>
                            <option value="2">Price: Low to High</option>
                            <option value="2">Price: High to Low</option>
                        </select>
                        {/* Add Products */}
                        <div>
                            <button className='text-gray-800 flex items-center px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>
                                <FiPlus className='text-lg mr-1' />
                                <p className='text-md'>
                                    Products
                                </p>
                            </button>
                        </div>
                    </div>


                    {/* List Products */}
                    <div className='mx-24 mt-6'>

                        {/* Cards Product */}
                        <div className='w-56 shadow-lg rounded-lg'>

                            {/* Image */}
                            <img src="https://assets.bonappetit.com/photos/61b7c725ae5736f3022cb4fb/5:4/w_3991,h_3193,c_limit/20211207%20ITS%20Snack%20Mix%20Lede.jpg" alt='Image Product' className='w-56 rounded-t-lg' />
                            {/* Product Detail */}
                            <div className='px-2 py-1'>
                                <p>
                                    Product Name
                                </p>
                                <p>
                                    Stock
                                </p>
                                <p>
                                    Price
                                </p>
                            </div>
                            {/* Edit & Delete */}
                            <div className='flex justify-center items-center py-2'>
                                {/* Edit */}
                                <button className='mr-5 text-white bg-yellow-500 p-1 rounded-md text-2xl'>
                                    <FiEdit2 />
                                </button>
                                {/* Delete */}
                                <button className='text-white bg-red-500 p-1 rounded-md text-2xl'>
                                    <FiTrash2 />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}