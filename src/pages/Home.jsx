import React from "react";

export default function Home(){
    return (
        <main className="bg-gradient-to-tr from-blue-800 to-blue-400
        w-screen min-h-screen max-w-[500px] p-6 mx-auto">
            <h1 className="text-white text-4xl font-light">Home Page</h1>
            <form action="" className="
                w-full bg-white p-6 flex flex-col gap-6 shadow-lg rounded-lg mt-6
            hover:bg-orange-500 group">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="group-hover:text-white">Email</label>
                    <input autoComplete="none" type="email" id="email" className="h-10 px-3 bg-slate-200" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" className="h-10 px-3 bg-slate-200" />
                </div>
                <button className="h-10 w-24 bg-blue-500 text-white rounded-xl">login</button>

            </form>

        </main>
    )
}