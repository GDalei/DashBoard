"use client"
import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";


import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import Link from "next/link";
const AddProduct = () => {
    const subMitHandler = () => {

    }
    return (
        <DefaultLayout>
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    {/* <!-- Contact Form --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Product
                            </h3>
                        </div>
                        <form action="#" onSubmit={subMitHandler}>
                            <div className="p-6.5">
                                <SelectGroupOne />
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Product name
                                        </label>
                                        <input required
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Product img
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Quantity
                                        </label>
                                        <input
                                            required
                                            type="number"
                                            placeholder="Enter your Quantity"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Product MRP
                                        </label>
                                        <input
                                            required
                                            type="number"
                                            placeholder="Enter your MRP"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Product Actual Price
                                        </label>
                                        <input
                                            required
                                            type="number"
                                            placeholder=" EnterProduct Actual Price"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Product avilability
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter Product avilability"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>




                                <div className="mb-6">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Descriction
                                    </label>
                                    <textarea
                                        required
                                        rows={6}
                                        placeholder="Type your message"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    ></textarea>
                                </div>

                                <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90" onSubmit={subMitHandler}>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </DefaultLayout>
    );
};

export default AddProduct;
